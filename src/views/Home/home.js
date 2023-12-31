import "./home.css"
import ContactCard from "../../components/contactCard/contactCard";
import React, {useEffect, useState} from "react"
import showToast from 'crunchy-toast';

export default function Home(){
    const [contacts, setContancts] = useState([
        {
            name:"Swati",
            email:"swatinimje23@gmail.com",
            mobile:"8459666580"
        },
        {
            name:"Umesh",
            email:"umeshnimje23@gmail.com",
            mobile:"8329590949"
        },
    ]);

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [editIndex, seteditIndex] = useState(-1);
    const [isEditMode, setisEditMode] = useState(false);

    const addContact = ()=>{

        if(!name){
            showToast('Name is required', 'alert', '3000');
            return;
        }
        if(!email){
            showToast('Email is required', 'alert', '3000');
            return;
        }
        if(!mobile){
            showToast('Mobile is required', 'alert', '3000');
            return;
        }
        
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }

        const newContacts = [...contacts, obj];
        setContancts(newContacts);
        saveToLocalStorage(newContacts);

        showToast('Contact added successfully', 'success', 3000);

        setname('');
        setemail('');
        setmobile('');
    }

    const deleteContact = (mobileNumber) => {
        let indexToDelete = -1;

        contacts.forEach((contactDetail, index)=>{
            if(contactDetail.mobile == mobileNumber){
                indexToDelete = index;
            }
        })
        contacts.splice(indexToDelete, 1);
        saveToLocalStorage(contacts);
        setContancts([...contacts]);

        showToast('Contact Delete Successfully', 'success', 3000);
    }

    const saveToLocalStorage = (contacts) => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    const loadFromLocalStorage = () =>{
        const contactsDeta = JSON.parse(localStorage.getItem(contacts));
        if(contactsDeta){
            setContancts(contactsDeta);
        }
    }
     useEffect(()=>{
        loadFromLocalStorage();
     }, []);  
    
    const enableToEditMode = (index) =>{
        const contactDeta = contacts(index);
        setname(contactDeta.name);
        setemail(contactDeta.email);
        setmobile(contactDeta.mobile);
        seteditIndex(index.value);
        setisEditMode (true);
    }

    const editContact = ()=>{
        const obj = {
            name:name,
            email:email,
            mobile: mobile
        }
        contacts.editIndex=obj;
        setContancts([...contacts]);
        saveToLocalStorage(contacts);
        showToast('Contact Delete Successfully', 'success', 3000);
        setname('');
        setemail('');
        setmobile('');
        setisEditMode(false);
    }

    return(
        <div>
            <h1 className="app-title"> 📞Contact App</h1>

            <div className="app-body">
                <div className="contacts-container">
                    <h2 className="sub-heading">Show Contacts</h2>
                    {
                        contacts.map((contacts, index)=>{
                            const {name, email, mobile} = contacts;
                            return( <ContactCard
                                key={index}
                                name={contacts.name} 
                                mobile={contacts.mobile}
                                email={contacts.email}
                                deleteContact={deleteContact}
                                enableToEditMode={enableToEditMode}
                                index={index}/>)
                        })
                    }
                </div>
                <div className="contacts-container">
                    <h2 className="sub-heading">
                    Add Contact</h2>
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
                        onClick={(()=>{
                            isEditMode ? editContact():addContact(); 
                        })}>
                            {isEditMode ? 'Edit Contact':'Add Contact'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
