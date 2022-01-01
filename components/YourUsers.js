export default function YourUsers() {
  return (
    <section className='py-20 px-5 md:px-0'>
      <img
        src='/assets/bg-section-top-desktop-2.svg'
        alt='curve section'
        width='100%'
      />
      <div className='bg-cstm-neutral-pale-blue py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 place-items-center'>
            <div className='order-last md:order-none text-center md:text-left'>
              <h2 className='font-poppins text-3xl md:text-5xl'>Your Users</h2>
              <p className='font-open-sans font-semibold text-lg md:text-xl mt-5 md:mt-10 max-w-2xl'>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, one signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
            <div>
              <img src='/assets/illustration-your-users.svg' alt='your users' />
            </div>
          </div>
        </div>
      </div>
      <img
        src='/assets/bg-section-bottom-desktop-2.svg'
        alt='curve section'
        width='100%'
      />
    </section>
  )
}
