import { useState } from "react";
import "./Generalinfo.css";


export default function Generalinfo() {
    const [editstatus, setEditstatus] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("")

    function changeEditstatus() {
        setEditstatus(!editstatus);
    }

    return (
        editstatus ? <Form name={name} setName={setName} email={email} setEmail={setEmail} phoneno={phoneno} setPhoneno={setPhoneno} changeEditstatus={changeEditstatus} /> : <Card name={name} email={email} phoneno={phoneno} changeEditstatus={changeEditstatus} />
    )



}
function Form({ name, setName, changeEditstatus, email, setEmail, phoneno, setPhoneno }) {
    return (
        <>
            <div>
                <div className="hd">General Information</div>
                <div className="gcontainer">

                    <div className="indfield">
                        <label htmlFor="name" className="ftitle">Name:</label>
                        <div className="fvalue"><input type="text" id="#name" value={name} onChange={(e) => setName(e.target.value)} /></div>
                    </div>
                    <div className="indfield">
                        <label htmlFor="email" className="ftitle">Email:</label>
                        <div className="fvalue"><input type="email" id="#email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    </div>
                    <div className="indfield">
                        <label htmlFor="phoneno" className="ftitle">Phone No:</label>
                        <div className="fvalue"><input type="text" id="#phoneno" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} /></div>
                    </div>
                    <button onClick={changeEditstatus}>Finish</button>
                </div>
            </div>


        </>)
}
function Card({ name, changeEditstatus, email, phoneno }) {
    return (<>
        <div>
            <div className="hd">General Information</div>


            <div className="gcontainer">
                <div className="indfield">
                    <div className="ftitle">Name: </div>
                    <div className="fvalue">{name}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle">Email: </div>
                    <div className="fvalue">{email}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle">Phone No: </div>
                    <div className="fvalue">{phoneno}</div>
                </div>
                <button onClick={changeEditstatus}>Edit</button>
            </div>
        </div>
    </>)
}
