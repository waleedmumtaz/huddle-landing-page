export default function Contact() {
  return (
    <div className='pt-10'>
      <img
        src='/assets/bg-footer-top-desktop.svg'
        alt='curve section'
        className='w-full'
      />
      <div className='bg-cstm-neutral-dark-cyan py-20 px-5 md:px-0'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-40 md:gap-0'>
            <div className='text-white font-open-sans'>
              <img src='/assets/logo-white.svg' alt='logo' />
              <p className='max-w-sm my-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quos, a sunt voluptas aut laudantium pariatur ut consequatur
              </p>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-5'>
                  <img src='/assets/icon-phone.svg' alt='phone icon' />
                  <p>Phone: +1-543-123-4567</p>
                </div>
                <div className='flex items-center gap-5'>
                  <img src='/assets/icon-email.svg' alt='email icon' />
                  <p>example@huddle.com</p>
                </div>
              </div>
              <div className='mt-20 flex items-center gap-5'>
                <img
                  src='/assets/icon-facebook.svg'
                  alt='facebook icon'
                  width='40'
                  height='40'
                  className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'
                />
                <img
                  src='/assets/icon-instagram.svg'
                  alt='instagram icon'
                  width='40'
                  height='40'
                  className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'
                />
                <img
                  src='/assets/icon-twitter.svg'
                  alt='twitter icon'
                  width='40'
                  height='40'
                  className='hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer'
                />
              </div>
            </div>
            <div className='font-open-sans text-white max-w-xl order-first md:order-none'>
              <h3 className='uppercase text-3xl font-bold'>Newsletter</h3>
              <p className='py-10 max-w-sm'>
                To receive tips on how to grow your community, sign up tp our
                weekly newsletter. We'll never send you spam or pass on your
                email address
              </p>
              <form className='flex flex-col md:flex-row gap-5 md:gap-10'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='p-4 md:flex-1 rounded-lg outline-cstm-primary-pink text-black w-full md:w-auto'
                />
                <button
                  type='submit'
                  className='bg-cstm-primary-pink hover:bg-cstm-primary-light-pink text-white font-open-sans font-semibold py-4 md:px-14 rounded-lg w-1/2 md:w-auto self-end'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
