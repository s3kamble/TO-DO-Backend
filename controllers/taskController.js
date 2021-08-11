const fs = require("fs");
const path = require("path");
const Task = require("../models/taskModel");
const dataSource = path.join(__dirname,"..","data","tasks.json");
const Tasks = JSON.parse(fs.readFileSync(dataSource,"utf-8"));
const sendResponse = require("../utils/sendResponse");

const getAllTasks = (req,res) =>{
    return sendResponse({res:res,statusCode:200,message:"Data fetched",data:Tasks});
};

const getTaskById = (req,res,next) =>{
    let {taskId} = req.params;
    let taskFound =Tasks.find(task =>task.taskId === taskId);
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
   let count=0;
   validKeys.forEach((key)=>{
       console.log("bfr if");
        if(Object.keys(req.body).sort().indexOf(key) == -1){ 
       console.log("after if");
            count=+1
        //   return sendResponse({res:res,statusCode:404,message:"Invalid request from validation",error:"Invalid request"});
        }
   });
   if(count>0){
          return sendResponse({res:res,statusCode:404,message:"Invalid request from validation",error:"Invalid request"});

   }
    next();
}

const createTask = (req,res,next) =>{
      let newTask = new Task(req.body);
      Tasks.push(newTask);
      fs.writeFile(dataSource, JSON.stringify(Tasks,null,2), (err)=>{
          if(err){
              Tasks.pop()
              return sendResponse({res:res,statusCode:500,message:"Error in creating task",error:err});           
          }
        sendResponse({res:res,statusCode:200,message:"Task Added",data:newTask});
      })
}

const deleteTask = (req,res,next) =>{
    const taskToDelete = Tasks.find(task =>task.taskId===req.params.taskId);
    const index = Tasks.indexOf(taskToDelete);

    if (index=== -1) {
        return sendResponse({res:res,statusCode:404,message:"Data not found",error:"Data not found"});
    }
    
    Tasks.splice(index, 1);

    fs.writeFile(dataSource,JSON.stringify(Tasks,null,2),(err) =>{
        if(err){
            Tasks.pop();
            return sendResponse({res:res,statusCode:500,message:"Error in deleting data",error:err});
        }
        sendResponse({res:res,statusCode:400,message:"Successfully deleted request"});
    });
}

const updateValidation=(req,res,next)=>{
    if(!req.body.content){
        return sendResponse({
            res,
            statusCode: 404,
            message: "Empty content",
            error: "Empty content not allowed",
        });
    }
    let Validkeys=["content","createdAt","updatedAt"];
    if(req.params.taskId){
        Validkeys.push("isComplete")
    }
    flag = Validkeys.every((key)=>Object.keys(req.body).includes(key));
    if(Validkeys.length !== Object.keys(req.body).length && !flag){
        return sendResponse({
            res,
            statusCode: 404,
            message: "Invalid Keys",
            error: "Invalid Request",
        });
    }
    next();
}

const updateTask = (req,res,next) =>{
    const taskToDelete = Tasks.find(task =>task.taskId===req.params.taskId);
    const index = Tasks.indexOf(taskToDelete);

    if (index === -1) {
        return sendResponse({res:res,statusCode:404,message:"Data not found",error:"Data not found"});
    }
    
   Object.keys(req.body).forEach((key)=>{
        Tasks[index][key] = req.body[key];
    });

    fs.writeFile(dataSource,JSON.stringify(Tasks,null,2),(err) =>{
        if(err){
            return sendResponse({res:res,statusCode:500,message:"Error in updating data",error:err});
        }
        sendResponse({res:res,statusCode:200,message:"Successfully updated task"});
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    validation,
    createTask,
    deleteTask,
    updateValidation,
    updateTask
};