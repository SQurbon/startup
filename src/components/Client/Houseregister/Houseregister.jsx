import React from 'react'
import './Domeregister.css'
import { TbXboxX } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export default function Houseregister() {
    const navigate = useNavigate()

    const handleshowform = () => {
        navigate('/')
    }
    return (
        <>
            <section className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="reg">
                                <h1>Рассчитать стоимость</h1>
                                <form action="">
                                    <h5>Что желаете построить? *</h5>
                                    <select name="" id="">
                                        <option value="">Дом</option>
                                        <option value="">Дом с двором</option>
                                    </select>
                                    <div className="sizeofhouse">
                                        <h5>Название или код товара</h5>
                                        <div className="size">
                                            <input type="number" />
                                            <h5>x</h5>
                                            <input type="number" />
                                            <h5>м</h5>
                                        </div>
                                    </div>
                                    <h5>Название или код товара</h5>
                                    <input type="text" placeholder='Введите название или код товара' />
                                    <h5>Фундамент *</h5>
                                    <select name="" id="">
                                        <option value="">толстый фундамент</option>
                                        <option value="">небольшой фундамент</option>
                                    </select>
                                    <h5>Утепление стен *</h5>
                                    <select name="" id="">
                                        <option value="">Без утепления</option>
                                        <option value="">Изолированный</option>
                                    </select>
                                    <h5>Этажность *</h5>
                                    <input type="number" placeholder='Этажность *' />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="">
                                <TbXboxX onClick={handleshowform} />

                                <h5>Адрес строительства *</h5>
                                <input type="text" placeholder='Введите адрес строительства' />
                                <h5>Имя*</h5>
                                <input type="text" placeholder='Ваше имя' />
                                <h5>Телефон*</h5>
                                <input type="text" placeholder='+998 () 000-00-00' />
                                <h5>Электронная почта</h5>
                                <input type="text" placeholder='Email' />
                                <h5>Оставить комментарий</h5>
                                <input type="text" placeholder='Введите комментарий' />
                                <button>ОТПРАВИТЬ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
