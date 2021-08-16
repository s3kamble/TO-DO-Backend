### <b>TO-DO-LIST</b> 
- This repository contains backend code developed for a persistent TO-DO-List application, capable of performing below mentioned functionalities

### <b>Functionalities,<b>
- Display All Tasks
- Search Task (based on id)
- Add Tasks
- Update Existing Task
- Delete Existing Task
<br>
<br>
<br>


<details open="open">
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
      <li> <a href="#built-with">Built With</a> </li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#data-file">Data file</a></li>
    <li><a href="#directory-tree">Directory-tree</a></li>


  </ol>
</details>
<br>
<br>
<br>


### <b>Prerequisites</b>
-  Javascript(ES5,ES6)
<br>
<br>
<br>


### <b>Folder Structure</b>
- Model-View-Controller (MVC) folder structure
<br>
<br>
<br>


### <b>Built With</b>
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [REST API](https://restfulapi.net/)
<br>
<br>
<br>

### <b>Installation</b>
- Open terminal,redirect to the folder where you want this repository.
- Type the following commands in order to ensure,the project is now available on your machine with all the necessary packages installed

1. Clone the repo
   ```sh
   git clone https://github.com/s3kamble/TO-DO-Backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start with the following command
   ```sh
   npm run start
<br>
<br>
<br>


## <u><b>Usage</b></u>
<br>
<ul>
    <li>To integrate  front-end applications use the below mentioned endpoints,as and when required </li>   
</ul>

*  To test the given endpoints,use "Postman" app :
<br>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17003746-41173790-0e82-4778-8852-14d998ba5439?action=collection%2Ffork&collection-url=entityId%3D17003746-41173790-0e82-4778-8852-14d998ba5439%26entityType%3Dcollection%26workspaceId%3D29424687-6818-4cf4-8fe6-db66728f90f7)

<br>

<h1>Get all tasks</h1>
<h2>GET request </h2>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/get.png)
<p>Expected Output: </p>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-get.png)

<br>
<br>

<h1>Get a particular Task by id</h1>
<h2>GET request </h2>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/get-id.png)
<p>:taskId -->unique id to be searched for </p>
<p>Expected Output: </p>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-get-id.png)

<br>
<br>

<h1>Add a Task</h1>
<h2>POST request </h2>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/Post-request.png)
<p> Requires JSON body with following mandatory arguements: </p>
   <ul>
    <li>content:string</li>
    <li>createdAt:string </li>
    <li>updatedAt:string </li>
    <li>isCompleted:boolean</li>
    <img src="https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/Post-request-eg.png">
    </img>
    <li>
         <p>Expected Output: </p>        
         <img src="https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/output-post.png"></img>
   </li>
</ul>
<br>
<br>

<h1>Update an existing Task</h1>
<h2>PUT request </h2>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/put.png)
<p> Requires JSON body with following optional arguements: </p>
   <ul>
    <li>content:string</li>
    <li>createdAt:string </li>
    <li>updatedAt:string </li>
    <li>isCompleted:boolean</li>
    <li>
        Example:
        <img src="https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/put-eg.png"></img>
    </li>
      <li>
        <p>Expected Output: </p>
        <img src="https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-put.png">
    </li>
</ul>
<br>
<br>

<h1>DELETE a particular Task by id</h1>
<h2>DELETE request </h2>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/delete.png)

<p>Expected Output: </p>

![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-delete.png)

<i>The examples shown above are from the POSTMAN app </i>
<i>If required arguemts are not passed,error message will be shown,eg:
<br>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/error.png)

<br>
<br>
<br>


### <b>Data File</b>
- The data already displayed on GET request is from "tasks.json" file in data folder
- The POST and PUT requests are reflected in the "tasks.json" file
 <br>
<br>

### <b>Directory-tree</b>
```
├── app.js
├── controllers
│   └── taskController.js
├── data
│   └── tasks.json
├── models
│   └── taskModel.js
├── node_modules     ├
├── package.json
├── package-lock.json
├── README.md
├── routes
│   └── taskRouter.js
└── utils
    └── sendResponse.js
```

