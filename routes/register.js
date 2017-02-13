// var mysql = require('./mysql'); 
var express = require('express');
var router = express.Router();

function register(req, res) {
	console.log("In register");
	var userId = req.param("userId");
	var password = req.param("password");
	var email = req.param("email");
	var question1 = req.param("question_1");
	var answer1 = req.param("answer1");
	var question2 = req.param("question_2");
	var answer2 = req.param("answer2");
	var address = req.param("address");
	var interest = req.param("interest");
	var mobile = req.param("mobile");

	// var registrationQuery = "insert into profile values ('"+userId+"','"+password+"','"+email+"',"+
	// 	"'"+question1+"','"+answer1+"','"+question2+"','"+answer2+"','"+mobile+"','"+address+"','"+interest+"')";
	// console.log("\nQuery is: "+registrationQuery);
	// mysql.fetchData(function(err, results) {
	// 	if(err) {
	// 		console.log('Registration Error' + err.message);
	// 		throw err;
	// 	} else {
	// 		res.render('success',  { title: 'Success Page', username: userId});
	// 	}
	// },registrationQuery);
	
};

exports.register = register;