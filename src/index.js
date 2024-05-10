import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
    return(
    <div>
        <img src="./headshot.JPG" alt=""/>
    </div>
    )
}

function Intro(){
    return (
      <div>
        <h1>Jonas Schmedtmann</h1>
        <p>
          Full-stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portuguese sun at the beach.
        </p>
      </div>
    );
}

function SkillList() {
  return <div className="skill-list"></div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);