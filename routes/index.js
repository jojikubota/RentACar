var express = require('express');
var router = express.Router();
var mongo = require("./mongodb");
var mongoURL = "mongodb://root:root@ds119618.mlab.com:19618/cmpe_280";

/* GET home page. */
exports.index = function(req, res) {
	console.log("In index");
	var response = {};
	mongo.connect(mongoURL, function(){
		console.log("In index-2");
		var coll_2 = mongo.collection("cars");
		coll_2.find().limit(10).toArray(function(err, result){
			if (err) {
				console.log("In error");
				response.code = 401;
				callback(null, response);
			}
			res.render('homepage',  { header: 'homepage', title: 'Homepage', data: JSON.stringify(result)});
	   	});
	   });
};

exports.search = function(req, res) {
	res.render('search',  { header: 'Search', title: 'Search'});
};


exports.getCars = function(req, res) {
	console.log("In index");
	var response = {};
	mongo.connect(mongoURL, function(){
		console.log("In index-2");
		var coll_2 = mongo.collection("cars");
		var user_query = req.param("query");
		console.log("Query: "+user_query);
		var query = {};
		if(user_query!=null&&user_query!='') {
			var regex = new RegExp(user_query,'i');
			query = {$or:[{'name':regex},{'type':{$regex:regex}}]};
		}
		coll_2.find(query).toArray(function(err, result){
			if (err) {
				console.log("In error::"+err);
				console.log(JSON.stringify(err));
				response.code = 401;
				callback(null, response);
			}
			res.status(200).send({ header: 'Search', title: 'Search', data: result });
	   	});
	});
};

exports.cardetails = function(req, res) {
	var response = {};
	mongo.connect(mongoURL, function(){
		var coll_2 = mongo.collection("cars");
		var user_query = req.param("id");
		if(user_query==null||user_query==''){
			user_query = 1;
		}
		console.log("Query: "+user_query);
		coll_2.findOne({id:parseInt(user_query)}, function(err, result){
			if (err) {
				console.log("In error"+err);
				response.code = 401;
				callback(null, response);
			}
			res.render('cardetails',  { header: 'Search', title: 'Search', data: JSON.stringify(result)});
	   	});
	});
};

// exports.car1_detail = function(req, res) {
// 	res.render('car1_detail',  { header: 'Search', title: 'Search'});
// };

// exports.car1_vr = function(req, res) {
// 	res.render('car1_vr',  { header: 'Search', title: 'Search'});
// };
