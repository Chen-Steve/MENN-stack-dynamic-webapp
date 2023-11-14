import { MongoClient, ServerApiVersion } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const certBase64 = process.env.MONGODB_TLS_CERT;
const cert = Buffer.from(certBase64, 'base64');

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    tls: true,
    tlsCAFile: cert,
    serverApi: ServerApiVersion.v1
  });
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('user_management');
    const users = db.collection('users');

    // Add input validation here

    const result = await users.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}