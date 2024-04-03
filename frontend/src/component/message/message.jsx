import React from "react";
import userConversation from "../../zustand/userConversation";
import { useAuthContext } from "../../context/authContext";
import extractTime from "../../utils/extractTime";
export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = userConversation();
  const formatedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500 " : "";
  const profilePic = fromMe
    ? authUser.profilePicture
    : selectedConversation.profilePicture;

  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt='User Icon' />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formatedTime}
      </div>
    </div>
  );
}

//Started Code
// import React from "react";

// export default function Message() {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//           <img src='#' alt='User Icon' />
//         </div>
//       </div>
//       <div className='chat-bubble text-black bg-blue-500'>Hi What's Up</div>
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
//         12:44
//       </div>
//     </div>
//   );
// }
