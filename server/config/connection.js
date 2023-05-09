const { connect, connection } = require('mongoose');

// Required to connect to the default port for the MongoDB database (..27017).
const connectionString =
    process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/neales_bookshelf_api_db';
    
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

module.exports = connection
