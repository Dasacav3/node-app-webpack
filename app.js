require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");

// Using cors
let corsOptions = {
	origin: "*", // Reemplazar con dominio
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.peqdu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Base de datos conectada"))
	.catch((e) => console.error(e));

// Catch body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const validateToken = require("./routes/validate-token");
const admin = require("./routes/admin");

// Route Middlewares
app.use("/api/user", authRoutes);

app.use("/api/admin", validateToken, admin);

app.get("/", (req, res) => {
	res.send("Hello world");
});

// Start server
app.listen(port, () => {
	console.log(`Server iniciado en puerto ${port}`);
});
