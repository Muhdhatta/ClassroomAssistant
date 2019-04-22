var React = require('react');

class Brainstorm extends React.Component {
  render() {
    console.log('Brainstorming');
    let brainstorm = this.props.data.map( (user) => {
        console.log(user)
    let valueAttribute = `/brainstorm/${user.id}?_method=DELETE`
return (
        <li >
        {/*<button id={user.id} class="deleteBrainstorm">
                        x
        </button>*/}
        <p class="cloud"> {user.idea}</p>

        </li>
    )
    })

return (
<html>
<head>
    <link rel="stylesheet" href="/styleB.css"/>
    {/*<meta httpEquiv="refresh" content="3"/>*/}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
</head>
<body >
    <div class="jumbotron">

        <div class="container-fluid">
            <h1>BRAINSTORM</h1>

            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                <ul class="cloud">{brainstorm}</ul>

                </div>
                <div class="col-3"></div>
            </div>
        </div>
    </div>
    <script src="/script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</body>
</html>
    );
  }
}

module.exports = Brainstorm;