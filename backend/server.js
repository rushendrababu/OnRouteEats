const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const hotelRoutes = require("./routes/hotelRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(express.json()); //to accepts json

// app.get('/', (req, res) =>{
//     res.send("API is runninng");
// });

app.use("/api/user", userRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/hotel", hotelRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
