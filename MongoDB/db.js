import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);
let db = null;
try {
    await mongoClient.connect();
    db = mongoClient.db('myWallet');
    console.log("Mongodb is conected")
} catch (err) {
    console.log("ERROR: Mongodb is not conected");
}

export default db;