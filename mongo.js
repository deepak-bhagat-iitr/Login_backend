const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://deepak988088:G869xbCJuZkfrtqh@cluster0.p56djlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("infos", newSchema)

module.exports = collection
