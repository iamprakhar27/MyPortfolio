import mongoose from "mongoose";

const dburl = "mongodb+srv://---------:-------@cluster0.7zru9na.mongodb.net/-------"

const connectdb = async () =>{
    try
    {
        const connectionobject = await mongoose.connect(`${dburl}`)
        console.log("connection established with db");


    }
    catch(error)
    {
        console.log("error while connecting with database" + error);
    }

}    
    
export default connectdb
