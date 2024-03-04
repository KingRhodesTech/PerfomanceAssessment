var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	var stack = [
		{
			name: 'MongoDB',
			description:
				'MongoDB is a document-oriented database that works across several platforms. It is a NoSQL database that stores and queries data using a JSON-like format known as BSON.',
		},
		{
			name: 'Express',
			description:
				"Express is a simple and adaptable Node.js web application framework that has a comprehensive set of functionality for both online and mobile applications. It's intended to make it easier to create web applications and APIs.",
		},
		{
			name: 'Angular',
			description:
				'Angular is a TypeScript-based, open-source web application framework created by Google. It is commonly used to create dynamic, single-page web applications (SPAs) using a modular and component-based architecture.',
		},
		{
			name: 'Node.js',
			description:
				'Node.js is an open-source server-side JavaScript runtime. It enables developers to run JavaScript code on the server, resulting in the creation of scalable and high-performance network applications.',
		},
	];

	var myname = 'Jaquan Rhodes';

	res.render('index', { title: 'MEAN Stack', stack: stack, myname: myname });
});

module.exports = router;
