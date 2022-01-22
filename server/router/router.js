import  express  from 'express';
import { userCollection } from '../db/database.js'


const router = express.Router();
    
router.get('/', function (req, res) {
    console.log("Router Working");
    res.end();
})

router.post('/submit', async (req,res) => {

  // console.log(req);
  // console.log(req.body);

  if(!req.body){
    return res.status(422).json({message: "Please fill all the fields with appropriate value."})
  }
  const {
    name, course, semester, school,
        objective, benefit_to_society, methodology,
        outcome
  } = req.body;

  if( !name || !course || !semester || !school || !objective || !benefit_to_society || !methodology || !outcome ){
    return res.status(422).json({message: "Please fill all the fields with appropriate value."})
  }



  try{
    await userCollection.createCollection();
    console.log('Collection created. This part has been defined in router.js');
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: 'Opps! There is a problem in database.'})
  } 

  // console.log(req.body);

  const incomingData = new userCollection(req.body)


//........................demo document........................................
//   const newData = new userCollection({
//     name: 'test',
//     course: 'test_course',
//     semester: 4,
//     school: 'testschool',
//     objective: 'Lorem ipsum .',
//     benefit_to_society: 'Lorem ipsum ',
//     methodology: 'Lorem ipsum dolor .',
//     outcome: 'Lorem ipsum do.',
// });



incomingData.save((err, comment) => {
  if (err){
    console.log(err);
    res.status(422).json({message: "Please fill all the fields with appropriate value."})
  } 
  else {
    // console.log('data saved:', comment)
    console.log("data saved");
    res.status(200).json({message: "Your documents have been saved successfully."})
    }
});

})

export {router};

