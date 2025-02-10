import React from 'react'
import './Header.css'
import logo from '../../../../assists/image 11.svg'
import Marquee from 'react-fast-marquee'
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={logo} alt="" />
              <h1>кто создал сайт</h1>
              <div className="web">
                <h4>Курбанбек</h4>
                <h4>Суннатуллах</h4>
                <h4>Ибрахим</h4>
              </div>
              
              <div className='ball'>Заказать <br /> звонок</div>
            </div>

          </div>
        </div>
        <div className="ulfirst">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <Marquee direction='left' speed={40} pauseOnHover={true} >


                  <ul>
                    <li>
                      <a href="#!">Главная</a>
                    </li>
                    <li>
                      <a href="#!">Комплектация</a>
                    </li>
                    <li>
                      <a href="#!">Заказчику</a>
                    </li>
                    <li>
                      <a href="#!">Доставка и сборка</a>
                    </li>
                    <li>
                      <a href="#!">Наши работы</a>
                    </li>
                    <li>
                      <a href="#!">Контакты</a>
                    </li>
                  </ul>


                </Marquee>
              </div>

            </div>
          </div>
        </div>
        <div className="ulsecond">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Marquee direction='right' speed={40} pauseOnHover={true}>
                  <ul>
                    <li>
                      <a href="#!">Каталог домов</a>
                    </li>
                    <li>
                      <a href="#!">Каталог бытовок</a>
                    </li>
                    <li>
                      <a href="#!">Каталог беседок</a>
                    </li>
                    <li>
                      <a href="#!">Каталог бань</a>
                    </li>
                    <li>
                      <a href="#!">Каталог хоз. построек</a>
                    </li>
                  </ul>
                </Marquee>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
