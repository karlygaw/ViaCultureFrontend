import React, { useState, useEffect } from 'react';

const FloatingChatButton = ({ nationId }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Start a chat with Kazakh' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [nationName, setNationName] = useState('');

  // Fetch nation name by id
  useEffect(() => {
    const fetchNationName = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/nations/${nationId}`);
        const data = await response.json();
        console.log('Response from server:', data);

        if (data.name) {
          setNationName(data.name);
        } else {
          console.error('No name found in response');
        }
      } catch (error) {
        console.error('Error fetching nation data:', error);
      }
    };

    fetchNationName();
  }, [nationId]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setIsChatStarted(false);
    setMessages([{ sender: 'bot', text: `Start a chat with ${nationName || 'the Nation'}` }]);
  };

  const startChat = () => {
    setIsChatStarted(true);
    setMessages([
      { sender: 'bot', text: 'Hi! What would you like to ask?' }
    ]);
  };

  const handleSend = async () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputValue }]);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/gemini-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nation_id: nationId,
            message: inputValue,
          }),
        });
        const data = await response.json();

        if (data.response) {
          setMessages([...messages, { sender: 'user', text: inputValue }, { sender: 'bot', text: data.response }]);
        } else {
          setMessages([...messages, { sender: 'bot', text: 'Error: ' + data.error }]);
        }
      } catch (error) {
        setMessages([...messages, { sender: 'bot', text: 'Connection error occurred.' }]);
      }

      setInputValue('');
    }
  };

  const handleTagClick = (tag) => {
    setInputValue(tag);
  };

  return (
    <>
      {/* Chat Button */}
      <div
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-white p-3 rounded-full shadow-lg cursor-pointer"
        onClick={handleChatToggle}
      >
        <img
          src="/nations/batyr.png"
          alt="Nation"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="bg-[#1977BD] p-2 rounded-full">
          {isChatOpen ? (
            <img
              src="/nations/close.png"
              alt="Close"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <img
              src="/nations/message.png"
              alt="Message"
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-[320px] lg:w-[400px] h-[450px] lg:h-[500px] bg-white shadow-2xl rounded-xl flex flex-col p-4">
          <h2 className="text-xl font-bold mb-2 text-[#1977BD]">
            Chat with {nationName || 'the Nation'}
          </h2>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-2 space-y-2 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === 'bot'
                    ? 'bg-gray-200 text-black self-start w-[20rem]' // Bot message left
                    : 'bg-[#1977BD] text-white self-end w-[20rem]' // User message right
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Tags */}
          {!isChatStarted && (
            <button
              onClick={startChat}
              className="w-full bg-[#1977BD] text-white py-2 rounded-lg font-semibold mb-2 hover:bg-[#145A86] transition"
            >
              Start Chat
            </button>
          )}

          {isChatStarted && (
            <>
              {/* Suggested Questions */}
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  `Tell me about ${nationName || 'the Nation'} people`,
                  `What traditional foods of ${nationName || 'the Nation'} people?`,
                  `Facts about ${nationName || 'the Nation'} people`
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTagClick(tag)}
                    className="bg-gray-100 px-3 py-1 rounded-full text-xs hover:bg-gray-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Input + Send Button */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
<button
  onClick={handleSend}
  className="bg-[#1977BD] p-2 rounded-full hover:bg-[#145A86] transition flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>


              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
