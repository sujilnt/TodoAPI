import { Router } from 'express';
import controllers from "./task.controller.js"

const router = Router();

//api/item
// /api/task

router
	.route('/')
	.get(controllers.getMany)
	.post(controllers.addMany);
 
// api/task/:id


router
	.route("/:id")
	.put(controllers.updateOne)
	.delete(controllers.removeOne);

router
	.route("/archive")
	.get(controllers.getDeletedItems);
export default router;
