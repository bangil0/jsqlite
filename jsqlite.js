function jsqlite(query = ""){

	if (!(this instanceof jsqlite)){
		return new jsqlite(query);
	}
	this._query = JSON.parse(query);
	return this;
}
jsqlite.prototype.collection = function(table){
	this._collection = this._query['table'][table];
	this._result = this._collection;
	this._table = table;
	return this;
}
jsqlite.prototype.where = function(key, value){
	var col = this._collection;
	var result = [];
	var i = 0;
	var del = [];
	var dels = [];
	col.forEach(function(row) {
		Object.keys(row).forEach(function(val){
			if(val == key){
				if(row[val] == value){
					result.push(row);
					del.push(i);
				}else{
					dels.push(row);
				}
				i++;
			}
		});
	});
	this._delete = del;
	this._del = dels;
	this._result = result;
	return this;
}
jsqlite.prototype.delete = function(callback){
	for(var i = 0;i < this._delete.length;i++){
		delete this._query['table'][this._table][this._delete[i]];
	}
	this._result = this._del;
	if(typeof callback == "function"){
		callback(this._result);
	}
	return this;
}
jsqlite.prototype.search = function(key, value){
	var col = this._collection;
	var result = [];
	col.forEach(function(row) {
		Object.keys(row).forEach(function(val){
			if(val == key){
					var Reg = new RegExp(value + ".*")
					var Match = row[val].match(Reg);
				if(Match != null){
					result.push(row);
				}
			}
		});
	}) 
	this._result = result;
	return this;
}
jsqlite.prototype.result = function(callback){
	if(typeof callback == "function"){
		callback(this._result)
	}
}
jsqlite.prototype.orderBy = function(col, type = 'ASC'){
	if(type.toUpperCase() == 'ASC'){
		this._collection.sort((a,b) => a[col] > b[col] ? 1 : -1)
	}else if(type.toUpperCase() == 'DESC'){
		this._collection.sort((a,b) => a[col] < b[col] ? 1 : -1)
	}
	this._result = this._collection;
	return this;
}
jsqlite.prototype.insert = function(arr){
	var field = [];
	var field2 = [];
	var e = false;;
	var cl = this._query.column[this._table];
	cl.forEach(function(val){
		field.push(val);
	});
	var cc = this._collection;
	arr.forEach(function(row){
		Object.keys(row).forEach(function(key){
			field2.push(key)
		})
		cc.push(row);
	})
	this._collection = cc
	for(var i = 0;i < field.length;i++){
		if(field[i] != field2[i]){
			e = true;
		}
	}
	if(e){
		var er = JSON.stringify(arr);
		this._error = `Column does not match in database!\nin: ${er}\nYour Column: ${cl}`;
	}else{
		this._success = this._collection;
	}
	return this;
}
jsqlite.prototype.export = function(){
	return JSON.stringify(this._query);
}
jsqlite.prototype.success = function(callback){
	if(typeof callback == "function"){
		callback(this._success);
	}
	return this;
}
jsqlite.prototype.error = function(callback){
	if(typeof callback == "function"){
		callback(this._error);
	}
	return this;	
}

module.exports = jsqlite;