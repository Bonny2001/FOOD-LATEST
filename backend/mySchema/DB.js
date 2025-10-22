import mongoose, { version } from "mongoose";

const mySchema = mongoose.Schema({
    name : String,
    email : String,
    password : String

})
const myModel = mongoose.model("Client_ID", mySchema);
export default myModel;