var jsqlite = require('./jsqlite.js');
var fs = require("fs");

var demo = fs.readFileSync("demo.jsq", "utf8");

var jsq = jsqlite(demo); //table
// jsq.collection('demo').insert([
// 	{key: "1241rw1f1", data: 'demo2'},
// ]).success(function(res){
// 	// console.log(res);
// }).error(function(err){
// 	// console.log(err);
// });
// jsq.collection('test').orderBy('id','asc').result(function(res){
// 	console.log(res);
// });
jsq.collection('demo').result(function(res){
	// console.log(res);
});

jsq.collection('demo').where('key', '1241rw1f1').delete(function(res){
	console.log(res)
});

var data = jsq.export();
// console.log(data);

// fs.writeFile("demo.jsq", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });


// console.log(jsq.export());
