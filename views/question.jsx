var React = require('react');

class Question extends React.Component {
  render() {
    console.log('Question in check');
    let question = this.props.data.map( (user) => {
        console.log(user)
    let valueAttribute = `/question/${user.id}?_method=DELETE`
        return (
            <div>
            <button id={user.id} class="delete">
            x
            </button>
            <h3>{user.question}</h3>
            {/*<form method="POST" action={valueAttribute}>
                        <input type="submit" value="x"/>
                        </form>*/}
            </div>
            )
    })

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                    <meta httpEquiv="refresh" content="3"/>
                </head>
                <body >
                <div class="box" id="one"></div>
                <div class="box" id="two">
                <h1>Live Streaming of Questions</h1>
                {question}
                </div>
                <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Question;