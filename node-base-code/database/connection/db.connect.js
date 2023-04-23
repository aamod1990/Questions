import mongoose from 'mongoose';

const setupConnection = async () => {
    try {


        const mongoOptions = {
            "poolSize": 5,
            "native_parser": true,
            "useNewUrlParser": true,
            "useUnifiedTopology": true
        };
        const mongoDsn = `${process.env.MONGO_URL}${process.env.MONGO_DB}`;


        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', false);


        // setup connection
        await mongoose.connect(mongoDsn, mongoOptions);
    } catch (err) {
        console.error({
            message: 'Database is not available',
            error: err
        });
    }
};





module.exports = {
    setupConnection
};