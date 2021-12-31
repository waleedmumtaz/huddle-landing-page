import Head from 'next/head'
import BuildCommunity from '../components/BuildCommunity'
import Contact from '../components/Contact'
import FlowingConversations from '../components/FlowingConversations'
import GrowTogether from '../components/GrowTogether'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageSection from '../components/ImageSection'
import Stats from '../components/Stats'
import YourUsers from '../components/YourUsers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Huddle Landing Page</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='flex flex-col min-h-[95vh]'>
        <Header />
        <Hero />
      </div>
      <ImageSection />
      <Stats />
      <GrowTogether />
      <FlowingConversations />
      <YourUsers />
      <BuildCommunity />
      <Contact />
    </>
  )
}
