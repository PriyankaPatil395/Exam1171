

var express = require('express');
var app = express();

var Employee=function(req, res){

 var Employees = [
    {id:1, name:"kiran",Salary:50000, Designation:"Deveoper"},
	    {id:2, name:"manoj",Salary:40000, Designation:"Deveoper"},  
		{id:3, name:"lata",Salary:55000, Designation:"Manager"},
		{id:3, name:"lata",Salary:55000, Designation:"Manager"},
		{id:4, name:"lata",Salary:65000, Designation:"Deveoper"},
   {id:5, name:"lata",Salary:55000, Designation:"Manager"}
  ];  res.send(Employees);
};


app.get('/Employees',Employee);

var server = app.listen(8090, function () {
  var host = server.address().address
  var port = server.address().port
  //console.log("Example app listening at http://localhost:8087", host, port)
})

