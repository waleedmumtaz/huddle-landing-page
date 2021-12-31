export default function Contact() {
  return (
    <section className='pt-10'>
      <img
        src='/assets/bg-footer-top-desktop.svg'
        alt='curve section'
        width='100%'
      />
      <div className='bg-cstm-neutral-dark-cyan py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
            <div className='text-white font-open-sans'>
              <img src='/assets/logo-white.svg' alt='logo' className='' />
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
                  width='40px'
                  height='40px'
                />
                <img
                  src='/assets/icon-instagram.svg'
                  alt='instagram icon'
                  width='40px'
                  height='40px'
                />
                <img
                  src='/assets/icon-twitter.svg'
                  alt='twitter icon'
                  width='40px'
                  height='40px'
                />
              </div>
            </div>
            <div className='font-open-sans text-white max-w-xl'>
              <h3 className='uppercase text-3xl font-bold'>Newsletter</h3>
              <p className='py-10 max-w-sm'>
                To receive tips on how to grow your community, sign up tp our
                weekly newsletter. We'll never send you spam or pass on your
                email address
              </p>
              <div className='flex gap-10'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='p-4 flex-1 rounded-lg outline-cstm-primary-pink text-black'
                />
                <button className='bg-cstm-primary-pink text-white font-open-sans font-semibold px-14 rounded-lg'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
