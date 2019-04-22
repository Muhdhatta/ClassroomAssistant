let React = require("react");

class CreateBrainstorm extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Page Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
           <link rel="stylesheet" href="/styleB.css"/>
        </head>
        <body>
          <form action="/brainstorm/create/add" method="post">
            <h2>Feed Me Ideas!</h2>

            <div className="form-group">
              <label for="recipe-name">Ideas!</label>
              <input
                type="text"
                className="form-control"
                id="recipe-name"
                aria-describedby="recipe-name-help"
                name="idea"

              />
             </div>

            <div className="form-group">
              <label for="instructions">Name</label>
              <input
                type="text"
                className="form-control"
                id="instructions"
                aria-describedby="instructions-help"
                name="name"

              />
            </div>


            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>


          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
module.exports = CreateBrainstorm;