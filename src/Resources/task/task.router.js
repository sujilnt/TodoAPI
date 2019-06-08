import { Router } from 'express';
import controllers from "./task.controller.js"

const router = Router();

//api/item
// /api/task

router
	.route('/')
	//.get(controllers.getOne,{"archieve": true});
	.post(controllers.createOne);
console.log(router);
// api/task/:id
/*
router
	.route("/")
	.get(controllers.getOne);
	//.put(controllers.updateOne)
	//.delete(controllers.removeOne);
*/
export default router;
