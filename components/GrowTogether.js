export default function GrowTogether() {
  return (
    <div className='py-20 px-5 md:px-0'>
      <img
        src='/assets/bg-section-top-desktop-1.svg'
        alt='curve section'
        className='w-full'
      />
      <div className='bg-cstm-neutral-pale-blue py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 place-items-center'>
            <div className='order-last md:order-none text-center md:text-left'>
              <h2 className='font-poppins text-3xl md:text-5xl'>
                Grow Together
              </h2>
              <p className='font-open-sans font-semibold text-lg md:text-xl mt-5 md:mt-10 max-w-2xl'>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insighful conversations
                you miss out on with a feedback form.
              </p>
            </div>
            <div>
              <img
                src='/assets/illustration-grow-together.svg'
                alt='grow together'
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src='/assets/bg-section-bottom-desktop-1.svg'
        alt='curve section'
        className='w-full'
      />
    </div>
  )
}
