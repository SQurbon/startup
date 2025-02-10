import React, { useState } from 'react'
import { useAddRegistersMutation } from '../../redux/Register';
import './Secondregister.css'
import { useAddSecondRegisterMutation, useAddSecondRegistersMutation } from '../../secondredux/Secondregister';

export default function SecondRegister() {
    const [addSecondRegister, result] = useAddRegistersMutation();
    const [inpone, setInpone] = useState();
    const [inptwo, setInpsecond] = useState();
    const [inpthree, setInpthird] = useState();
    const [inpfour, setInpfourth] = useState();
    const [inpfive, setInpfive] = useState();


    const handleSecondRegister = async (e) => {
        e.preventDefault(e)
        const seconddata = {
            name: inpone,
                    lastname: inptwo,
                    number: inpthree,
                    photo: inpfour,
                    compname: inpfive
        }
        await addSecondRegister(seconddata)
    }

    return (
        <>
            <div className="box">
            <h1>Seller Registration Form</h1>
            <form className='secondreg' action="">
                <input onChange={(e) => setInpone(e.target.value)} type="text" placeholder='Enter your name ...' />
                <input onChange={(e) => setInpsecond(e.target.value)} type="text" placeholder='Enter your last name ... ' />
                <input onChange={(e) => setInpthird(e.target.value)} type="number" placeholder='Enter your phone number ' />
                <input onChange={(e) => setInpfourth(e.target.value)} type="text" placeholder='Choose your profile photo' />
                <input onChange={(e) => setInpfive(e.target.value)} type="text" placeholder='Enter your company name' />
                <button onClick={(e) => handleSecondRegister(e)}>Register</button>
            </form>
        </div>
        </>
    )
}