import React, { useState } from 'react'
// import { useAddTaskMutation } from "./services/taskApi";
import { useAddRegistersMutation } from '../../redux/Register';
import './Registers.css'
import { useNavigate } from 'react-router-dom';

export default function Firstregister() {
    // bu yerda foydalanuvchi birinchi marotaba registerga kirganda inputga yozgan malumotlarini db.jsonga jonatadigan qilingan
    const [addRegister, result] = useAddRegistersMutation();
    const [inp1, setInp1] = useState();
    const [inp2, setInp2] = useState();
    const [inp3, setInp3] = useState();


    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault(e)
        const data = {
            name: inp1,
            lastname: inp2,
            selection: inp3,
            selectionseller: inp3


        }

        await addRegister(data)
    }

    const handle = (e) =>{
        const role = e.target.value;
        setSelectedRole(role);
        if (role === 'client') {
            navigate('/routerregister'); // Client sahifasiga yo'naltirish
        } else if (role === 'seller') {
            navigate('/secondregister'); // Seller sahifasiga yo'naltirish
        }
    }


    // --------------


    return (
        <>

            <form className='firstregister' action="">
                <input value={inp1} required onChange={ (e) => setInp1(e.target.value)} type="text" placeholder='Enter your name ...' />
                <input required  onChange={(e) => setInp2(e.target.value)} type="text" placeholder='Enter your last name ...' />
                
                <select required value={setInp3}  onChange={handle} name="" id="">
                    <option value="Tanlang">Tanlang</option>
                    <option value="seller">Seller</option>
                    <option value="client">Client</option>
                </select>
                <button   onClick={(e) => handleRegister(e)}>Register</button>

            </form>
            
        </>
    )
}