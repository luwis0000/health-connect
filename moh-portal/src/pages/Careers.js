import React from "react";
import Card from "../components/Card";

const positions = [
  { id: 1, title: "Nurse - Gaborone", text: "Full-time, public sector" },
  { id: 2, title: "Lab Technician - Francistown", text: "Contract, 12 months" }
];

export default function Careers() {
  return (
    <div className="page">
      <h2>Careers & Opportunities</h2>
      <div className="card-container">
        {positions.map(p => <Card key={p.id} title={p.title} text={p.text} footer={<button className="btn">Apply</button>} />)}
      </div>
    </div>
  );
}
