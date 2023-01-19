import Link from 'next/link';

export type ProjectItem = {
  id: string;
  url: string;
  created_time: Date;
  last_edited_time: Date;
  cover_url: string;
  icon?: string;
  fields: {
    Tags: {
      name: string;
      color: string;
    }[];
    Description: string;
    WorkPeriod: {
      start?: Date;
      end?: Date;
    };
    Github: string;
    Name: string;
  };
};

type ProjectProps = {
  projectItem: ProjectItem;
};

export function ProjectItem({ projectItem }: ProjectProps) {
  return (
    <div className="p-6 m-3 bg-slate-700 rounded-md">
      <h1>{projectItem.fields.Name}</h1>
      {projectItem.fields.Github != 'Private' ? (
        <Link href={projectItem.fields.Github}>깃허브 바로가기</Link>
      ) : (
        <h1>프라이빗 프로젝트</h1>
      )}
    </div>
  );
}
