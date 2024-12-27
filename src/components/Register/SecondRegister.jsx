import React, { useState } from 'react'
import { useAddRegistersMutation } from '../../redux/Register';
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
            <form action="">
                <input onChange={(e) => setInpone(e.target.value)} type="text" />
                <input onChange={(e) => setInpsecond(e.target.value)} type="text" />
                <input onChange={(e) => setInpthird(e.target.value)} type="text" />
                <input onChange={(e) => setInpfourth(e.target.value)} type="text" />
                <input onChange={(e) => setInpfive(e.target.value)} type="text" />

                <button onClick={(e) => handleSecondRegister(e)}>click</button>
            </form>
        </>
    )
}
