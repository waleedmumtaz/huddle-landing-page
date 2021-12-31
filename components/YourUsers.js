export default function YourUsers() {
  return (
    <section className='bg-cstm-neutral-pale-blue py-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-10 place-items-center'>
          <div>
            <h2 className='font-poppins text-5xl'>Your Users</h2>
            <p className='font-open-sans font-semibold text-xl mt-10 max-w-2xl'>
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
    </section>
  )
}
