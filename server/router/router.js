import  express  from 'express';
import { userCollection } from '../db/database.js'


//...............mongodb......................................

//................end of mongodb.................................



const router = express.Router();
    
router.get('/', function (req, res) {
    console.log("Router Working");
    res.end();
})

router.get('/submit', async (req,res) => {

  try{
    await userCollection.createCollection();
    console.log('created');
  }
  catch(err) {
    console.log(err);
    res.status(404).send('Opps! There is a problem in database.')
  } 


  const newData = new userCollection({
    name: 'test',
    course: 'test_course',
    semester: 4,
    school: 'testschool',
    
    objective: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque provident et quibusdam nesciunt deserunt iusto optio ipsa sit eligendi? Pariatur cupiditate ducimus nesciunt id. Obcaecati eos quaerat, harum fuga fugiat iste! Animi deleniti placeat dolor doloremque, repudiandae, perferendis, assumenda itaque reprehenderit voluptas quasi illum quibusdam obcaecati rem molestiae ipsa vel excepturi magni? Omnis aperiam vitae, ad, similique sit qui distinctio aliquam perspiciatis quisquam itaque quae magnam odit saepe dolor incidunt amet voluptate delectus eum minima enim nulla voluptatem ipsum! In reprehenderit, qui facere ad laudantium quo fuga, perferendis asperiores ducimus neque dolores quam voluptatum dolorem repudiandae. Quos, nisi neque.',

    benefit_to_society: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque provident et quibusdam nesciunt deserunt iusto optio ipsa sit eligendi? Pariatur cupiditate ducimus nesciunt id. Obcaecati eos quaerat, harum fuga fugiat iste! Animi deleniti placeat dolor doloremque, repudiandae, perferendis, assumenda itaque reprehenderit voluptas quasi illum quibusdam obcaecati rem molestiae ipsa vel excepturi magni? Omnis aperiam vitae, ad, similique sit qui distinctio aliquam perspiciatis quisquam itaque quae magnam odit saepe dolor incidunt amet voluptate delectus eum minima enim nulla voluptatem ipsum! In reprehenderit, qui facere ad laudantium quo fuga, perferendis asperiores ducimus neque dolores quam voluptatum dolorem repudiandae. Quos, nisi neque.',

    methodology: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque provident et quibusdam nesciunt deserunt iusto optio ipsa sit eligendi? Pariatur cupiditate ducimus nesciunt id. Obcaecati eos quaerat, harum fuga fugiat iste! Animi deleniti placeat dolor doloremque, repudiandae, perferendis, assumenda itaque reprehenderit voluptas quasi illum quibusdam obcaecati rem molestiae ipsa vel excepturi magni? Omnis aperiam vitae, ad, similique sit qui distinctio aliquam perspiciatis quisquam itaque quae magnam odit saepe dolor incidunt amet voluptate delectus eum minima enim nulla voluptatem ipsum! In reprehenderit, qui facere ad laudantium quo fuga, perferendis asperiores ducimus neque dolores quam voluptatum dolorem repudiandae. Quos, nisi neque.',

    outcome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque provident et quibusdam nesciunt deserunt iusto optio ipsa sit eligendi? Pariatur cupiditate ducimus nesciunt id. Obcaecati eos quaerat, harum fuga fugiat iste! Animi deleniti placeat dolor doloremque, repudiandae, perferendis, assumenda itaque reprehenderit voluptas quasi illum quibusdam obcaecati rem molestiae ipsa vel excepturi magni? Omnis aperiam vitae, ad, similique sit qui distinctio aliquam perspiciatis quisquam itaque quae magnam odit saepe dolor incidunt amet voluptate delectus eum minima enim nulla voluptatem ipsum! In reprehenderit, qui facere ad laudantium quo fuga, perferendis asperiores ducimus neque dolores quam voluptatum dolorem repudiandae. Quos, nisi neque.',
});

newData.save((err, comment) => {
  if (err){
    console.log(err);
    res.status(405).send("Please fill all the fields with appropriate value.")
  } 
  else {
    console.log('data saved:', comment)
    res.status(200).send("Your documents have been saved successfully.")
    }
});

})

export {router};

