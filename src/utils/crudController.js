/*
* createOne : A function that is used to create a only one task at a time
* */
export const createOne = modal => async(req,res)=>{
	const createBy =req.user._id;
	const doc = await modal.create({...req.body,createBy}).exec();
	res.status(201).json(doc);
};
/*
* getMany : A function that is used to all tasks
* */
export const getMany = modal => async (req,res)=>{
	try{
		const doc = await modal.find({ createdBy: req.user._id }).exec();
		if(!doc){
			res.send(400).send()
		}
		res.status(200).json({
			data: doc
		})
	}catch(e){
		res.status(400).end()
	}
};
/*
* addMany : A function that is used to create a multiple task by passing array of objects at a time
* */
export const addMany = modal => async (req,res)=>{
	const createdBy = req.user._id;
	const newObj = req.body.map((r)=>{
		return{
			...r,
			createdBy
		}
	});
   const doc = await modal.insertMany(newObj).exec();
	res.status(201).json(doc);
};

/*
* removeOne: A function that is used to remove a particular task .
* */
export const removeOne = model => async (req, res) => {
	try {
		const removed = await model.findOneAndRemove({
			_id: req.params.id,
			createdBy: req.user._id,
		}).exec();
		
		if (!removed) {
			return res.status(400).end()
		}
		
		return res.status(200).json({ data: removed })
	} catch (e) {
		console.error(e);
		res.status(400).end()
	}
};
/*
* updateOne: A function that is used to update a particular task fields.
* */
export const updateOne = modal => async (req,res)=>{
	try{
	  const updatedTask = await modal.updateOne({
		  _id: req.params.id,
		  createdBy: req.user._id,
	  },req.body,{new : true}).exec();
	  if (!updatedTask) {
	  	return res.status(400).end()
	  }
	  return res.status(200).json({ data: updatedTask });
	} catch(e){
		console.error(e);
		res.status(400).end()
	}
};

export const getDeletedItems = model => async (req,res)=>{
	try{
		const doc = await model.find({"archived":true, createdBy: req.user._id,}).exec();
		if(!doc){
			return res.status(400).end()
		}
		return res.status(200).json({ data: doc });
	}catch(e){
		console.error(e);
		res.status(400).end()
	}
};

const getOne = modal => async (req,res)=>{
   try{
   	console.log(req.params.id);
   	  const doc = await modal.find({ _id: req.params.id }).exec();
   	  if(!doc){
   	  return res.status(401).end()
      }
	   return res.status(200).json({ data: doc });
   }catch (e) {
	   console.error(e);
	   res.status(400).end()
   }
};

export const crudControllers = model => ({
	createOne: createOne(model),
	getMany: getMany(model),
	addMany: addMany(model),
	removeOne: removeOne(model),
	updateOne: updateOne(model),
	getOne:getOne(model),
	getDeletedItems:getDeletedItems(model)
});
