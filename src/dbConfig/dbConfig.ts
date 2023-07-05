import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', function(){
            console.log('Mongodb Connection Established');
        })
        connection.on('error', function(err){
            console.log(err);
            process.exit();
        })
    } catch (error) {
        console.log('Something Went Wrong');
        console.log(error);
    }
}