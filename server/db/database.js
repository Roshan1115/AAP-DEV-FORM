import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/amity_appdev_form', {
  useNewUrlParser: true,
}).then(() => console.log('connected to db'))
.catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  course: { type: String, required: true},
  semester: { type: Number, required: true},
  school: { type: String, required: true},
  objective: {type: String, required: true},
  benefit_to_society: {type: String, required: true},
  methodology: {type: String, required: true},
  outcome: {type: String, required: true},
});

const userCollection = mongoose.model('data_collection', userSchema);

export {userCollection};