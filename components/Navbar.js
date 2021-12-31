export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-5'>
      <div className=''>
        <img
          src='/assets/logo.svg'
          alt='huddle logo'
          className='w-40 md:w-full'
        />
      </div>
      <button className='text-cstm-primary-light-pink text-2xl border-2 border-cstm-primary-light-pink rounded-full px-8 py-2 text-sm md:text-lg'>
        Try It Free
      </button>
    </nav>
  )
}
