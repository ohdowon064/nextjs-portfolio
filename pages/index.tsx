import Head from 'next/head'
import Layout from '@/components/layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>오도원의 포트폴리오</title>
        <meta name="description" content="오늘도 즐거운 개발인생!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>홈 입니다.</h1>
    </Layout>
  )
}
