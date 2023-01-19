type ProjectNameProps = {
  projectName: string;
};

export function ProjectItem({ projectName }: ProjectNameProps) {
  return (
    <div className="p-6 bg-slate-400 rounded-md">
      <h1>{projectName}</h1>
    </div>
  );
}
