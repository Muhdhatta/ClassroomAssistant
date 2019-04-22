var React = require('react');

class good extends React.Component {

  render() {
    console.log('sushi tei');

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <h1>Thank You! </h1>
                    <form action="/submit">
                    <input type="submit" value="Proceed To WordCloud" formaction="/brainstorm"></input>
                    </form>

                  <script src="script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = good;