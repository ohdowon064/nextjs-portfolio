import Layout from '@/components/layout';
import Head from 'next/head';

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
