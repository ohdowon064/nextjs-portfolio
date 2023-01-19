import Layout from '@/components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '@/config/index';
import { ProjectItem } from '@/components/projects/project-item';

type ProjectItems = {
  projectItems: ProjectItem[];
};

export default function Projects({ projectItems }: ProjectItems) {
  return (
    <Layout>
      <Head>
        <title>오도원의 포트폴리오</title>
        <meta name="description" content="오늘도 즐거운 개발인생!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
        <h1>총 프로젝트: {projectItems.length} </h1>
        {projectItems.map((projectItem, index) => (
          <ProjectItem key={index} projectItem={projectItem}></ProjectItem>
        ))}
      </section>
    </Layout>
  );
}

// once at build time
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options,
  );

  const projects = await res.json();

  const projectItems: ProjectItem[] = projects.results.map((project: any) => {
    return {
      id: project.id,
      url: project.url,
      createdAt: project.created_time,
      updatedAt: project.last_edited_time,
      coverUrl: project.cover?.external?.url || project.cover?.file.url || null,
      icon: project.icon?.emoji || null,
      fields: {
        Tags:
          project.properties.Tags.multi_select.map((tag: any) => {
            return { name: tag.name, color: tag.color };
          }) || [],
        Description: project.properties.Description.rich_text[0].plain_text,
        WorkPeriod: {
          start: project.properties.WorkPeriod.date?.start || null,
          end: project.properties.WorkPeriod.date?.end || null,
        },
        Github: project.properties.Github.url || 'Private',
        Name: project.properties.Name.title[0].plain_text,
      },
    };
  });

  console.log(projectItems);

  return {
    props: { projectItems }, // will be passed to the page component as props
  };
}
