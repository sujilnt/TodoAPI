### TodoAPI

A REST API  for Todo Application

#### Usage
`yarn install` <br/>
`yarn run dev`

#### API EndPoint

1.`/Signup (Post Req)` - Creating a new account for users. <br/>
2. `/Signin (Post Req)` - A user sign sign in the api, so that he can access the data using api <br/>
3. `/api/task (Post, GET Req)` - A set of operation can be done like  add,get todo tasks based on each user.<br/>
4. `/api/task/:id (Get,Post,Delete,PUT Requests)` -  A set of operation can be done like get delete, update, get and post, remove based on each user.<br/>
5. `/api/archive (GET)` -  To get all the archive tasks. <br/>
` The above 1 and 2 are not protected routes but 3 and 4 are  protected routes requires token.`
```

Steps to use Api 
1) Create an Account first by send a /signup post request , If status is 200 then token is created as response.
1) Create an Account first by send a /signup post request , If status is 200 then token is created as response.
2)Each token is created for each user to inorder to identify each todo tasks.
```


#### `Signup (Post Req)`
	POST /signup - create User inorder to have a token 
![alt text](https://github.com/sujilnt/TodoAPI/blob/master/images/geneate_token.PNG) <br/>	

Example code

```
async function resAsync(){
  data = {
    "email": "t1@email.com",
    "password": "t12"
  }
 let res = await fetch("http://localhost:3030/signup",{
                method: "POST",
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *de
                body:JSON.stringify(data),
                headers: {"Content-type":"application/json;charset=utf-8"}
})
const r1 = await res.json()
return r1;
}
```
#### `Signin (Post Req)`
	POST /sigin  
![alt text](https://github.com/sujilnt/TodoAPI/blob/master/images/apitoken.PNG) <br/>	
 
 Example code
 
```
async function resAsync(){
  data = {
    "email": "t1@email.com",
    "password": "t12"
  }
 let res = await fetch("http://localhost:3030/signin",{
                method: "POST",
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *de
                body:JSON.stringify(data),
                headers: {"Content-type":"application/json;charset=utf-8"}
})
const r1 = await res.json()
return r1;
}
```

#### `/Api/Task/`
	GET /api/task  - get all the task names unarchived task names
![alt text](./images/getTasks.PNG) <br/>	
     
Example	
```
async function resAsync(){
 let res = await fetch("http://localhost:3030/api/task",{
                method: "GET",
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *de
                headers: {
                "Content-type":"application/json;charset=utf-8",
                 Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZmQ5NGQ2NmEwZTc5MzBmMGFlNDc3OCIsImlhdCI6MTU2MDEyMjU4MiwiZXhwIjoxNTY4NzYyNTgyfQ.fVvrvtae1BGWw_8W4PJ28aGmfjoIOtoq_7YmyWZLlTM"  
                }
  
});
let r1= await res.json();
return r1;
}
resAsync();

```
	POST /api/task
![alt text](./images/add_data.PNG) <br/>
	Require Fields are as Uid and name by archieved will be false.
	
	 
#### `/api/archive (GET)`
	GET /api/archive - to get all the deleted items

1) Requires Authorisation , image Below <br/>
![alt text](./images/archive.PNG) <br/>


##### `/api/task:id`
	GET /api/task:id  - for getting the current task details
	PUT /api/task:id -  updating the exsisting task.
	DELETE /api/task:id - Removing from the Database .
	
![alt text](./images/modilfy.PNG) <br/>
![alt text](./images/getsmalltask.PNG) <br/>
![alt text](./images/getsmalltask.PNG) <br/>


