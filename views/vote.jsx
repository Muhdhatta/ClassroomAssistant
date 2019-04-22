var React = require('react');

class Vote extends React.Component {
  render() {
    console.log('vote');
    let vote = this.props.data.map( (vote) => {
        console.log(vote)

        return (
            <div>
                <h1>{vote.poll}</h1>
                <h3>{vote.input1}</h3>
                <h3>{vote.input2}</h3>
                <h3>{vote.input3}</h3>
                <h3>{vote.input4}</h3>
                <h3>{vote.input5}</h3>
            </div>
            )
    })

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body >
                <div class="box" id="one"></div>
                <div class="box" id="two">
                {vote}
                </div>
                <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Vote;