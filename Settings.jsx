import React, { useState } from "react";
import post from "../assets/post_FILL0_wght400_GRAD0_opsz24.svg";
import photo from "../assets/image_FILL0_wght400_GRAD0_opsz24.svg";
import save from "../assets/bookmark_FILL0_wght400_GRAD0_opsz24.svg";
import "../settings.css";

function Settings(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
    <>
        <div className="container">
        <div className="bloc-tabs">
            
            <button 
                className={toggleState === 1 ? "tabs active-tabs" : "bloc-tabs"}
                onClick={() => toggleTab(1)}
            >   <img src={post} alt="" />
                Posts</button>
            <button 
                     className={toggleState === 2 ? "tabs active-tabs" : "bloc-tabs"}
                onClick={() => toggleTab(2)}
            >   <img src={photo} alt="" />
            Images</button>
            <button 
                     className={toggleState === 3 ? "tabs active-tabs" : "bloc-tabs"}
                onClick={() => toggleTab(3)}
            >   <img src={save} alt="" />
            Saved</button>
        </div>

        <div className="content-tabs">
            <div 
                className={toggleState === 1 ? "content active-content" : "content"}
            >
              
                <h3> Posts</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa possimus maxime quam nostrum dignissimos molestias deleniti magni? Tempora, eos. Optio nam sint blanditiis. Vero non nihil ratione placeat totam?</p>
            </div>
            <div 
            className={toggleState === 2 ? "content active-content" : "content"}
            >
                <h3> images</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae sint eos adipisci sit quod, dicta nulla. Ab labore architecto perferendis et dolorem nesciunt. Sed debitis error cupiditate veritatis quod quis.</p>
            </div>
            <div 
                className={toggleState === 3 ? "content active-content" : "content"}
            >
                <h3> Saved</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid ipsa repudiandae cum officia ad fugiat, cupiditate tempora quod fuga ex at doloribus saepe rerum molestiae, quas sed facilis veniam.</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Settings;