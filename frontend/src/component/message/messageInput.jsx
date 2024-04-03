import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import userSendMessages from "../../hooks/userSendMessages";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = userSendMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className='px-4 my-4' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 gr-gray-700 border-gray-600 text-black'
          placeholder='Type Message to Send'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='absolute  inset-y-0 end-0 flex items-center pe-3'>
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}
//Started Code
// import React from "react";
// import { BsSend } from "react-icons/bs";

// export default function MessageInput() {
//   return (
//     <div className='px-4 my-4'>
//       <div className='w-full relative'>
//         <input
//           type='text'
//           className='border text-sm rounded-lg block w-full p-2.5 gr-gray-700 border-gray-600 text-black'
//           placeholder='Type Message to Send'
//         />
//         <button className='absolute  inset-y-0 end-0 flex items-center pe-3'>
//           <BsSend />
//         </button>
//       </div>
//     </div>
//   );
// }
