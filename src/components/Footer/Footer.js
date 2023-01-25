import React from 'react'
import {  } from "./Footer.css";
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <>
    <footer>
        <div class=" footer-main">
            <div class="container">
                <div class="row pb-4">
                    <div class="col-lg-4 col-md-12 mt-5 col-sm-12">
                        <div class="footer-widget">
                            <h4>Acerca de Enda Nabani</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            <ul  className='mt-3'>
                                <li className='ml-5'><a href="#"><Facebook color="white" size={30} /></a></li>
                                <li><a href="#"><Instagram color="white" size={30} /></a></li>
                                <li><a href="#"><Whatsapp color="white" size={30} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 mt-5 col-sm-12">
                        <div class="footer-link-contact">
                            <h4>Contacta con nosotros</h4>
                            <ul>
                                <li >
                                    <p><i class="fas fa-map-marker-alt"></i>Toluca, Estado de México</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-phone-square"></i>Teléfono: <a href="tel:+1-888705770">+52 55 32 71 53 14</a></p>
                                </li>
                                <li>
                                    <p><i class="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
