import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ReportCard from "./ReportCard";

export default function ReportForm() {
  const [preview, setPreview] = useState(false);
const [studentInfo, setStudentInfo] = useState({
  name:"",
  batch:"",
  terminal:"",
  written:"",
  spoken:"",
  classTest:"",
  attendance:"",
  discipline:""
})

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setStudentInfo({...studentInfo, [name]:value})
}

const handlePreview = () => {
setPreview(true);
}

  const navigate = useNavigate();
  const handleBoxChange = () => {
    const box1 = document.getElementById("report-box-1");
    const box2 = document.getElementById("report-box-2");
    box1.classList.toggle("hidden");
    box2.classList.toggle("hidden");
  };

  const callAboutPage = async () => {

    // extracting token from cookies
    let token = "";
    const cookies = document.cookie.split(";");
    cookies.forEach((element) => {
      const cookieData = element.split("=");
      cookieData.forEach((e) => {});
      for (let i = 0; i < cookieData.length; i++) {
        const e = cookieData[i];
        if (e === "user") {
          token = cookieData[i + 1];
        }
      }
    });

    // send the token to the server to check is user is authencated of not
    try {
      const res = await fetch("https://oxbridgeserverside.onrender.com/secret", {
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({token:token})
    });
    const data = await res.json();
    if(!data){
      navigate("/singin");
    }
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };


  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, []);

  return (
    <>
   
      {preview?<ReportCard studentInfo={studentInfo}/>:     <div className="report-card-section">  <form>
        <div id="report-box-1" className="box">
          <div className="report-box-1-form">
            <label for="batch-input">Batch</label>
            <input onChange={handleInput} value={studentInfo.batch} type="text" name="batch" id="batch-input" />
            <label for="terminal-input">Terminal</label>
            <input onChange={handleInput} value={studentInfo.terminal} type="text" name="terminal" id="terminal-input" />
          </div>
          <div onClick={handleBoxChange} className="btn-modified">
            Let's Begin
          </div>
        </div>
        <div id="report-box-2" className="box hidden">
          <div className="report-box-1-form">
            <label for="name-input">Student Name</label>
            <input onChange={handleInput} value={studentInfo.name} type="text" name="name" id="name-input" />

            <label for="written-input">Written Marks</label>
            <input onChange={handleInput} value={studentInfo.written} type="text" name="written" id="written-input" />
            <label for="Spoken-input">Spoken Marks</label>
            <input onChange={handleInput} value={studentInfo.spoken} type="text" name="spoken" id="Spoken-input" />
            <label for="class-input">Class Test</label>
            <input onChange={handleInput} value={studentInfo.classTest} type="text" name="classTest" id="class-input" />
            <label for="discipline-input">Get-Up/Discipline</label>
            <input onChange={handleInput} value={studentInfo.discipline} type="text" name="discipline" id="discipline-input" />
            <label for="attendance-input">Attendance Marks</label>
            <input onChange={handleInput} value={studentInfo.attendance} type="text" name="attendance" id="attendance-input" />
          </div>
          <div className="box-2-buttons">
            <div onClick={handleBoxChange} className="btn-modified">
              Back
            </div>
            <div onClick={handlePreview} className="btn-modified">Preview</div>
            
            <div className="btn-modified">send</div>
          </div>
        </div>
      </form></div>}
</>
    
  );
}
