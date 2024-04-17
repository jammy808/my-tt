import mongoose from "mongoose";
import { type } from "os";

const slotSchema = new mongoose.Schema({

    students :{
        type : Array,
        default : [],
    },

    slotId : {
        type : Number,
    },

    uniqueId :{
        type: String,
    },

    capacity : {
        type : Number,
        default : 50
    },

    subject :{
        type : String,
    },

    faculty :{
        type : String,
    },

    

})

const Slot =  mongoose.models.slots || mongoose.model("slots", slotSchema)

export default Slot
