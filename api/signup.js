// /client/api/signup.js
import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB connection settings
const uri = process.env.MONGODB_URI;
const certBase64 = process.env.MONGODB_TLS_CERT; // The base64-encoded certificate

// Convert the base64 string back to a Buffer
const cert = Buffer.from(certBase64, 'base64');

const client = new MongoClient(uri, {
  tls: true,
  tlsCAFile: cert,
  serverApi: ServerApiVersion.v1
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await client.connect();
    const db = client.db('user_management');
    const users = db.collection('users');

    const result = await users.insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}