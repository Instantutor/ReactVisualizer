import React, {useState} from 'react';
import Graph from "react-graph-vis";
import data from './data.json';

const options = {
  autoResize: true,
  edges: {
    arrows: 'to',
    color: "lightgrey",
    labelHighlightBold: true,
    physics: false,
    scaling: {
      label: true,
    },
    shadow: {
      enabled: true,
    },
    smooth: true
  },
  nodes: {
    color: "lightblue",
    mass: 15,
  },
  layout:{
    hierarchical: true
  }
}

const Intake = () => {

  const n_array = [];
  const e_array = [];

  for (var k in data.nodes) {

    n_array.push(k);
  }

  for (var j in data.edges) {

    e_array.push(j);
  }

    const [state] = useState({
        counter: 5,
        graph: {
            nodes: n_array,
            edges: e_array
        },
        events: {
            select: ({ nodes, edges}) => {
                console.log("Selected nodes:");
                console.log(nodes);
                console.log("Selected edges:");
                console.log(edges);
                alert("Selected node " + nodes);
            },
        }
    })
    const {graph, events } = state;
  return (
    <div>
        <Graph graph={graph} options={options} events={events} style={{ height: "720px", backgroundColor: "#282c34" }} />
    </div>
  )
}

export default Intake