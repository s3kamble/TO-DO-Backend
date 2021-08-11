const uniqid = require("uniqid");

function Task({content,createdAt,updatedAt}){
    this.taskId = uniqid();
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isComplete = false;
}

// class Task {
//     constructor({content,createdAt,updatedAt}){
//         if(this.isContentValid()){
//             this.taskId = uniqid();
//             this.content = content;
//             this.createdAt = createdAt;
//             this.updatedAt = updatedAt;
//             this.isComplete = false;
//         }
//         else{
//             return new Error ("Invalid content length");
//         }
//     }

//     isContentValid = ()=>{
//         if(!this.content.length){
//             return false;
//         }
//         return true;
//     };
// }

module.exports = Task;