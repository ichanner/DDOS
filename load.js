
var axios = require("axios");
var http = require("http");
var express = require("express");

var load1 = function(app, server){

	//console.log(i2)

	setInterval(async()=>{
	
		var config = {
		  method: 'post',
		  url: 'https://my.rtmark.net/img.gif?f=sync&partner=c722837766370878ff4603815ffaa69aa585488c8be9cbc05dce8036c9cf1fcd',
		  headers: { 
		    'Cookie': 'ID=4bbd6fa42eb54012ab3d54c015281f5a'
		  }
		};

		axios(config)
		.then(function (response) {
		  console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
		  console.log(error.message);
		  setTimeout(()=>{

		  	  load1(app,server);
		  },1000)
		
		});

	}, 0)
}

module.exports = {

	load: load1
}