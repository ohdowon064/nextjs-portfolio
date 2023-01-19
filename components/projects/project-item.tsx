import Image from 'next/image';
import Link from 'next/link';

export type ProjectItem = {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  coverUrl: string;
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
  const title = projectItem.fields.Name;
  const description = projectItem.fields.Description;
  const github = projectItem.fields.Github;
  const tags = projectItem.fields.Tags;
  const workPeriod = projectItem.fields.WorkPeriod;
  const coverUrl = projectItem.coverUrl;

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
      <h1>{title}</h1>
      <Image 
        src={coverUrl}
        width="100%"
        height="60%"
      />
      {github != 'Private' ? (
        <Link href={github}>깃허브 바로가기</Link>
      ) : (
        <h1>Private Project</h1>
      )}
      <h3>{description}</h3>
    </div>
  );
}
