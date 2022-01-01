import Header from './Header'
import Hero from './Hero'

export default function Layout({ children }) {
  return (
    <>
      <header className='flex flex-col min-h-[95vh] w-full'>
        <Header />
        <Hero />
      </header>
      <main>{children}</main>
    </>
  )
}
