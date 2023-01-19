import Layout from '@/components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '@/config/index';
import {Project, ProjectProps} from '@/components/projects/project';

interface Project {
  id: string;
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
  };
}



export default function Projects({ projectNames }: ProjectProps) {
  console.log(projectNames);

  return (
    <Layout>
      <Head>
        <title>오도원의 포트폴리오</title>
        <meta name="description" content="오늘도 즐거운 개발인생!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
        <h1>총 프로젝트: {projectNames.length} </h1>
        <Project projectNames={projectNames}></Project>
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

  const projectNames = projects.results.map(
    (project: Project) => project.properties.Name.title[0].plain_text,
  );

  return {
    props: { projectNames }, // will be passed to the page component as props
  };
}
