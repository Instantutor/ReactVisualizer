import React, {useState} from 'react';
import Graph from "react-graph-vis";

const options = {
    edges: {
        color: "#000000"
    }
}

const Intake = () => {
    const createNode = (x, y) => {
        const color = 'red';
        setState(({ graph: { nodes, edges }, counter, ...rest }) => {
          const id = counter + 1;
          const from = Math.floor(Math.random() * (counter - 1)) + 1;
          return {
            graph: {
              nodes: [
                ...nodes,
                { id, label: `Node ${id}`, color, x, y }
              ],
              edges: [
                ...edges,
                { from, to: id }
              ]
            },
            counter: id,
            ...rest
          }
        });
    }
    const [state, setState] = useState({
        counter: 5,
        graph: {
            nodes: [
                {id: 1, label: "Head", color: "red"},
                {id: 2, label: "Tail", color: "blue"}
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
            },
            doubleClick: ({ pointer: { canvas } }) => {
                createNode(canvas.x, canvas.y);
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

export default Intake