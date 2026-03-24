import { useState } from "react";
import "./Schoolinfo.css"
export default function Schoolinfo() {
    const [editstatus, setEditstatus] = useState(true);
    const [collegename, setName] = useState("");
    const [course, setCourse] = useState("");
    const [passoutyear, setPassoutyear] = useState("")

    function changeEditstatus() {
        setEditstatus(!editstatus);
    }

    return (
        editstatus ? <Form collegename={collegename} setName={setName} course={course} setCourse={setCourse} passoutyear={passoutyear} setPassoutyear={setPassoutyear} changeEditstatus={changeEditstatus} /> : <Card collegename={collegename} course={course} passoutyear={passoutyear} changeEditstatus={changeEditstatus} />
    )



}
function Form({ collegename, setName, changeEditstatus, course, setCourse, passoutyear, setPassoutyear }) {
    return (
        <>
            <div>
                <div className="hd">College Details</div>
                <div className="scontainer">

                    <div className="indfield">
                        <label htmlFor="collegename" className="ftitle">College:</label>
                        <input type="text" id="#collegename" value={collegename} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="course" className="ftitle">Course:</label>
                        <input type="text" id="#course" value={course} onChange={(e) => setCourse(e.target.value)} />
                    </div>
                    <div className="indfield">
                        <label htmlFor="passoutyear" className="ftitle">Pass Out Year</label>
                        <input type="text" id="#passoutyear" value={passoutyear} onChange={(e) => setPassoutyear(e.target.value)} />
                    </div>
                    <button onClick={changeEditstatus}>Finish</button>
                </div>
            </div>

        </>)
}
function Card({ collegename, changeEditstatus, course, passoutyear }) {
    return (<>
        <div>
            <div className="hd">College Details</div>
            <div className="scontainer">
                <div className="indfield">
                    <div className="ftitle">College:</div>
                    <div>{collegename}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle">Course:</div>
                    <div>{course}</div>
                </div>
                <div className="indfield">
                    <div className="ftitle">Pass out Year:</div>
                    <div>{passoutyear}</div>
                </div>
                <button onClick={changeEditstatus}>Edit</button>
            </div>
        </div>
    </>)
}
