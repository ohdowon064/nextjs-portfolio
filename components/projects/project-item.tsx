export type ProjectProps = {
  projectNames: string[];
};

export function ProjectItem({ projectNames }: ProjectProps) {
  return (
    <div className="p-6 bg-slate-400 rounded-md">
      {projectNames.map((projectName, index) => (
        <h1 key={index}>{projectName}</h1>
      ))}
    </div>
  );
}
