### TodoAPI

A REST API  for Todo Application

#### API EndPoint

`1. /Signup (Post Req) - Creating a new account for users.` <br/>
`2. /Signin (Post Req) - A user sign sign in the api, so that he can access the data using api` <br/>
`3. /api/task (Post, GET Req) - A set of operation can be done  like  add,get todo tasks based on each user.` <br/>
`4. /api/task/:id (Get,Post,Delete,PUT Requests) -  A set of operation can be done like get delete, update, get and post, remove based on each user.`<br/>
`5. /api/archive (GET)-  To get all the archive tasks`
` The above 1 and 2 are not protected routes but 3 and 4 are  protected routes requires token. The Token can geneated using `
