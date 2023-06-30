import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {

  const [name, setName] = useState('');

  const [response, setResponse] = useState(null);
  const params = {
    name: name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);

    try {
      const response = await axios.post('http://localhost:5000/predict', params); // Replace with your server URL
      setResponse(response.data);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ fontSize: '20px' }}>
      <section class="appointment-area" data-bg-color="#eaeded">
        <div class="appointment-form-style1">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="appointment-form">
                  <div class="section-title">
                    <h5>We are always Ready for Helping you!</h5>
                  </div>
                  <form onSubmit={handleSubmit} method='POST'>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-12">
                          <label style={{ padding: '20px' }}>Patients Symptoms</label>
                          <br />
                          <div class="form-group mb-0">
                            <textarea name="name" rows="7" value={name} onChange={handleChange} placeholder="Your message here..."></textarea>
                          </div>
                        </div>
                        <label style={{ padding: '60px' }}>Doctor Diagnose</label>
                        <div style={{ fontSize: '20px', height: '200px', overflowY: 'auto', padding: '10px' }}>
                          {response && (
                            <div>
                              {response.diagnosis}
                            </div>
                          )}
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mb-0">
                            <button class="btn btn-theme" type="submit">DIAGNOSE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="form-message"></div>
              </div>
            </div>
          </div>
        </div >
      </section >

    </div >
  );
};


export default App;
