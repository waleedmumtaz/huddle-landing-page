export default function Stats() {
  return (
    <div className='max-w-[18rem] md:max-w-none container mx-auto py-40'>
      <div className='md:grid md:grid-cols-2 md:place-items-center'>
        <div className='flex flex-col justifiy-center items-center md:flex-none'>
          <img
            src='/assets/icon-communities.svg'
            alt='communities icon'
            className='self-start'
          />
          <p className='font-open-sans font-bold text-8xl my-5'>1.4k+</p>
          <p className='font-open-sans text-2xl text-gray-400'>
            Communities Formed
          </p>
        </div>
        <div className='flex flex-col justifiy-center items-center md:flex-none my-20 md:my-0'>
          <img
            src='/assets/icon-messages.svg'
            alt='messages icon'
            className='self-start'
          />
          <p className='font-open-sans font-bold text-8xl my-5'>2.7m+</p>
          <p className='font-open-sans text-2xl text-gray-400'>Messages Sent</p>
        </div>
      </div>
    </div>
  )
}
