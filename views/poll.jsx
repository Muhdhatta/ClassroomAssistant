var React = require('react');

class Poll extends React.Component {
  render() {
    console.log('poll to vote');
    let poll = this.props.data.map( (poll) => {
        console.log(poll)
    let valueAttribute = `/poll/${poll.id}?_method=DELETE`
        return (
            <div>
            <h3>{poll.poll}</h3>
            <button id={poll.id} class="deletePoll">
            x
            </button>
            </div>
            )
    })

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                    <meta httpEquiv="refresh" content="30"/>
                </head>
                <body >
                <div class="box" id="one"></div>
                <div class="box" id="two">
                <h1>Live Voting!</h1>
                {poll}

                </div>
                <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Poll;