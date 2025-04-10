import app from "./app.js";
import connection from "./dbConnect.js";
import cloudinary from "cloudinary"
connection()

cloudinary.config({
    cloud_name: "dgckd4upi",
    api_key: "434615145335372",
    api_secret: "oJLGGh7zVqpz-2aq87dIHlkeYiE"
  });

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http:\\localhost:${process.env.PORT}`);
})

export default cloudinary;
