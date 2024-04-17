"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios";



function page() {

  const [slots, setSlots] = useState([])
  const [tt, setTT] = useState(Array.from({ length: 9 }, () => Array(6).fill(null)))
  const [student, setStudent] = useState()

  useEffect(()=>{
    getStudent()
  },[])

  const getStudent = async() =>{
    const res = await axios.get("/api/users/student")
    setStudent(res.data.data)
    setTT(res.data.array)
  }

  const getSlots = async(id:any) => {
    const res = await axios.post("/api/users/profile",{id})
    setSlots(res.data.data)
    console.log(res)
    console.log(slots)
  }

  const addSlot = async(uid:any) =>{
    const response = await axios.post("/api/users/add",{uid})
    
    const res = await axios.get("/api/users/student")
    setStudent(res.data.data)
    setTT(res.data.array)
  }

  const deleteSlot = async(uid:any) =>{
    const response = await axios.post("/api/users/delete",{uid})

    const res = await axios.get("/api/users/student")
    setStudent(res.data.data)
    setTT(res.data.array)
  }

  let displaySlots = slots.map((e:any) =>{
    return(
      <div><button onClick={()=>{  

        const [r, c] = String(e.slotId).split('').map(Number);
        tt[r][c] === e.subject ? deleteSlot(e.uniqueId): addSlot(e.uniqueId)
          }}>  
      {e.uniqueId}
      </button></div>
    )
  })
  
  return (
    <>
  
    <h1>Watashi no Time-Table </h1>

    
    <table>
        <thead>
          <tr className='days'>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 - 10:00</td>

            <td><button onClick={()=>{
              getSlots(11)
            }}>{tt[1][1] ? tt[1][1]: "select"}</button></td>


            <td></td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>10:00 - 11:00</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>11:15 - 12:00</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>12:00 - 1:15</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>1:45 - 2:45</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>2:45 - 3:45</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>3:45 - 4:45</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>

          <tr>
            <td>4:45 - 5:45</td>
            <td>Maths</td>
            <td>inglis</td>
            <td>hate</td>
            <td>alchemy</td>
            <td>dark arts</td>
          </tr>
        </tbody>
      </table>
    
      <div>{displaySlots}</div>

    </>
  )
}

export default page