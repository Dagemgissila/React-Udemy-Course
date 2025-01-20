const SelectedProject = ({ project, handleDeleteProject }) => {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2 text-stone-600">
            {project.title}
          </h1>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="text-stone-600 hover:text-stone-950"
          >
            DELETE
          </button>
        </div>
        <p>{project.dueDate}</p>
        <p>{project.description}</p>
      </header>
      TASKS
    </div>
  );
};

export default SelectedProject;
