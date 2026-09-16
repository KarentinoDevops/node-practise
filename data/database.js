import { MongoClient } from 'mongodb';
const uri = `mongodb+srv://karentinodevops_db_user:0mjjI63Ht9Sg2TP8@cluster0.nyc6@cluster0.nyc68je.mongodb.net/event?appName=Cluster0`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db('event').command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  console.log(error);
  await client.close();
  console.log('Connection closed.');
  process.exit(1);
}

const database = client.db('event');

export default database;