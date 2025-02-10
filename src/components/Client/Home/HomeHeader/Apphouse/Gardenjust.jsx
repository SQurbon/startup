import React from 'react'
import { Examplegarden } from './Contexts/Garden'

export default function Gardenjust() {
  return (
     <section className="apphouse">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {
                                Examplegarden.map(({ img, name, h1, h2, h3, h4, h5, h6, price }) => (
                                    <>
                                        <div className="appcard">
                                            <img src={img} alt="" />
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
                                                <h5>{price}</h5>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
  )
}
