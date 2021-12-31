export default function FlowingConversations() {
  return (
    <section className='py-20'>
      <div className='container mx-auto'>
        <div className='md:grid md:grid-cols-2 gap-10 place-items-center'>
          <div>
            <img
              src='/assets/illustration-flowing-conversation.svg'
              alt='flowing conversation'
            />
          </div>
          <div>
            <h2 className='font-poppins text-5xl'>Flowing Conversations</h2>
            <p className='font-open-sans font-semibold text-xl mt-10 max-w-2xl'>
              Your wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just in time loading for a more natural
              flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
