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
      <a className="navbar-brand ml-lg-5 pl-lg-5 ml-xs-0 pl-xs-0" href="#0" style={{margin: "10px 10px 10px 10px "}}><img src={logo} alt=""></img></a>
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
          
          <div className="parent1">
            <div className="child2"> 
            <div className="heading"><h1 id="heading" style={{background: "linear-gradient(107.72deg,#1a26c8 -54.49%,#243cff 17.32%,#d62ec0 86.99%,#f37777 151.29%)",WebkitBackgroundClip: "text",backgroundClip: "text", color: "transparent"}}>Meeting <br className="break"/> Without Limits</h1><h4 className="mx-xs-3 mx-sm-3" style={{color:"grey",fontWeight:"lighter"}} id="h4">Make video conferences engaging for online classrooms <br/> with Huddle 01. <br className="break-phone"/><span className="mx-xs-auto mx-sm-auto" style={{color: "white",fontWeight: "400",textAlign: "center"}}>Talk better. Listen better. Work better.</span></h4></div>
            <div className="py-3"><button className="btn-grad py-3 mx-xs-5 mr-sm-auto">Start Meeting</button></div>
            <h6 style={{color:"grey",fontWeight:"lighter"}}>A meeting link is all you need. No credit card or installation required!</h6>
            
            </div>
                <div class="child1 py-3 mr-5 py-xs-1 mr-xs-0 py-sm-1 ml-xs-auto mr-xs-auto"><img src="https://beta.huddle01.com/static/media/LandingGraphic.1d5976ed.webp" className="img-fluid img1" alt="alt"></img></div></div>

                <div className="container">
                <div className="row py-5 separator py-xs-0" ><h4 className="separator mx-xs-5" style={{color: "grey",fontWeight:"normal",alignItems:"center"}}>Popular companies that featured us</h4></div>
                <div className="row py-5 mx-xs-auto">
                    <div className="col mx-xs-5 ">
                        <img src={pop1} alt="pop1" style={{width: "200px"}} className="img3 mx-xs-auto"></img>

                    </div>
                    <div className="col">
                    <img src={pop2} alt="pop1" style={{width: "200px"}} className=" img3 mx-xs-auto"></img>
                        
                        </div>
                        <div className="col">
                        <img src={pop3} alt="pop1" style={{width: "200px"}} className=" img3 mx-xs-auto"></img>
                        
                        </div>
                        <div className="col">
                        <img src={pop4} alt="pop1" style={{width: "200px"}} className=" img3 mx-xs-auto"></img>
                        
                        </div>
                        </div>

                </div>
            </section>
            </>
    )
}

export default Nav
