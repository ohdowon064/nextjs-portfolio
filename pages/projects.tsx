import Layout from '@/components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '@/config/index';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>오도원의 포트폴리오</title>
        <meta name="description" content="오늘도 즐거운 개발인생!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
        <h1>프로젝트</h1>
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
    body: JSON.stringify({ page_size: 100 }),
  };

  fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return {
    props: {}, // will be passed to the page component as props
  };
}
