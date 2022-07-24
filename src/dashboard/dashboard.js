import React from 'react';
// import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import picture from './salsa-profile.jpg'

export const DashboardPage = () => {

    const mystyle = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: "white"
        
    };

    return (
        <div className="container" style={mystyle}>
            <div className="row">
            <h2 style={{textAlign:"center",marginBottom:"20px"}}>Hi Admin! This is Your Dashboard Page</h2>
            <p style={{textAlign:"center",marginBottom:"50px"}}>Let me introduce myself, I am a Network Engineer with 4+ year experience. My world of work is what I enjoy right now.</p>

          <div className="col-lg-3 col-xs-12">
            <img width="280px" height="390px" src={picture} style={{float:"right", borderRadius:"10px"}} alt=""/>
          </div>
          <div className="col-lg-9 pt-4 pt-lg-0 content">
            <h3>Network Engineer &amp; Businessgirl</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 September 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span> <a href="https://www.salsasikahita.tech/" target="_blank">www.salsasikahita.tech</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 812-1721-6235</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Jakarta Barat, DKI Jakarta</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22 years old</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Information System</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>salsasikahita@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Office:</strong> <span>DOKU, PT Nusa Satu Inti Artha</span></li>
                </ul>
              </div>
            </div>
            <br/>
            <h3>Curent Activity</h3>
            <p>
              Right now I'm busy working at a Payment Gateway company in Jakarta while studying at Binus Online Learning majoring in S1 Information Systems. 
              It's been almost 4 years I migrated to Jakarta, whoaa time flies! And I'm studying already in 6th semesters, yay! According to the schedule, 
              I will graduate in the middle of 2023. I hope I can graduate on time~ Aamiin
            </p>
          </div>
        </div>
        </div>

        
    )
}
