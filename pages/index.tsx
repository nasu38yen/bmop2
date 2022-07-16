import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import { useState, useEffect } from 'react';

const Home = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setMessage(data.text);
    };
    fetchMessage();
  }, []);

  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <div className="card-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id];
          return (
            <SmallCard
              key={project.id}
              Icon={Icon}
              title={project.name}
              slug={project.slug}
            />
          );
        })}
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Home;
