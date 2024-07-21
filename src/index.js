const express = require("express");
const { port } = require("./config");
const router = require("./routes/index");
const authRouter = require("./routes/auth")
const noteRouter = require("./routes/note")
const cors = require("cors")
const app = express()
app.use(express.json())

app.use("/notes",noteRouter)
app.use("/auth",authRouter)
app.use("/", router);
app.use(cors);



app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log(`port is running ${port}`);

})