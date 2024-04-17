import mongoose from "mongoose";
import { type } from "os";

const studentSchema = new mongoose.Schema({

    name: {
        type : String,
    },

    rollNo :{
        type: String,
    },

    password: {
        type : String,
    },

    slots : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "slots"
    }]
})

const Student =  mongoose.models.students || mongoose.model("students", studentSchema)

export default Student
