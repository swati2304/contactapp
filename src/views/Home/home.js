import "./home.css"
import ContactCard from "../../components/contactCard/contactCard";
import React, {useState} from "react"
import showToast from 'crunchy-toast';

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

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');

    const addContact = ()=>{
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }

        setContancts([...contacts, obj]);

        showToast('Contact added successfully', 'success', 3000);

        setname('');
        setemail('');
        setmobile('');
    }

    return(
        <div>
            <h1 className="app-title"> 📞Contact App</h1>

            <div className="app-body">
                <div className="contacts-container">
                    <h2 className="sub-heading">Show Contacts</h2>
                    {
                        contacts.map((contacts, index)=>{
                            const {name, mobile, email}= contacts;
                            return( <ContactCard key={index}
                                name={contacts.name} 
                                mobile={contacts.mobile}
                                email={contacts.email}/>)
                        })
                    }
                </div>
                <div className="contacts-container">
                    <h2 className="sub-heading">Add Contacts</h2>
                    <form>
                        <input type="text" 
                        placeholder="Name"  
                        className="user-input"
                        onChange={(e)=>{
                            setname(e.target.value)
                        }}
                        value={name}/>
                        
                        <input type="email"
                        placeholder="Email"
                        className="user-input"
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }}
                        value={email}/>
                        
                        <input type="text" 
                        placeholder="Mobile" 
                        className="user-input"
                        onChange={(e)=>{
                            setmobile(e.target.value)
                        }}
                        value={mobile}/>
                        
                        <button type="button" className="btn-add-contact"
                        onClick={addContact}>
                        Add Contact</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
