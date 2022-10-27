import ProjectItem from './ProjectItem';
import {ProjectList} from './ProjectList'

const Projects = () => {
  return (
    <div id='projects' className='w-full dark:bg-gray-900' >
      <div className='max-w-[1240px] mx-auto px-2 py-16 '>
        <h2 className='py-4 dark:text-white'>Some of my Projects:</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {ProjectList.map((project)=>{
            return(
                <ProjectItem key={project.id} title={project.title} backgroundImg={project.backgroundImg} source={project.source} skill={project.skill} projectUrl={project.projectUrl} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;