const mongoose = require('mongoose'); //require() built-in function in node.js to load modules
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected...');
    } catch(err){
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;