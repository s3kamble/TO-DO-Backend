
const MongoClient = require('mongodb').MongoClient;

const URI ="mongodb://127.0.0.1:27017";
const dbname = 'To-Do-List';

const findAllTasks = ()=>{
   return  MongoClient.connect(URI)
    .then(async (client) => {
        console.log('Connected correctly to server');
        const db = client.db(dbname);
        const list = db.collection("tasks");
        return await list.find({}).toArray();
    
    })
    .catch((err)=>{
        console.log(err)
    })
} 

const findOneTask = ()=>{
    return  MongoClient.connect(URI)
     .then(async (client) => {
         console.log('Connected correctly to server');
         const db = client.db(dbname);
         const list = db.collection("tasks");
         return await list.findOne({});
     
     })
     .catch((err)=>{
         console.log(err)
     })
 }

const insertOneTask = (data)=>{
    return  MongoClient.connect(URI)
     .then(async (client) => {
         console.log('Connected correctly to server');
         const db = client.db(dbname);
         const list = db.collection("tasks");
         return await list.insertOne(data);
     
     })
     .catch((err)=>{
         console.log(err)
     })
 
 } 

 const deleteOneTask = (data)=>{
    return  MongoClient.connect(URI)
     .then(async (client) => {
         console.log('Connected correctly to server');
         const db = client.db(dbname);
         const list = db.collection("tasks");
         return await list.deleteOne(data);
     
     })
     .catch((err)=>{
         console.log(err)
     })
 
 } 


 const updateOneTask = (taskId,data)=>{
    return  MongoClient.connect(URI)
     .then(async (client) => {
         console.log('Connected correctly to server');
         const db = client.db(dbname);
         const list = db.collection("tasks");
         return await list.updateOne(taskId,data);
     
     })
     .catch((err)=>{
         console.log(err)
     })
 
 } 


module.exports = {
    findAllTasks,
    findOneTask,
    insertOneTask,
    deleteOneTask,
    updateOneTask
}