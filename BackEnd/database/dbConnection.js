import mongoose  from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Connected to Database")
    }).catch((err) => {
        console.log(err)
    })
}
