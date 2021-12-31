export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <div className=''>
        <img src='/assets/logo.svg' alt='huddle logo' />
      </div>
      <button className='text-cstm-primary-light-pink text-2xl border-2 border-cstm-primary-light-pink rounded-full px-8 py-2'>
        Try It Free
      </button>
    </nav>
  )
}
