
var {Worker} = require("worker_threads");
var {threads} = require("./config.js");

var workers = [];

function makeTread(i){

	let worker = new Worker("./worker.js");

	worker.on("error", ()=>{

	   workers[i] = makeTread(i);
	})

	return worker;
}

for(var i = 0; i < threads; i++){
	
	let worker = new Worker("./worker.js");
	
	workers.splice(i, 0, worker);

	workers[i].on("error", ()=>{

	   workers[i] = makeTread(i);	  
	})
}
