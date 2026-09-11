import { MongoClient } from 'mongodb';

// const connectionProtocol = process.env.MONGODB_CONNECTION_PROTOCOL;
// const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;
// const dbName = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://karentinodevops_db_user:0mjjI63Ht9Sg2TP8@cluster0.nyc68je.mongodb.net/event?appName=Cluster0`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
  process.exit(1);
}

const database = client.db(event);

export default database;
