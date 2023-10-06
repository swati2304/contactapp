import React from "react"
import "./contactCard.css"

export default function ContactCard({name, mobile, email, deleteContact}){
    return(
        <div className="contact-card">
            <p className="contact-name m-2">🐼 {name} </p>
            <p className="contact-mobile m-2"> 📱{mobile} </p>
            <p className="contact-email m-2">📧 {email} </p>
            <span className="icon-delete-contact" onClick={()=>{
                deleteContact(mobile);
            }}>
                🗑️
                </span>
        </div>
    )
}