import { connect } from '@/dbConfig/dbConfig'
import studentModel from '@/models/studentModel'
import slotModel from '@/models/slotModel'
import { error } from 'console'
import {NextRequest,NextResponse} from 'next/server'

connect()

export async function POST(request : NextRequest){
    
    const reqBody = await request.json()
        const {uid} = reqBody
        console.log(uid);
     
    var student = await studentModel.findOne({_id :'661f740e7cf392266eaf8c1b'})
    console.log("doen")

    var slot = await slotModel.findOne({uniqueId : uid})
    console.log("doen")

    student.slots = student.slots.filter((id:any) => id.toString() !== slot._id.toString());
    await student.save();


    slot.students = slot.students.filter((e:any) => e !== student.name);

    
    let a = slot.capacity;
    a = a + 1;
    if(a > 50) a = 50
    slot.capacity = a;

    await slot.save()
    console.log(slot)


    return NextResponse.json({
        message: "User created",
        
    })
}
