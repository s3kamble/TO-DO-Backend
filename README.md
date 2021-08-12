### <b>TO-DO-LIST</b> 
- This repository contains backend code developed for a persistent TO-DO-List application, capable of performing below mentioned functionalities

### <b>Functionalities,<b>
- Display All Tasks
- Search Task (based on id)
- Add Tasks
- Update Existing Task
- Delete Existing Task

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

  </ol>
</details>

### <b>Prerequisites</b>
-  Javascript(ES5,ES6)

### <b>Folder Structure</b>
- Model-View-Controller (MVC) folder structure

### <b>Built With</b>
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [REST API](https://restfulapi.net/)

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
   
## <b>Usage</b>
<ul>
    <li>To integrate with front-end applications to the below mentioned endpoints,as and when required </li>
    <li>To test the given endpoints,use "Postman" app </li>
</ul>

<h1>Get all tasks</h1>
<h2>GET request </h2>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/get.png)
<p>Expected Output: </p>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-get.png)


<h1>Get a particular Task by id</h1>
<h2>GET request </h2>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/get-id.png)
<p>:taskId -->unique id to be searched for </p>
<p>Expected Output: </p>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-get-id.png)

<h1>Add a Task</h1>
<h2>POST request </h2>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/Post-request.png)
<p> Requires JSON body with following mandatory arguements: </p>
   <ul>
    <li>content:string</li>
    <li>createdAt:string </li>
    <li>updatedAt:string </li>
    <li>isCompleted:boolean</li>
    <li>
        Example:
        ![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/Post-request-eg.png)
    </li>
    <li>
        <p>Expected Output: </p>
        ![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/output-post.png)
    </li>
</ul>

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
        ![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/put-eg.png)
    </li>
      <li>
        <p>Expected Output: </p>
        ![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-put.png)
    </li>
</ul>

<h1>DELETE a particular Task by id</h1>
<h2>DELETE request </h2>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/delete.png)

<p>Expected Output: </p>
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/op-delete.png)

<i>The examples shown above are from the POSTMAN app </i>
<i>If required arguemts are not passed,error message will be shown
![](https://s3kamble.github.io/to-do-images/Screenshots-TO-DO-Backend/error.png)



### Data File
- The data already displayed on GET request is from "tasks.json" file in data folder
- The POST and PUT requests are reflected in the "tasks.json" file
