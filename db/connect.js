const { MongoClient } = require('mongodb');

let database;

const connectToDb = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  database = client.db();
  console.log('Connected to MongoDB');
};

const getDb = () => database;

module.exports = { connectToDb, getDb };
