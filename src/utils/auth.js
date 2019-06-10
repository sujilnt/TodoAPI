import {User} from "../Resources/User/User.modal";
import jwt from "jsonwebtoken";

const secrets={
	jwt: "learneverything",
	jwtExp: '100d'
};
export const newToken = user => {
	console.log("user",user);
	return jwt.sign({ id: user._id }, secrets.jwt, {
		expiresIn: secrets.jwtExp
	});
};

export const verifyToken = token =>
	new Promise((resolve, reject) => {
		jwt.verify(token, secrets.jwt, (err, payload) => {
			console.log("token", secrets.jwt);
			console.log("payload",payload);
			console.log(err);
			if (err) return reject(err);
			resolve(payload);
		})
	});

export const signup = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: 'need email and password' });
	}
	
	try {
		const user = await User.create(req.body);
		const token = newToken(user);
		return res.status(201).send({ token });
	} catch (e) {
		return res.status(500).end();
	}
};

export const signin = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: 'need email and password' });
	}
	
	const invalid = { message: 'Invalid email and passoword combination' };
	
	try {
		
		const user = await User.findOne({ email: req.body.email })
			.select('email password')
			.exec();
		if (!user) {
			return res.status(401).send(invalid);
		}
		
		const match = await user.checkPassword(req.body.password);
		
		if (!match) {
			return res.status(401).send(invalid);
		}
		
		const token = newToken(user);
		return res.status(201).send({ token });
	} catch (e) {
		console.error(e);
		res.status(500).end();
	}
};

export const protect = async (req, res, next) => {
	const bearer = req.headers.authorization;
	if (!bearer || !bearer.startsWith('Bearer ')) {
		return res.status(401).end();
	}
	
	const token = bearer.split('Bearer ')[1].trim();
	let payload;
	try {
		payload = await verifyToken(token);
	} catch (e) {
		return res.status(401).end();
	}
	
	const user = await User.findById(payload.id)
		.select('-password')
		.lean()
		.exec();
	
	if (!user) {
		return res.status(401).end();
	}
	
	req.user = user;
	next();
};
