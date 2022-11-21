import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db = null;
try {
    await mongoClient.connect();
    db = mongoClient.db('mywallet');
    console.log("database is conected")
} catch (err) {
    console.log("It was not possible to connect to the database");
}

export default db;