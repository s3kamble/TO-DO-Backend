const fs = require("fs");
const path = require("path");
const Task = require("../models/taskModel");
const{findAllTasks,findOneTask,insertOneTask,deleteOneTask,updateOneTask} = require("./dataController.js");
const dataSource = path.join(__dirname,"..","data","tasks.json");
const Tasks = JSON.parse(fs.readFileSync(dataSource,"utf-8"));
const sendResponse = require("../utils/sendResponse");

const getAllTasks = async (req,res) =>{ 
    let data =await findAllTasks() ;
    return sendResponse({res:res,statusCode:200,message:"Data fetched",data:await data});
};

const getTaskById = async (req,res,next) =>{
    let {taskId} = req.params;
    let taskFound =await findOneTask({"taskId":"taskId"} ) ;

    if(!taskFound){
      return sendResponse({res:res,statusCode:404,message:"Task not fetched",error:"ID not found"});
    }
    sendResponse({res:res,statusCode:200,message:"Data fetched",data:taskFound});
}

const validation = (req,res,next) =>{
    if(!req.body.content){
        return sendResponse({
            res,
            statusCode: 404,
            message: "Empty content",
            error: "Empty content not allowed",
        });
    }
   let validKeys = ["content", "createdAt", "updatedAt"];
   if (req.params.isComplete){
        validKeys.push("isComplete") ;
   }

   validKeys.sort();
   let invalidKeyCount=0;

   validKeys.forEach((key)=>{
        if(Object.keys(req.body).sort().indexOf(key) == -1){ 
            invalidKeyCount=+1
        }
   });
   if(invalidKeyCount>0){
          return sendResponse({res:res,statusCode:404,message:"Invalid request from validation",error:"Invalid request"});
   }
    next();
}

const createTask = async(req,res,next) =>{
    let newTask = new Task(req.body);
 
    let newTaskAdd = await insertOneTask(newTask);
    if(!newTaskAdd){
         return sendResponse({res:res,statusCode:500,message:"Error in creating task",error:"Error in adding data to server"});           
    }
    sendResponse({res:res,statusCode:200,message:"Task Added",data:newTaskAdd});
}

const deleteTask = async(req,res,next) =>{
  
    let {taskId} = req.params;
    let taskToDelete = await deleteOneTask({"taskId":taskId});
    console.log(taskToDelete)
    if(taskToDelete.deletedCount == 0){
        return sendResponse({res:res,statusCode:500,message:"Error in deleting task",error:"Invalid task id"});         
   }
   sendResponse({res:res,statusCode:204,message:"Successfully deleted task"});
}

const updateTask = async (req,res,next) =>{

    let {taskId} = req.params;
    
    let updateData=await updateOneTask({"taskId":taskId},{$set:req.body});
    
    if(updateData.modifiedCount == 0){
            return sendResponse({res:res,statusCode:500,message:"Error in updating data",error:"Id not found"});
      }
    sendResponse({res:res,statusCode:200,message:"Successfully updated task"});
    
    
}

module.exports = {
    getAllTasks,
    getTaskById,
    validation,
    createTask,
    deleteTask,
    updateTask
};