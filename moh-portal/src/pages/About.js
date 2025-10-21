import React from "react";
import Card from "../components/Card";

export default function About() {
  return (
    <div className="page">
      <h2>About the Ministry of Health</h2>
      <p>
        The Ministry of Health is responsible for the stewardship of the national health system, including policy, services, and public health programs.
      </p>

      <div className="card-container">
        <Card title="Mission" text="To provide equitable, accessible, and quality health services for all citizens." />
        <Card title="Vision" text="A healthy nation with resilient health systems." />
      </div>
    </div>
  );
}
