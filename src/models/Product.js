const mongoose = require('mongoose');



//Vai criar um novo Schema dentro do mongocompass.
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        deafult: Date.now,
    },
});

mongoose.model('Product', ProductSchema);