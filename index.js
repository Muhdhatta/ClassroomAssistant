console.log("starting up!!");

const express = require("express");
const methodOverride = require("method-override");
const cookierParser = require("cookie-parser");
const pg = require("pg");
// const sha256 = require("js-sha256");
const SALT = "pepper";


//require the url library
//this comes with node, so no need to yarn add
const url = require('url');

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'asadullah',
      host: '127.0.0.1',
      database: 'trainer_db',
      port: 5432
  };
}

//this is the same
const pool = new pg.Pool(configs);

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.static('public'))
app.use(cookierParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(methodOverride("_method"));

// Set react-views to be the default view engine
const reactEngine = require("express-react-views").createEngine();
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */
//===================================

app.get('/home', (req, res) => {
  // running this will let express to run home.handlebars file in your views folder
  res.render('home')
})

//=====================================Question

const questionMain = (request,response) => {
 const queryString = 'SELECT * FROM question';
    pool.query(queryString, (err, result) => {
        if (err === undefined ) {
            const data = {data: result.rows}
            response.render('question', data);
        } else {
            console.error('query error:', err.stack);
            response.send('query error');
        }
});
}

app.get("/Question", questionMain);

//=====================================create question

app.get("/question/create", (request, response) => {
  objVariableToSend = {};
    response.render("createQuestion", objVariableToSend);
});

app.post("/question/create/add", (request, response) => {
  objVariableToSend = {};
    console.log(request.body);
        let queryString =`INSERT INTO question (question, name) VALUES ('${request.body.question}','${request.body.name}') RETURNING id`;
        console.log(queryString);
            pool.query(queryString, (errObject, result) => {
                if (errObject === undefined) {
        } else {
        console.error("query error:", errObject.stack);
            response.send("query error");

}
        response.render('thankyou');
    // response.send(result.rows[0]);
});
});

//=========================================delete question


app.get('/question/:id/delete', (request, response) => {
    let index = request.params.id;
        const queryString = `SELECT * FROM question WHERE id=${index}`;
        pool.query(queryString, (err, result) => {
        if (err) {
            console.log('query error', err.stack);
                response.send('query error');
        } else {
            const data = result.rows;
                response.render('deleteQuestion', {question: data});
}
})
})

app.delete('/question/:id', (request, response) => {
    let index = request.params.id;
        const queryString = `DELETE FROM question WHERE id=${index}`;
        pool.query(queryString, (err, result) => {
        if (err) {
            console.log('query error', err.stack);
                response.send('query error');
        }else {
            questionMain(request,response);
                // const data = result.rows;
                // response.render('afterDelete', data);
}
})
})

//====================================brainstorming

app.get('/brainstorm', (request,response) => {
    const queryString = 'SELECT * FROM brainstorm';
    pool.query(queryString, (err, result) => {
        if (err === undefined ) {


            const data = {data: result.rows}

            response.render('brainstorm', data);
        } else {
            console.error('query error:', err.stack);
            response.send( 'query error' );
}

            (function (data) {
  (".posts_index p").each(function (i, elt) {
    (elt).css({
      left: Math.random() * 150,
      top: Math.random() * 150
    });
  });
});
});
});

//======================================create brainstorm

app.get("/brainstorm/create", (request, response) => {
  objVariableToSendB = {};
  response.render("createBrainstorm", objVariableToSendB);
});

app.post("/brainstorm/create/add", (request, response) => {
  objVariableToSendB = {};
  console.log(request.body);
        let queryString =`INSERT INTO brainstorm(idea, name) VALUES ('${request.body.idea}','${request.body.name}') RETURNING id`;
        console.log(queryString);
        pool.query(queryString, (errObject, result) => {
        if (errObject === undefined) {
        } else {
        console.error("query error:", errObject.stack);
        response.send("query error");
}
    response.render('good');
    // response.send(result.rows[0]);
});
});

//=========================================delete brainstorm

app.get('/brainstorm/delete', (request, response) => {
    const queryString = `SELECT * FROM brainstorm`;
    pool.query(queryString, (err, result) => {
            if (err) {
                console.log('query error', err.stack);
                response.send('query error');
            } else {
                const data = result.rows;
                response.render('deleteBrainstorm', {question: data});
}
})
})

app.delete('/brainstorm/', (request, response) => {
    const queryString = `DELETE FROM brainstorm`;
    pool.query(queryString, (err, result) => {
            if (err) {
                console.log('query error', err.stack);
                response.send('query error');
            }else {
                response.redirect("/brainstorm");
                // const data = result.rows;
                // response.render('afterDelete', data);
}
})
})

//==============================poll app

app.get('/poll', (request,response) => {
    const queryString = 'SELECT * FROM pollTable';
    pool.query(queryString, (err, result) => {
        if (err === undefined ) {
            const data = {data: result.rows}
            response.render('poll', data);
        } else {
            console.error('query error:', err.stack);
            response.send( 'query error' );
}
});
});

//==============================create Table

app.get("/poll/createTable", (request, response) => {
  objVariableToSendB = {};
  response.render("createPollTable", objVariableToSendB);
});

app.post("/poll/create/add", (request, response) => {
  objVariableToSendB = {};
  console.log(request.body);
        let queryString =`INSERT INTO pollTable(poll, input1, input2, input3, input4, input5) VALUES ('${request.body.poll}','${request.body.input1}','${request.body.input2}','${request.body.input3}','${request.body.input4}','${request.body.input5}') RETURNING id`;
        console.log(queryString);
        pool.query(queryString, (errObject, result) => {
        if (errObject === undefined) {
        } else {
        console.error("query error:", errObject.stack);
        response.send("query error");
}
    response.render('tablecomplete');
    // response.send(result.rows[0]);
});
});

//=========================================

app.get('/poll/:id/delete', (request, response) => {
    let index = request.params.id;
        const queryString = `SELECT * FROM polltable WHERE id=${index}`;
        pool.query(queryString, (err, result) => {
        if (err) {
            console.log('query error', err.stack);
                response.send('query error');
        } else {
            const data = result.rows;
                response.render('poll', {question: data});
}
})
})

app.delete('/poll/:id', (request, response) => {
    let index = request.params.id;
        const queryString = `DELETE FROM polltable WHERE id=${index}`;
        pool.query(queryString, (err, result) => {
        if (err) {
            console.log('query error', err.stack);
                response.send('query error');
        }else {
            questionMain(request,response);
                // const data = result.rows;
                // response.render('afterDelete', data);
}
})
})

//=========================================

app.get('/poll/vote/:id', (request,response) => {
    let index = request.params.id;
    const queryString = `SELECT * FROM polltable WHERE id=${index}`;
    pool.query(queryString, (err, result) => {
        if (err === undefined ) {
            const data = {data: result.rows}
            response.render('vote', data);
        } else {
            console.error('query error:', err.stack);
            response.send( 'query error' );
}
});
});




//=========================================
const port = process.env.PORT || 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");

let onClose = function(){

console.log("closing");

server.close(() => {

console.log('Process terminated');

pool.end( () => console.log('Shut down db connection pool'));
})
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);