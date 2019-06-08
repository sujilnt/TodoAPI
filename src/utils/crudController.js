export const getOne = model => async (req,res)=>{
	try {
		const data = await model
			.create(req.body)
			.exec();
		if(!data){
			return res.status(404).end()
		}
		res.status(200).json({
			data: data
		})
	} catch(e){
		console.error(e);
		res.status(400).end()
	}
	
};

export const createOne = modal => async(req,res)=>{
 const doc = await modal.create(req.body);
 res.status(201).json(doc);
};

export const crudControllers = model => ({
	createOne: createOne(model),
});
//removeOne: removeOne(model),
//updateOne: updateOne(model),
//getMany: getMany(model),
//createOne: createOne(model)
