import Header from './Header'
import Hero from './Hero'

export default function Layout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-[95vh] w-full'>
        <Header />
        <Hero />
      </div>
      <main role='main'>{children}</main>
    </>
  )
}
