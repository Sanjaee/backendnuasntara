const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const secure = require("./src/middleware/secure");
const mitraRoutes = require("./src/routes/mitraRoutes");
const testimoniRoutes = require("./src/routes/testimoniRoutes");
const galeryRoutes = require("./src/routes/galeryRoutes");
const usersRoutes = require("./src/routes/userRoutes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", secure, mitraRoutes);
app.use("/api", secure, testimoniRoutes);
app.use("/api", secure, galeryRoutes);
app.use("/api", secure, usersRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
