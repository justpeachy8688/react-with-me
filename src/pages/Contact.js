import React from 'react'
import ContactItem from "../components/Contact/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/email.svg";
import location from "../img/location.svg";
import Title from "../components/Title/Title";

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact '} span={'Contact'} />

            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.1816426959767!2d-149.78371251917838!3d61.051225882380834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c89b72f64478d7%3A0xe14ce56cdba871f7!2sPotter%20View%20Cir%2C%20Anchorage%2C%20AK%2099516!5e0!3m2!1sen!2sus!4v1620851185889!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'907-201-2131'} text2={'124-453-4443'} title={'Phone'} />
                    <ContactItem icon={email} text1={'tsanders3515@gmail.com'} text2={''} title={'Email'} />
                    <ContactItem icon={location} text1={'Anchorage, AK'} text2={''} title={'Location'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;


