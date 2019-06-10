import express from 'express';
import { json, urlencoded } from 'body-parser';
import { User } from "./Resources/User/User.modal";
import { Task } from "./Resources/task/task.modal";
import { signup, signin, protect } from './utils/auth'
import morgan from 'morgan';
import cors from 'cors';
import  taskRouter  from "./Resources/task/task.router";
import  userRouter  from "./Resources/User/User.router";
import connect from "./Resources/connect";

export const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.post('/signup', signup);
app.post('/signin', signin);

app.use('/api', protect);
app.use('/api/task', taskRouter);
app.use('/api/user', userRouter);

export const start = async () => {
	try {
		await connect().then(async ()=>{
			app.listen(3030, () => {
				console.log(`REST API on http://localhost:3030/api`)
			});
		});
	} catch (e) {
		console.error(e)
	}
};
