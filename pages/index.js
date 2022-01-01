import Head from 'next/head'
import BuildCommunity from '../components/BuildCommunity'
import Contact from '../components/Contact'
import FlowingConversations from '../components/FlowingConversations'
import GrowTogether from '../components/GrowTogether'
import ImageSection from '../components/ImageSection'
import Layout from '../components/Layout'
import Stats from '../components/Stats'
import YourUsers from '../components/YourUsers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Huddle Landing Page</title>
      </Head>
      <Layout>
        <ImageSection />
        <Stats />
        <GrowTogether />
        <FlowingConversations />
        <YourUsers />
        <BuildCommunity />
        <Contact />
      </Layout>
    </>
  )
}
