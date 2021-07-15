const router = require("express").Router();
const User = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schemaRegister = Joi.object({
	name: Joi.string().min(6).max(255).required(),
	email: Joi.string().min(6).max(255).required().email(),
	password: Joi.string().min(6).max(1024).required(),
});
const schemaLogin = Joi.object({
	email: Joi.string().min(6).max(255).required().email(),
	password: Joi.string().min(6).max(1024).required(),
});

router.post("/login", async (req, res) => {
	const { error } = schemaLogin.validate(req.body);

	if (error) return res.status(400).json({ error: error.details[0].message });

	const user = await User.findOne({ email: req.body.email });

	if (!user) return res.json({ error: true, message: "Usuario no encontrado" });

	const password = await bcrypt.compare(req.body.password, user.password);

	if (!password) return res.json({ error: true, message: "Contraseña invalida" });

	const token = jwt.sign(
		{
			name: user.name,
			id: user._id,
		},
		process.env.TOKEN_SECRET
	);

	res.header("auth-token", token).json({
		error: null,
		data: { token },
	});
});

router.post("/register", async (req, res) => {
	// Validate user

	const { error } = schemaRegister.validate(req.body);

	if (error) return res.status(400).json({ error: error.details[0].message });

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist)
		return res.status(400).json({
			error: true,
			message: "email ya registrado",
		});

	const salt = await bcrypt.genSalt(10);
	const password = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: password,
	});
	try {
		const savedUser = await user.save();
		res.json({
			error: null,
			data: savedUser,
		});
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
