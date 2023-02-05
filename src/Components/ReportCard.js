import React from "react";
import logo from "../images/logo.png";

export default function ReportCard(props) {
  const {
    name,
    batch,
    terminal,
    written,
    spoken,
    classTest,
    attendance,
    discipline,
  } = props.studentInfo;
  const total = parseInt(written) + parseInt(spoken) + parseInt(classTest) + parseInt(attendance) + parseInt(discipline);
  const percentage = (total/250)*100

  return (
    <div className="report-card-container">
      <div className="report-card-subcontainer">
        <div className="report-card-sub-container-outline">
          <div className="date-grid">
            <div className="report-date">Date 13-jan-2023</div>

            <img src={logo} alt="fjsaklfjsjal" />
          </div>
          <div className=" report-title">REPRORT CARD</div>
          <div className="report-student-info">
            <div className="info-name">
              Name : <span>{name}</span>{" "}
            </div>
            <div className="sub-info">
              <div className="info-batch">
                Batch : <span>{batch}</span>{" "}
              </div>
              <div className="info-terminal">
                Terminal : <span>{terminal}</span>{" "}
              </div>
            </div>
          </div>
          <div className="grid-row report-marks-columns">
            <div className="marks-row">
              <div className="marks-column">Written</div>
              <div className="marks-column">
                <span>{written}</span> / 100
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Spoken</div>
              <div className="marks-column">
                <span>{spoken}</span> / 100
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Class Test</div>
              <div className="marks-column">
                <span>{classTest}</span> / 20
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Attendance</div>
              <div className="marks-column">
                <span>{attendance}</span> / 20
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Get-up/Discipline</div>
              <div className="marks-column">
                <span>{discipline}</span> / 10
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Total</div>
              <div className="marks-column">
                <span>{total}</span> / 250
              </div>
            </div>
            <div className="marks-row">
              <div className="marks-column">Percentage</div>
              <div className="marks-column">
                <span>{percentage}</span> / 100
              </div>
            </div>
          </div>
          <div className="signature-row">
            <div className="signature-column">Parent's signature</div>
            <div className="signature-column">Teacher's signature</div>
            <div className="signature-column">Director's signature</div>
          </div>
          <div className="address-row">
            H.O. : Swarajpuri Road, Gaya - 823001. Ph. : 0631-2223317
          </div>
        </div>
      </div>
    </div>
  );
}
