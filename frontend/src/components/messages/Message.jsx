const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    src=
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
                    
                    />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
            Hi! What's Up??
        </div>
        <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">
            12:42
        </div>
    </div>
  )
}

export default Message
{/* <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
   
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>

      
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div> */}