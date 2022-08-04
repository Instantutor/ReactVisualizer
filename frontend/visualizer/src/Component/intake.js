import React, {useState} from 'react';
import Graph from "react-graph-vis";

const options = {
    edges: {
        color: "#000000"
    }
}

const intake = () => {

    const [state, setState] = useState({
        counter: 5,
        graph: {
            nodes: [
                {id: 1, label: "Head", color: "white"},
                {id: 2, label: "Tail", color: "black"}
            ],
            edges: [
                {from: 1, to: 2}
            ]
        },
        events: {
            select: ({ nodes, edges}) => {
                console.log("Selected nodes:");
                console.log(nodes);
                console.log("Selected edges:");
                console.log(edges);
                alert("Selected node " + nodes);
            }
        }
    })
    const {graph, events } = state;
  return (
    <div>
        <h1>Here is your Graph</h1>
        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
    </div>
  )
}

export default intake