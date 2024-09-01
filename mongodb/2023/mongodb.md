### How to create database
https://www.javatpoint.com/mongodb-create-collection#:~:text=In%20MongoDB%2C%20db.,is%20used%20to%20create%20collection.
`use testdb `
### How to create collection
`db.createCollection("country")`
### how to insert
`db.country.insert({"name":"India"})`
### how to update
`db.country.update({"name":"India"},{"name":"India1"})`
### update with criteria
`db.company.update({com_id:1},{$set:{com_name:"test1"}})`
### how to remove document
`db.country.remove({"name":"India1"})`
### how to remove collection
`db.country.drop()`
### how to use limit 
`db.company.find({}).limit(10)`
### how to skip abobe record 
`db.company.find({}).limit(10).skip(10)`
### find the value with ignore the case Insensitive 
`db.company.find({com_name:/test company/i})`
### join 2 table 
https://hevodata.com/learn/mongodb-join-two-collections/#:~:text=For%20performing%20MongoDB%20Join%20two,Students.

`db.userInfo.aggregate([{
    $lookup:{
        from:"addrees",
        localField:"contact_name",
        foreignField:"name",
        as:"address"
    }}]).pretty()` 


    https://www.javatpoint.com/mongodb-aggregation-commands
    https://mindmajix.com/mongodb-interview-questions
    https://www.interviewbit.com/mongodb-interview-questions/
    https://hevodata.com/learn/mongodb-join-two-collections/#:~:text=For%20performing%20MongoDB%20Join%20two,Students.

### Interview questions in mongodb
https://www.interviewbit.com/mongodb-interview-questions/

#### What are some features of MongoDB?
`Indexing:` It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.
`Aggregation`: It provides an aggregation framework based on the concept of data processing pipelines.
`Special collection and index types`: It supports time-to-live (TTL) collections for data that should expire at a certain time
`File storage`: It supports an easy-to-use protocol for storing large files and file metadata.
https://stackoverflow.com/questions/13907509/how-do-i-save-a-file-to-mongodb
`Sharding`: Sharding is the process of splitting data up across machines


### Mongodb query to get millions of records.

`MongoDB does not directly support a piped query mechanism in the way that a shell might have pipes for chaining commands. However, you can use the MongoDB Aggregation Framework to perform a series of operations on your data, potentially resembling a piped sequence. Here's an example using the aggregation pipeline to retrieve millions of records in smaller batches, similar to a piped query:`

`
    var batchSize = 1000;  // Set your desired batch size
    var totalRecords = db.yourCollectionName.countDocuments();
    var numBatches = Math.ceil(totalRecords / batchSize);

    for (var i = 0; i < numBatches; i++) {
        var skipAmount = i * batchSize;
        
        db.yourCollectionName.aggregate([
            { $skip: skipAmount },
            { $limit: batchSize }
            // Add more pipeline stages as needed
        ]).forEach(function (doc) {
            // Process each document as needed
        });
    }
` 
### Mongodb query to find text 
`Here is an example that combines both the index creation and the text search query:`
`db.yourCollectionName.createIndex({ yourTextField: "text" })  
db.yourCollectionName.find({ $text: { $search: "yourSearchTerm" } }) `

### backup and restoring in MongoDB?

`These utility scripts are:`

`mongoexport:` a utility that export data stored in a MongoDB instance in an Extended JSON or CSV format.
`mongoimport:` a utility for loading data from a JSON export created by mongoexport into a MongoDB instance

`mongodump:` a utility for exporting a BSON dump of a running MongoDB instance.
`mongorestore:` a utility for restoring data from a BSON dumps into a MongoDB instance.


### indexes in mongodb

`Indexes are special data structures that hold a subset of the collection's data. The index can store the value of a field or set of fields, sorted by field value. We use indexes to ensure the efficient execution of queries.If we don’t have Indexes, MongoDB will do a whole collection scan to match documents requested by a query. If a suitable index exists, MongoDB will only scan through that index, limiting the number of documents it should examine. In addition, MongoDB can return sorted results efficiently by using the ordering in the index.`

`db.people.createIndex( { fieldName : 1} ) // creates an ascending index

 db.people.createIndex( { fieldName: -1} ) // creates a descending index `

 #### What are the various kinds of Indexes in MongoDB?
`Default index:` MongoDB creates a default index on the “_id” field for each collection.
`Single field index:` used to create a sorted index on a single field of a document.
`Compound index:` used to create an index by combining multiple fields.
`Multi-key index:` used to index an array field by indexing every element in an array.
`Geospatial index:` used for querying based on location data – comes in two types of indexes; 2d indexes and 2d sphere indexes.
`Text Index:` used for searching some text or string in a collection.
`Hashed index:` used for indexing the hashed value of a field; the hashed index is useful for sharding.