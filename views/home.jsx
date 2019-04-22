var React = require('react');

class home extends React.Component {

  render() {
    console.log('sushi tei');

    return (
 <html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

  <link rel="stylesheet" href="/styleC.css"></link>
</head>
<body class="jumbotron">
    <h1>Classroom Assistant</h1>
    <br></br>
    <br></br>
    <br></br>
<form action="/submit">
    <h3>Question App</h3>
    <input type="submit" class="btn btn-warning" value="Submit Question" formaction="/question/create"></input>
    <input type="submit" class="btn btn-warning" value="Question Portal" formaction="/question"></input>
        <br></br>
        <br></br>
        <br></br>
    <h3>Brainstroming App</h3>
    <input type="submit" class="btn btn-warning" value="Give Your Ideas!" formaction="/brainstorm/create"></input>
    <input type="submit" class="btn btn-warning" value="Brainstorm Portal" formaction="/brainstorm"></input>
        <br></br>
        <br></br>
        <br></br>
    <h3>Polling App (work in progress)</h3>
     <input type="submit" class="btn btn-warning" value="Create Your Own Poll!" formaction="/poll/createTable"></input>
    <input type="submit" class="btn btn-warning" value="Let's Cast Our Vote!" formaction="/poll"></input>
        <br></br>
        <br></br>
        <br></br>
    <h3>Kahoot Clone! (coming soon)</h3>
     <input type="submit" class="btn btn-warning" value="Enter Kahoot" formaction="http://kahoot.it"></input>
    <input type="submit" class="btn btn-warning" value="Design kahoot" formaction="http://kahoot.com"></input>
</form>

</body>

</html>
    );
  }
}

module.exports = home;