import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Allproduct.css'
import Apphouse from '../Apphouse'
import Dom from '../Dom'
import Navbar from '../../../../../Client/Home/HomeHeader/Navbar'
import Gardenjust from '../Gardenjust'

export default function Allproduct() {
    const [select, setSelect] = useState()
    const backnavigate = useNavigate()
    const [css, setCss] = useState({})
    const [showComponent, setShowComponent] = useState(false);
    const [showComponenttwo, setShowComponenttwo] = useState(false);
    const [showGarden, setSHowgarden] = useState(false);



    const handleChange = (event) => {
        const value = event.target.value;
        setSelect(value);

        if (value === "yevrouy") {
            setShowComponent(true)
            setShowComponenttwo(false)
            setSHowgarden(false)

        }else if (value === "dom"){
            setShowComponent(false)
            setSHowgarden(false)
            setShowComponenttwo(true)
        }
        else if (value === "garden"){
            setSHowgarden(true)
            setShowComponent(false)
            setShowComponenttwo(false)
        }
         else {
            setShowComponent(false);
        }
    };

    return (
        <>
        <Navbar/>
            <section className='allproduct'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="choosehouse">
                                <select id="options" value={setSelect} onChange={handleChange}>
                                    <option value="" disabled>
                                        Please choose an option
                                    </option>
                                    <option value="yevrouy">Дом Евро</option>
                                    <option value="dom">Дом</option>
                                    <option value="garden">сад</option>
                                </select>



                                <div>{showComponent && <Apphouse />}</div>
                                <div>{showComponenttwo && <Dom /> }</div>
                                <div>{showGarden && <Gardenjust /> }</div>


                                <button onClick={() => backnavigate("/routerregister")}>back</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
