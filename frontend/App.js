import Graph from "react-graph-vis";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
};

const App = () => {
  const createNode = (x, y) => {
    const color = {red};
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
        { id: 1, label: "Node 1", color: "#e04141" },
        { id: 2, label: "Node 2", color: "#e09c41" },
        { id: 3, label: "Node 3", color: "#e0df41" },
        { id: 4, label: "Node 4", color: "#7be041" },
        { id: 5, label: "Node 5", color: "#41e0c9" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
        alert("Selected node: " + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      }
    }
  })
  const { graph, events } = state;
  return (
    <div>
      <h1>React graph vis</h1>
      <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
    </div>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

//https://github.com/crubier/react-graph-vis