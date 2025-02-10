import React, { useEffect, useState } from 'react'
import { Achievementt } from './Contextachievement'
import './Achievement.css'
export default function Achievement() {

    const [sasha, setSasha] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setSasha(true);
            } else {
                setSasha(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <section className="achievement">
            <div className="back">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                Achievementt.map(({ name, p, img }) => (

                                    <>
                                        <div className={`padmain ${sasha ? 'activeScroll' : ''}`}>
                                            <div className="main" >
                                                <div className="firstin">
                                                    <div className="father">
                                                        <div className="left">
                                                            <h1>{name}</h1>
                                                            <p>{p}</p>
                                                        </div>
                                                        <img className='keyimage' src={img} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
