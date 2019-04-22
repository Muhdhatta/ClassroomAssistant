var React = require('react');

class tablecomplete extends React.Component {

  render() {
    console.log('sushi king');

        return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <h1>Table Complete! </h1>
                    <form action="/submit">
                    <input type="submit" value="Proceed To poll portal" formaction="/poll"></input>
                    </form>

                  <script src="script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = tablecomplete;