import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject, projects, onSelectProject }) => {
  return (
    <aside className="w-1/3 bg-stone-900 px-8 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>

      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className="w-full text-left px-2 py-2 rounded-sm my-1 text-stone-100 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
