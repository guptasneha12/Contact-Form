import { useState, useEffect } from "react";
import "./loginform.css";

function App() {

    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formData = new FormData(formEle);

        fetch("https://script.google.com/macros/s/AKfycbzwfqz3PSa-aO5gbQl2LM4N0ZumSim2BirIcHS_1z197RFcO7QLhXI_vVnkcjXgYLcr5A/exec", {
            method: "POST",
            body: formData,
            mode: 'no-cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form submission successful:', data);
            // Handle successful form submission here
        })
        .catch(error => {
            console.error('Error during form submission:', error);
            // Handle error during form submission here
        });
    }


  return (
    <div className="container">

      <form className="form" onSubmit={(e) => Submit(e)}>
        <h1>Contact Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <br/>
            <input
              type="text"
              name="Name"
              placeholder="Name"
             
            />
          </div>
         
          <div className="field">
            <label>Email</label>
            <br/>
            <input
              type="text"
              name="Email"
              placeholder="Email"
             
            />
            
          </div>

          <div className="field">
            <label>Phone</label>
            <br/>
            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
             
            />
            
          </div>
         
          <div className="field">
            <label>Message</label>
            <br/>
            <input
              type="text"
              name="Message"
              placeholder="Message"
              
            />
          </div>
         
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;