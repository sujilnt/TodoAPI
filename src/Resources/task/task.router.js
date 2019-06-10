import { Router } from 'express';
import controllers from "./task.controller.js"

const router = Router();

// For Routes api/task
router
	.route('/')
	.get(controllers.getMany)
	.post(controllers.addMany);
 
// For Routes  api/task/:id
router
	.route("/:id")
	.put(controllers.updateOne)
	.delete(controllers.removeOne)
	.get(controllers.getOne);
// For Routes api/task/archive
router
	.route("/archive")
	.get(controllers.getDeletedItems);
export default router;
