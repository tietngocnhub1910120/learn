const mongoose = require("mongoose")

module.exports = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/datalearn",{
        useNewUrlParser: true
    })

    console.log("ket noi database thanh cong")
    } catch (error) {
        console.log("ket noi that bai")
    }
}