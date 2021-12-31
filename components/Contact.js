export default function Contact() {
  return (
    <section className='bg-cstm-neutral-dark-cyan py-20'>
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
          <div></div>
        </div>
      </div>
    </section>
  )
}
