/*
單例是一種特殊的創建型設計模式，其中一個類別只能存在一個實例。
其運作方式如下：
如果單例類別沒有實例存在，則會創建並返回一個新的實例；
但如果已經存在實例，則返回現有實例的引用。

一個完美的實際例子是 mongoose（著名的 Node.js ODM 庫，用於 MongoDB）。
它使用了單例模式。
*/

class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instance;
		}
		this._data = data;
		Database.instance = this;
		Database.exists = true;
		return this;
	}

	getData() {
		return this._data;
	}

	setData(data) {
		this._data = data;
	}
}

// usage

const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo


module.exports = Database;