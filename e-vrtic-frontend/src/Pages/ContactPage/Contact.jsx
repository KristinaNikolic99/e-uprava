import React from 'react';
import './Contact.css';
import BannerImage from '../../Components/Assets/background2.jpg'
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const {firstName, lastName, email, phoneNumber, message} = e.target.elements;
        try{
            await axios.post('http://localhost:8080/api/contact', {
                ime: firstName.value,
                prezime: lastName.value,
                email: email.value,
                telefon: phoneNumber.value,
                poruka: message.value
            }).then(res => {
                toast.success("User Contact Successfully!!!", {
                    position: toast.POSITION.TOP_CENTER,
                });
                e.target.reset();
            })
        } catch(err) {
            toast.error("User Contact Unsuccessfully!!!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
  return (
    <div className='all-contact'>
        <ToastContainer/>
        <div className="new_home_web" >
            <div className="responsive-container-block big-container" >
                <div className="responsive-container-block textContainer">
                    <div className="topHead">
                    <p className="heading">
                        Kontaktirajte nas
                    </p>
                    <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
                    </div>
                    <p className="text-blk subHeading">
                    <strong>Ukoliko imate bilo kakva pitanja i nedoumice pošaljite nam poruku.</strong>
                    </p>
                </div>
                <div className="responsive-container-block container">
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b">
                    <form className="form-box" onSubmit={handleSubmit}>
                        <div className="container-block form-wrapper">
                            <div className="responsive-container-block">
                                <div className="left4">
                                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-2">
                                    <input className="input" id="firstName" name="FirstName" placeholder="First Name" required/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                    <input className="input" id="lastName" name="Last Name" placeholder="Last Name" required/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                    <input className="input" id="email" name="Email" placeholder="Email Address" required/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                                    <input className="input" id="phoneNumber" name="PhoneNumber" placeholder="Phone Number" required/>
                                </div>
                                </div>
                                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-2">
                                <textarea className="textinput" id="message" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <button className="send" id="w-c-s-bgc_p-1-dm-id" type="submit">
                            Send
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  )
}
