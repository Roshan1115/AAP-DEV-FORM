import  express  from 'express';
import { router } from './router/router.js';
import bodyParser from 'body-parser'




//............express...........................................
const app = express();
const PORT = 8000 || process.env.PORT;
  
app.use(bodyParser.json())   // to get the req.body in routing section
app.use(router);  // all routing and mongodb part

    
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
//...............ond of express.................................


