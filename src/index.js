//Modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//Routes
// import RegistersRoutes from "../Routes/RegistersRoutes.js";
// import SignInRoutes from "../Routes/SignInRoutes.js";
 import SignUpRoutes from "../Routes/SignUpRoutes.js";

//App
const app = express();
dotenv.config();

//App use modules
app.use(cors());
app.use(express.json());    

//App use routes
//app.use(RegistersRoutes);
//app.use(SignInRoutes);
app.use(SignUpRoutes);

// INSTRUCTIONS FOR STARTING THE SERVER
// Start Nodemon --> npx nodemon src/index.js 
// Clear port --> fuser -k 5000/tcp
// Start MongoDB --> mongod --dbpath ~/.mongo
// Open New Terminal --> mongo
// Connect MongoDB --> use mywallet

//Server
const port = process.env.PORT;
app.listen(port, () => {
console.log("____________________________________________________");
console.log("|  ||  /|                                           |");
console.log("|  |/_|/     ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆      |");
console.log(`|  /. .|     Server is running on port ${port}...      |`);
console.log("| =|_Y_|=    ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆      |");
console.log("|  {>o<}                                            |");
console.log("|___________________________________________________|");
});