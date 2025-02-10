import React from 'react'
import './Header.css'
import title from '../../../../assists/Rectangle 1.png'
import { FaAngleRight } from "react-icons/fa6";
import {  useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate()
  const handlenavigate = () => {
    navigate("/register")
  }
  return (
    <>
      <header className='header'>
        <img src={title} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
          
                <h1>СТРОИТЕЛЬСТВО ДАЧНЫХ ДОМОВ И КОТТЕДЖЕЙ</h1>
                <p className="text">На участок поставляются готовые модули, производится их монтаж в короткие сроки.
                  Мы гарантируем выполнение всех взятых на себя обязательств и доступные цены.</p>
                  
              <div className="linkbox">
                <FaAngleRight onClick={handlenavigate} />

                <h4>Заказать</h4>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}