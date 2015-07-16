var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		port = process.env.port || 8080,
		controller = require('./controller_wo_interface.js');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//app.get('/', controller.index);
//app.get('/view/:fileName', controller.viewFile);
//app.get('/create', controller.addFile);
//app.post('/create', controller.createFile);
//app.put('/update/:fileName', controller.updateFile);
////app.patch();
////app.get('/delete/:fileName', controller.confirmDeleteFile);
//app.delete('/delete/:fileName', controller.deleteFile);

app.get('/api/post', controller.index);
app.get('/api/post/:fileName', controller.viewFile);
app.post('/api/post', controller.createFile);
app.put('/api/post/:fileName', controller.updateFile);
app.delete('/api/post/:fileName', controller.deleteFile);

app.listen(port, function() {
	console.log('server is running...');
});
