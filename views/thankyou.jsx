var React = require('react');

class thankYou extends React.Component {

  render() {
    console.log('sushi');

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <h1>Thank You! </h1>
                    <form action="/submit">
                    <input type="submit" value="Proceed To Question Portal" formaction="/question"></input>
                    </form>

                  <script src="script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = thankYou;