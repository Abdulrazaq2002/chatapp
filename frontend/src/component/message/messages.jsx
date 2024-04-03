import React, { useEffect, useRef } from "react";
import Message from "./message";
import userGetMessages from "../../hooks/userGetMessages";
import MessageSkeleton from "../skeletons/messageSkeleton";
import useListenMessages from "../../hooks/userListenMessages";

export default function Messages() {
  const { messages, loading } = userGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
      {/* <Message /> */}
    </div>
  );
}
//Started Code
// import React from "react";
// import Message from "./message";

// export default function Messages() {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message />
//     </div>
//   );
// }
