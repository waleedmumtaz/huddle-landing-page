export default function Stats() {
  return (
    <section className='container mx-auto py-40'>
      <div className='grid grid-cols-2 place-items-center'>
        <div>
          <img src='/assets/icon-communities.svg' alt='communities icon' />
          <p className='font-open-sans font-bold text-8xl my-5'>1.4k+</p>
          <p className='font-open-sans text-2xl text-gray-400'>
            Communities Formed
          </p>
        </div>
        <div>
          <img src='/assets/icon-messages.svg' alt='messages icon' />
          <p className='font-open-sans font-bold text-8xl my-5'>2.7m+</p>
          <p className='font-open-sans text-2xl text-gray-400'>Messages Sent</p>
        </div>
      </div>
    </section>
  )
}
