### During the course of these project, here are some of the the things I learnt
1. Props - 
Props (short for "properties") are a fundamental concept in React that allow you to pass data from one component to another. They are similar to function arguments in JavaScript. Props are read-only, meaning that a component receiving props cannot modify them. They are passed down from parent to child components and are immutable within the child component. You can pass any type of data as props, including strings, numbers, arrays, objects, functions, and even React elements. This flexibility allows you to build complex UIs by composing smaller, reusable components that receive data and behavior through props.

```
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

```

2. **Destructure props-** Destructuring props is a convenient technique in React to extract specific properties directly from the props object. It can make your code cleaner and more readable by reducing the verbosity of accessing props.

```
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}
```

3. **Conditional Rendering-** 