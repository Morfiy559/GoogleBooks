import React from "react";
import image from '../../../assets/images/Preloader.gif';
import './Preloader.css';
let Preloader = (props) =>{
    return(
        <div id='Preloader-container'>
            <img id='Preloader' src={image} alt="Крутилка"/>
        </div>
    )
}
export default Preloader;