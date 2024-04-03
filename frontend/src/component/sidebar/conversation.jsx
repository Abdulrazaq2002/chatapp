import React from "react";
import userConversation from "../../zustand/userConversation";
import { userSocketContext } from "../../context/socketContext";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = userConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = userSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-z py-1 cursor-pointor ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePicture} alt='user image' />
          </div>
        </div>
        <div className=' flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-old text-black'>{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  );
}

//Started Code
// import React from "react";

// export default function Conversation() {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-z py-1 cursor-pointor'>
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img
//               src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
//               alt='user image'
//             />
//           </div>
//         </div>
//         <div className=' flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-old text-black'>John Doe</p>
//             <span className='text-xl'>@</span>
//           </div>
//         </div>
//       </div>
//       <div className='divider my-0 py-0 h-1'></div>
//     </>
//   );
// }
