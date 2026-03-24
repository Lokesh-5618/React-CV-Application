import { useState } from "react";
import "./Practicalexperience.css"
export default function Practicalexperience() {
    const [editstatus, setEditstatus] = useState(true);
    const [companyname, setName] = useState("");
    const [position, setPosition] = useState("");
    const [responsiblities, setResponsiblities] = useState("")
    const [fromdate, setFromdate] = useState("")
    const [todate, setTodate] = useState("")


    function changeEditstatus() {
        setEditstatus(!editstatus);
    }

    return (
        editstatus ? <Form companyname={companyname} setName={setName} position={position} setPosition={setPosition} responsiblities={responsiblities} setResponsiblities={setResponsiblities} fromdate={fromdate} setFromdate={setFromdate} todate={todate} setTodate={setTodate} changeEditstatus={changeEditstatus} /> : <Card companyname={companyname} position={position} responsiblities={responsiblities} fromdate={fromdate} todate={todate} changeEditstatus={changeEditstatus} />
    )



}
function Form({ companyname, setName, changeEditstatus, position, setPosition, responsiblities, setResponsiblities, fromdate, setFromdate, todate, setTodate }) {
    return (
        <>
            <div>
                <div className="hd">Practical Experience</div>
                <div className="pcontainer">

                    <div className="indfield">
                        <label htmlFor="companyname" className="ftitle">Company Name:</label>
                        <input type="text" id="#companyname" value={companyname} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="position" className="ftitle">Position:</label>
                        <input type="text" id="#position" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="responsiblities" className="ftitle">Responsiblities:</label>
                        <input type="text" id="#responsiblities" value={responsiblities} onChange={(e) => setResponsiblities(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="fromdate" className="ftitle">Worked From: </label>
                        <input type="text" id="#fromdate" value={fromdate} onChange={(e) => setFromdate(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="todate" className="ftitle">Worked Till: </label>
                        <input type="text" id="#todate" value={todate} onChange={(e) => setTodate(e.target.value)} />
                    </div>
                    <button onClick={changeEditstatus}>Finish</button>
                </div>
            </div>

        </>)
}
function Card({ companyname, changeEditstatus, position, responsiblities, fromdate, todate }) {
    return (<>
        <div>
            <div className="hd">Practical Experience</div>
            <div className="pcontainer">
                <div className="indfield">
                    <div className="ftitle"> Company Name:</div>
                    <div>{companyname}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle"> Position:</div>
                    <div>{position}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle"> Responsiblities:</div>
                    <div>{responsiblities}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle"> Worked From:</div>
                    <div>{fromdate}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle"> Worked Till:</div>
                    <div>{todate}</div>
                </div>
                <button onClick={changeEditstatus}>Edit</button>
            </div>
        </div>
    </>)
}
