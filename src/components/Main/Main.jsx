import React from "react";
import './Main.css'
import { assets } from "../../assets/assets";

const Main = () => {
    return(
       <div className="main">
        <div className="nav">
            <p> Ritankar AI </p>
            <img src = {assets.user_icon} alt=" "></img>

        </div>
        <div className="main-container">
            <div className="greet">
                <p>
                    <span>Hello, User</span></p>
                    <p>Tell me bro, how can Ritankar AI help you today?</p>
                
            </div>

            <div className="cards">
                <div className="card">
                    <p>Briefly speak about this project</p>
                    <img src ={assets.compass_icon} alt =" "/>
                </div>
                <div className="card">
                    <p>Briefly summarize about the socials of the creator</p>
                    <img src ={assets.compass_icon} alt =" "/>
                </div>
                <div className="card">
                    <p>Briefly summarize about the creator of this project</p>
                    <img src ={assets.compass_icon} alt =" "/>
                </div>
                <div className="card">
                    <p>Briefly summarize about the achievements of the creator</p>
                    <img src ={assets.compass_icon} alt =" "/>
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt"/>
                    <div>
                        <img src = {assets.gallery_icon}/>
                        <img src = {assets.mic_icon}/>
                        <img src = {assets.send_icon}/>
                    </div>
                </div>
                <div className="bottom-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti eaque dicta dolor porro soluta dignissimos? Obcaecati cumque hic, odio nobis atque amet est accusantium architecto aliquam quam perspiciatis autem!</p>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Main