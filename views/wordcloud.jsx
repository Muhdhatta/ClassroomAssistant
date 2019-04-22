var React = require('react');

class Wordcloud extends React.Component {

  render() {
    console.log('wordjumble');
    let wordcloud = this.props.data.map( (user) => {
        console.log(user)
        return (
            <div>
            <h3>{user.idea}</h3>
            </div>
            )
    })

    return (
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="description" content="Given a collection of words and their frequencies or importance, generate a diagram of those words scale by their frequency or importance and then packed together." /></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

<script src="assets/require.js"></script>
<script src="../assets/js/goSamples.js"></script>
<script id="code">

var myDiagram;
var inputBox;
var PackedLayout;

function init() {

        const $ = go.GraphObject.make;  // for conciseness in defining templates

        myDiagram = $(go.Diagram, 'myDiagramDiv',  // must be the ID or reference to div
            {
              'animationManager.isEnabled': true,
              isReadOnly: true, autoScale: go.Diagram.Uniform
            });

        // Nodes have a template with bindings for size, shape, and fill color
        myDiagram.nodeTemplate =
          $(go.Node, 'Auto',
            new go.Binding('scale', 'scale'),
            $(go.TextBlock,
              new go.Binding('text', 'text'),
              new go.Binding('stroke', 'stroke'),
              new go.Binding('font', 'font'))
          );

        // find the word input box in the DOM
        inputBox = {wordcloud};

        // create a layout with the default values
        rebuildGraph();
      })
    }

    function rebuildGraph() {
      var frequencies = getWordFrequencies();
      var nodeData = generateNodeData(frequencies);
      myDiagram.model = new go.GraphLinksModel(nodeData);

      myDiagram.startTransaction('create wordcloud');
      myDiagram.layout = go.GraphObject.make(PackedLayout, {
        spacing: 5,
        arrangesToOrigin: false
      });
      myDiagram.commitTransaction('create wordcloud');
    }

    function getWordFrequencies() {
      // list of english words to exclude from the wordcloud
      var stopWords = ['i', 'me', 'my', 'myself', 'we', 'us', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
        'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself',
        'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'whose', 'this', 'that', 'these',
        'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
        'did', 'doing', 'will', 'would', 'should', 'can', 'could', 'ought', 'i\'m', 'you\'re', 'he\'s', 'she\'s', 'it\'s',
        'we\'re', 'they\'re', 'i\'ve', 'you\'ve', 'we\'ve', 'they\'ve', 'i\'d', 'you\'d', 'he\'d', 'she\'d', 'we\'d',
        'they\'d', 'i\'ll', 'you\'ll', 'he\'ll', 'she\'ll', 'we\'ll', 'they\'ll', 'isn\'t', 'aren\'t', 'wasn\'t',
        'weren\'t', 'hasn\'t', 'haven\'t', 'hadn\'t', 'doesn\'t', 'don\'t', 'didn\'t', 'won\'t', 'wouldn\'t', 'shan\'t',
        'shouldn\'t', 'can\'t', 'cannot', 'couldn\'t', 'mustn\'t', 'let\'s', 'that\'s', 'who\'s', 'what\'s', 'here\'s',
        'there\'s', 'when\'s', 'where\'s', 'why\'s', 'how\'s', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as',
        'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during',
        'before', 'after', 'above', 'below', 'to', 'from', 'up', 'upon', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
        'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each',
        'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too',
        'very', 'say', 'says', 'said', 'shall'];

      var word = /[@a-z0-9]+([-.:/'’\u2032\u00A0\u200C\u200D~]+[@a-z0-9]+)*/gi;
      var text = inputBox.value;

      var frequencies = new go.Map();
      var result;
      while ((result = word.exec(text)) !== null) {
        var match = result[0].toLowerCase();
        if (stopWords.indexOf(match) > -1) { // skip stop words
          continue;
        }
        if (!isNaN(Number(match))) { // skip numbers
          continue;
        }

        if (frequencies.has(match)) {
          frequencies.add(match, frequencies.get(match) + 1);
        } else {
          frequencies.add(match, 1);
        }
      }

      return frequencies;
    }

    function generateNodeData(frequencies) {
      // convert map to array
      var it = frequencies.iterator;
      var freqArr = [];
      while (it.next()) {
        freqArr.push({ word: it.key, freq: it.value })
      }

      // sort the frequency array in descending order
      freqArr.sort(function(a, b) {
        return b.freq - a.freq;
      })

      // create an array of nodes, scaled appropriately by frequency
      var nodes = [];
      var singleOccurrenceCount = 0;
      for (var i = 0; i < freqArr.length; i++) {
        if (freqArr[i].freq === 1) {
          singleOccurrenceCount++;
        }
        // stop creating nodes if we've already added too many that only occurred once, or if we've added 150 already
        if ((i > 25 && singleOccurrenceCount > 0.25 * i) || i > 150) {
          break;
        }
        // scale node size logarithmically with frequency
        var scale = 2 * Math.log(freqArr[i].freq) + 1;
        nodes.push({ text: freqArr[i].word, scale: scale });
      }

      // randomize order if checkbox is checked
      if (document.getElementById('randomizePositions').checked) {
        var j, x, i;
        for (i = nodes.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = nodes[i];
          nodes[i] = nodes[j];
          nodes[j] = x;
        }
      }

      return nodes;
    }
  </script>


<style>
    input[type=checkbox] {
      vertical-align: middle;
      position: relative;
      bottom: 2px;
    }
</style>
            </head>
<body onload="init()">
    <div id="sample">
        <div id="myDiagramDiv" style="border: solid 1px black; width:100%; height:500px"></div>

<br>Randomize word positions <input type="checkbox" id="randomizePositions" onclick="rebuildGraph()" checked/></br>

<br><button style="margin-bottom: 12px; margin-top: 6px;" onclick="rebuildGraph()">Generate wordcloud</button>
</br>
    </div>
</body>
</html>
    );
  }
}

module.exports = wordcloud;