/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { IoIosCall } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

export class Footer extends Component {
    render() {
      return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className='Food-zone'>
                        <h2><b>Food zone</b></h2>
                        <p><b>The Recipe Master project is a comprehensive web application designed to help users discover, organize, and share their favorite recipes. Users can browse through a vast collection of recipes, save their favorites, and create custom meal plans.</b></p>
                        <div className='icons'>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter size={24} /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
                        </div>
                    </div>
                    <div className='Our-menu'>
                        <h3><b>Our menu</b></h3>
                        <ul>
                            <li>Chicken Burger</li>
                            <li>Brief Pizza</li>
                            <li>Fresh Vegetable</li>
                            <li>Sea Foods</li>
                            <li>Desserts</li>
                            <li>Cold Drinks</li>
                            <li>Discount</li>
                        </ul>
                    </div>
                    <div className='Useful-links'>
                        <h3><b>Useful links</b></h3>
                        <ul>
                            <li>About Us</li>
                            <li>Restaurant</li>
                            <li>Our Chefs</li>
                            <li>Testimonials</li>
                            <li>Blogs</li>
                            <li>FAQS</li>
                            <li>Privary Policy</li>
                        </ul>
                    </div>
                    <div className='Contact-Us'>
                        <h3><b>Contact Us</b></h3>
                        <div className="contact-item">
                            <IoIosCall size={24} />
                            <p>+44(0) 9865 124 765</p>
                        </div>
                        <div className="contact-item">
                            <MdMessage size={24} />
                            <p>info@yourdomain.com</p>
                        </div>
                        <div className="contact-item">
                            <FaLocationDot size={24} />
                            <p>11 Beaufor Count,UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Footer;

