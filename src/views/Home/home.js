import "./home.css"
import React, {useState} from "react"

export default function Home(){

    const [contacts, setContancts] = useState([
        {
            name:"Swati",
            mobile:"8459666580",
            email:"swatinimje23@gmail.com"
        },
        {
            name:"Akaksh",
            mobile:"8459666580",
            email:"akakshnimje23@gmail.com"
        },
        {
            name:"Umesh",
            mobile:"8329590949",
            email:"umeshnimje23@gmail.com"
        },
        {
            name:"Aviksha",
            mobile:"8459666580",
            email:"avikshanimje23@gmail.com"
        }
    ]);
    return(
        <div>
            <h1 className="app-title"> 📞Contact App</h1>

            <div className="app-body">
                <div className="contacts-container">
                    <h2 className="sub-heading">Show Contacts</h2>
                </div>
                <div className="contacts-container">
                    <h2 className="sub-heading">Add Contacts</h2>
                </div>
            </div>
        </div>
    )
}
