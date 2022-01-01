export default function FlowingConversations() {
  return (
    <div className='py-20 px-5 md:px-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 place-items-center'>
          <div>
            <img
              src='/assets/illustration-flowing-conversation.svg'
              alt='flowing conversation'
            />
          </div>
          <div className='text-center md:text-left'>
            <h2 className='font-poppins text-3xl md:text-5xl'>
              Flowing Conversations
            </h2>
            <p className='font-open-sans font-semibold text-lg md:text-xl mt-5 md:mt-10 max-w-2xl'>
              Your wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just in time loading for a more natural
              flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
