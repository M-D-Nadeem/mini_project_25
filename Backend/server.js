import app from "./app.js";
import connection from "./dbConnect.js";

connection()

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http:\\localhost:${process.env.PORT}`);
})