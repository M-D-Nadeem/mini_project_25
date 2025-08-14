import app from "./app.js";
import connection from "./dbConnect.js";
import cloudinary from "cloudinary"
connection()

cloudinary.config({
    cloud_name: "dvptqwfj4",
    api_key: "847684179233349",
    api_secret: "rwk-b3jRoFY8lwsBEgaFXIi69nw"
  });

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http:\\localhost:${process.env.PORT}`);
})

export default cloudinary;
