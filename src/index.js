import express from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = 3000;

const app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
