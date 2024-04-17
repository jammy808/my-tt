import { connect } from '@/dbConfig/dbConfig'
import studentModel from '@/models/studentModel'
import slotModel from '@/models/slotModel'
import { error } from 'console'
import {NextRequest,NextResponse} from 'next/server'

connect()

export async function POST(request : NextRequest){
    
    const reqBody = await request.json()
        const {id} = reqBody
        console.log(id);
     
    var slot = await slotModel.find({slotId : id})
    console.log(slot)

    return NextResponse.json({
        message: "User created",
        data : slot
    })
}
