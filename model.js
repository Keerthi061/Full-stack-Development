const mongoose = require('mongoose')
const s1 = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    tech:{
        type : String,
        required : true
    },
    section:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('schema1',s1)