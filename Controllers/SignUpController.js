import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function SignUpController(req, res) {
    const { name, email, password, checkpassword } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const checkhash = bcrypt.hashSync(checkpassword, 12);
    const userdata = {name, email, hash, checkhash};

    try{
        const checkifuserexists = await db.collection("users").findOne({email});
        if(checkifuserexists){
            res.status(400).send("User already exists");
            return;
        }
        else{
            const token = uuid();
            await db.collection("users").insertOne(userdata);
            const useremail = await db.collection("users").findOne({email});
            const conecteddata = {token, useremail};
            await db.collection("conected").insertOne(conecteddata);
            res.status(201).send("User created successfully");
        }
    }
    catch(err){
        res.status(500).send("Error creating user: ", err);
    }
}

export default SignUpController;