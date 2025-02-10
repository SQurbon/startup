import React, { useState } from 'react'
import './Apphouse.css'
import { FaHeart } from "react-icons/fa";
import { Example } from './Contexts/Appconstantsone'
import { useNavigate } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";


export default function Apphouse() {
    const [text, setText] = useState('Boshlang‘ich yozuv');
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate()





    



    return (
        <section className="apphouse">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Предложения для вас</h1>

                    </div>

                    <div className="col-lg-12">
                        {
                            Example.map(({ img, name, h1, h2, h3, h4, h5, h6, price }) => (
                                <>
                                    <div onDoubleClick={() => setLiked(!liked)} className="appcard">

                                        <div className="like">
                                            <img className='imagefirst' src={img} alt="" />
                                        </div>

                                       
                                        <div className="appcardin">
                                            <h2>{name}</h2>
                                            <div className="sizeoff">
                                                <div className="firstsize">
                                                    <h6>{h1}</h6>
                                                    <h6>{h2}</h6>
                                                </div>
                                            </div>
                                            <div className="sizeoff">
                                                <div className="firstsize">
                                                    <h6>{h3}</h6>
                                                    <h6>{h4}</h6>
                                                </div>
                                            </div>
                                            <div className="sizeoff">
                                                <div className="firstsize">
                                                    <h6>{h5}</h6>
                                                    <h6>{h6}</h6>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <h5>{price}</h5>
                                                < FaHeart color={liked ? "red" : "black"} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className="col-lg-12">

                        <button className='btn' onClick={() => navigate("/allproduct")}>СМОТРЕТЬ ВСЕ ПРОЕКТЫ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
