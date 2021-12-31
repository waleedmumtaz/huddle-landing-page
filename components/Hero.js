export default function Hero() {
  return (
    <section className='container mx-auto flex-1 flex flex-col justify-center items-center px-5 md:px-0'>
      <h1 className='font-poppins text-4xl md:text-6xl text-center'>
        Build The Community Your Fans Will Love
      </h1>
      <p className='font-open-sans text-lg md:text-2xl max-w-3xl text-center my-12'>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className='font-open-sans font-bold text-lg md:text-2xl shadow-lg bg-cstm-primary-pink text-white rounded-full px-16 md:px-32 py-4 md:py-8'>
        Get Started For Free
      </button>
    </section>
  )
}
