import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Huddle Landing Page</title>
      </Head>
      <div className='container mx-auto'>
        <Header />
      </div>
    </>
  )
}
