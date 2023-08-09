import MainLayout from "./Layout/MainLayout";
import "./Skills.css";

//Used props for creating muliple skills

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive web applications using modern technologies.',
    },
    {
      title: 'JavaScript',
      description: 'Strong understanding of JavaScript',
    },
    {
      title: 'React',
      description: 'Proficient in React and building reusable components.',
    },

    {
      title: '.net',
      description: 'Good knowledge on Oops concepts .',
    },

    {
      title: 'Java',
      description: 'Proficient in Java .',
    },

    {
      title: 'Backend',
      description: 'Good knowledge on Backend frameworks.',
    },
    // Add more skills here
  ];



    return (
    <div>
        <MainLayout>
        <div className="skills-page">
      <h1>Skills</h1>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
        </MainLayout>
    </div>
    )

};

 export default Skills;  
