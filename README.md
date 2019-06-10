### TodoAPI

A REST API  for Todo Application

#### Usage
`yarn install` <br/>
`yarn run dev`

#### API EndPoint

1.` /Signup (Post Req)` - Creating a new account for users. <br/>
2. `/Signin (Post Req)` - A user sign sign in the api, so that he can access the data using api <br/>
3. `/api/task (Post, GET Req)` - A set of operation can be done like  add,get todo tasks based on each user.<br/>
4. `/api/task/:id (Get,Post,Delete,PUT Requests)` -  A set of operation can be done like get delete, update, get and post, remove based on each user.<br/>
5. `/api/archive (GET)` -  To get all the archive tasks. <br/>
` The above 1 and 2 are not protected routes but 3 and 4 are  protected routes requires token.`

#### `Steps to use Api `
1) Create an Account first by send a /signup post request , If status is 200 then token is created as response.
![alt text]("./images/apitoken.png") 
<br/>
2)Each token is created for each user to inorder to identify each todo tasks.

#### `Signup (Post Req)`
	POST /signup
		
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
return res;
}

```
