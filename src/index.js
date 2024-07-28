const express = require("express");
const { port } = require("./config");
const router = require("./routes/index");
const authRouter = require("./routes/auth.router")
const { errorMiddleware } = require("./middleware/error.midddleware");
const cors = require("cors");
const app = express()
app.use(express.json())

app.use("/auth",authRouter)
app.use(router);
app.use(cors);

app.use(errorMiddleware);

app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log(`port is running ${port}`);

})