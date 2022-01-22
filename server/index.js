import  express  from 'express';
import { router } from './router/router.js';
// import { userCollection } from './db/database.js';
import mongoose  from 'mongoose';


//............express...........................................
const app = express();
const PORT = 8000 || process.env.PORT;
  
app.use(router);
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
//...............ond of express.................................


