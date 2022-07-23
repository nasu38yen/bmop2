import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
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
      <div>
        <Link href="/blog/last">
          <a>Go to lastBlog</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
