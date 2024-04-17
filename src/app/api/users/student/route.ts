import { connect } from '@/dbConfig/dbConfig'
import studentModel from '@/models/studentModel'
import slotModel from '@/models/slotModel'
import { error } from 'console'
import {NextRequest,NextResponse} from 'next/server'

connect()

export async function GET(request : NextRequest){
    
     
    const student = await studentModel.find({_id : '661f740e7cf392266eaf8c1b' }).populate('slots')
    console.log(student)
    const slots = student[0].slots
    console.log("hora-------------------")
    console.log()

    const arr = Array.from({ length: 9 }, () => Array(6).fill(null));

    arr.forEach((row, rowIndex) => {
        
        row.forEach((_, colIndex) => {
          
          const id = Number(`${rowIndex}${colIndex}`);
      
          
          const matchingSlot = slots.find((slot:any) => slot.slotId === id);
      
          
          if (matchingSlot) {
            arr[rowIndex][colIndex] = matchingSlot.subject;
          }
        });
      });

      

    return NextResponse.json({
        message: "User created",
        data : student,
        array : arr
    })
}
