import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import  taskRouter  from "./Resources/task/task.router";
import connect from "./Resources/connect";

export const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/task', taskRouter);

export const start = async () => {
	try {
		await connect().then(async ()=>{
			app.listen(3030, () => {
				console.log(`REST API on http://localhost:3000/api`)
			});
			
		});
	} catch (e) {
		console.error(e)
	}
};
