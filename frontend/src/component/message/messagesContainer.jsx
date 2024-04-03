import React, { useEffect } from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import { TiMessages } from "react-icons/ti";
import userConversation from "../../zustand/userConversation";
import { useAuthContext } from "../../context/authContext";

export default function MessagesContainer() {
  const { selectedConversation, setSelectedConversation } = userConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>
            <span className='text-guy-900 font-bold'>
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

function NoChatSelected() {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
}

//Started Code
// import React from "react";
// import Messages from "./messages";
// import MessageInput from "./messageInput";
// import { TiMessages } from "react-icons/ti";

// export default function MessagesContainer() {
//   const noChatSelected = true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       {noChatSelected ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span>
//             <span className='text-guy-900 font-bold'>John Doe</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   );
// }

// function NoChatSelected() {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome John Doe</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   );
// }
