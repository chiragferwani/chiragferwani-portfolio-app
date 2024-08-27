import React from "react";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Loader from "react-loaders";
import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Swal from 'sweetalert2'

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6c08f52e-2721-4159-827b-022e5ded94c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(
      () => {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
        setTimeout(function(){
          window.location.reload(1);
       }, 5000);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
  };

  return (
    <>
      <div className="container contact_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
          Looking to get in touch? My inbox is at your disposal! 
          Feel free to reach out to me using the form below; I'm always here to connect.
          </p>

          {/* CONTACT FORM SECTION */}

          <div className="contact_form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" id="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat_button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* MAP INFO SECTION */}

        <div className="info_map">
          Chirag Ferwani,
          <br />
          India, Maharashtra
          <br />
          Kiran Subhchandra, Rahatani
          <br />
          Pune
          <br />
          <span>chiragferwani@gmail.com</span>
        </div>

        {/* MAP SECTION */}

        <div className="map_wrap">
          <MapContainer center={[18.6024, 73.7962]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.6024826, 73.7959899]}>
              <Popup>Chirag lives here, come over for a cup of coffee:</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
