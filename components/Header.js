export default function Header() {
  return (
    <header className='md:container w-full mx-auto pt-20' role='banner'>
      <nav className='flex justify-between items-center px-5' role='navigation'>
        <div className=''>
          <img
            src='/assets/logo.svg'
            alt='huddle logo'
            className='w-40 md:w-full'
          />
        </div>
        <button className='text-cstm-primary-pink hover:text-cstm-primary-light-pink border-2 border-cstm-primary-pink hover:border-cstm-primary-light-pink rounded-full px-8 py-2 text-sm md:text-lg'>
          Try It Free
        </button>
      </nav>
    </header>
  )
}
