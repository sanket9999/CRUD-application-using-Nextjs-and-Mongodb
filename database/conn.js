import mongoose from 'mongoose';

// const MONGO_URI='mongodb://localhost:27017';
const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(process.env.MONGO_URI)

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;