import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

const VisNetwork = () => {

    const nodes = [
		{ id: 1, label: "Node 1" },
		{ id: 2, label: "Node 2" },
		{ id: 3, label: "Node 3" },
		{ id: 4, label: "Node 4" },
		{ id: 5, label: "Node 5" },
	];

	const edges = [
		{ from: 1, to: 3 },
		{ from: 1, to: 2 },
		{ from: 2, to: 4 },
		{ from: 2, to: 5 },
		{ from: 3, to: 3 },
	];

    //following a guide from jamestharpe.com/react-visjs
    //just the baseline, going to mess with this later

    //need to create a ref to provide DOM access so React can display the graph
    const visJsRef = useRef(null);
    useEffect(() => {
        const network =
            visJsRef.current &&
            new Network(visJsRef.current, {nodes, edges } );
        //use 'network' here to configure events
        //once the ref is created, we will be able to use vis
        }, [visJsRef, nodes, edges]);
        return <div ref={visJsRef} />;
};

export default VisNetwork;