import React, { useState } from 'react'
// import { useAddTaskMutation } from "./services/taskApi";
import { useAddRegistersMutation } from '../../redux/Register';


export default function Firstregister() {
    // bu yerda foydalanuvchi birinchi marotaba registerga kirganda inputga yozgan malumotlarini db.jsonga jonatadigan qilingan
    const [addRegister, result] = useAddRegistersMutation();
    const [inp1, setInp1] = useState();
    const [inp2, setInp2] = useState();

    const handleRegister = async (e) => {
        e.preventDefault(e)
        const data = {
            name: inp1,
            lastname: inp2
        }
        await addRegister(data)
    }
  return (
    
    <>
    <form action="">
        <input onChange={(e) =>setInp1(e.target.value)} type="text" />
        <input onChange={(e) => setInp2(e.target.value)} type="text" />
        <button onClick={(e) => handleRegister(e)}>click</button>
    </form>
    </>
  )
}
