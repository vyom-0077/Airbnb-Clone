const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://root:1234%40Vyom@vyom.p1hzq.mongodb.net/?retryWrites=true&w=majority&appName=Vyom";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("Connected to mongo");
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to mongo", err);
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
