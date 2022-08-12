import React, {useState} from 'react';
import Graph from "react-graph-vis";

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
    const [state] = useState({
        counter: 5,
        graph: {
            nodes: [
                {id: 1, label: "New request made by users"},
                {id: 2, label: "Student selects tutor to ping"},
                {id: 3, label: "Tutor sees request"},
                {id: 4, label: "Student can give final confirmation"},
                {id: 5, label: "Tutor is removed from the student's list"},
                {id: 6, label: "Tutor is removed from the student's list"},
                {id: 7, label: "Tutoring in progress"},
                {id: 8, label: "Student cancelled"},
                {id: 9, label: "Tutor cancelled"},
                {id: 10, label: "Request closed"},
                {id: 11, label: "Student rated"},
                {id: 12, label: "Tutor rated"},
            ],
            edges: [
                {from: 1, to: 2},
                {from: 2, to: 3},
                {from: 3, to: 4, label: "Tutor Accepts Request"},
                {from: 3, to: 5, label: "Tutor Denies Request"},
                {from: 4, to: 6, label: "Student chooses a different tutor or denies"},
                {from: 4, to: 7, label: "Student confirms tutor"},
                {from: 7, to: 8, label: "Student cancels"},
                {from: 7, to: 9, label: "Tutor cancels"},
                {from: 7, to: 10, label: "Tutor or student closes request"},
                {from: 10, to: 11, label: "Student rates"},
                {from: 10, to: 12, label: "Tutor rates"}
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