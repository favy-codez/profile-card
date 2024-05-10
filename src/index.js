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
        <h1>Ezeliora Godsfavour Oluebubechukwu</h1>
        <p>
          Progressive Frontend developer with an increasing experience in HTML,
          CSS, Bootstrap, Tailwind, JavaScript and ReactJS, with a passion for
          creating visually appealing websites, seeking an opportunity to apply
          my technical skills and knowledge in a professional setting and also
          eager to learn new technologies and gain hands-on experience in
          frontend development.
        </p>
      </div>
    );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="blue" />
      <Skill skill="JAVASCRIPT" emoji="💪" color="orange" />
      <Skill skill="REACT" emoji="💪" color="yellow" />
      <Skill skill="TAILWIND CSS" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props){
    return(
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);