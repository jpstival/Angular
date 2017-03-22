var http = require('http');

http.createServer(function (req, res){
	res.write (
		'<html>'+
			'<heade>'+
				'<title>Hello World</title>'+
			'</heade>'+
			'<body>'+
				'<h1>Hello Word</h1>'+
			'</body>'+
		'</html>'
	);
	res.end();
}).listen(3412);