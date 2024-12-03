const express = require("express");
const mongoose = require("mongoose");
const dotenv =require ("dotenv");
const router  = require("./route/rental.route");
const userRouter = require("./route/user.route");

dotenv.config(); 

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get("/",(req,res)=>{
    res.send("Project")
})

// Database connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI || process.env.DB_URL;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//define route

app.use("/api/posts", router);
app.use("/user", userRouter);
// app.use(suggestionRoute);
// app.use("/api/orders", orderRoutes); // Order management routes
// app.use("/api/esewa", esewaRoutes); // eSewa payment routes

// app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
