import React from 'react'
import logo from '../logo1.svg'
import './Nav.css'
import pop1 from '../assets/maxresdefault.jpg'
import pop2 from '../assets/TIA-logo.png'
import pop3 from '../assets/og-banner-removebg-preview.png'
import pop4 from '../assets/images-removebg-preview (1).png'


function Nav() {
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="nav" style={{backgroundColor: "black"}}> 
      <a className="navbar-brand ml-5 pl-5" href="#0" style={{margin: "10px 10px 10px 10px "}}><img src={logo} alt=""></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active px-4 my-3"><a href="#feature" class="button current">Features</a>
               
            </li>
            <li class="nav-item px-4 my-3"><a href="#0" class="button current">Updates</a>
                
            </li>
            <li class="nav-item px-4 my-3 current">
            <a href="#0" class="button">Contact Us</a>
            </li>
            <li class="nav-item mr-5 my-3" id="ss">
            <a href="#0" class="button1">Start Meeting</a>
            </li>
            </ul>
        </div>

      </nav>
      <section>
          
          <div class="parent1">
            <div class="child2"> 
            <div className="heading"><h1 id="heading" style={{background: "linear-gradient(107.72deg,#1a26c8 -54.49%,#243cff 17.32%,#d62ec0 86.99%,#f37777 151.29%)",WebkitBackgroundClip: "text",backgroundClip: "text", color: "transparent"}}>Meeting <br/> Without Limits</h1><h4 style={{color:"grey",fontWeight:"lighter"}}>Make video conferences engaging for online classrooms <br/> with Huddle 01.<span style={{color: "white",fontWeight: "normal"}}>Talk better. Listen better. Work better.</span></h4></div>
            <div className="py-3"><button className="btn-grad py-3">Start Meeting</button></div>
            <h6 style={{color:"grey",fontWeight:"lighter"}}>A meeting link is all you need. No credit card or installation required!</h6>
            
            </div>
                <div class="child1 py-3"><img src="https://beta.huddle01.com/static/media/LandingGraphic.1d5976ed.webp" className="img-fluid" alt="alt"></img></div></div>

                <div className="container">
                <div className="row py-5 separator" ><h4 className="separator" style={{color: "grey",fontWeight:"normal"}}>Popular companies that featured us</h4></div>
                <div className="row py-5">
                    <div className="col">
                        <img src={pop1} alt="pop1" style={{width: "200px"}}></img>

                    </div>
                    <div className="col">
                    <img src={pop2} alt="pop1" style={{width: "200px"}}></img>
                        
                        </div>
                        <div className="col">
                        <img src={pop3} alt="pop1" style={{width: "200px"}}></img>
                        
                        </div>
                        <div className="col">
                        <img src={pop4} alt="pop1" style={{width: "200px"}}></img>
                        
                        </div>
                        </div>

                </div>


      </section>
            </>
    )
}

export default Nav
