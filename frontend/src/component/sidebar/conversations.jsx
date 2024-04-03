import React from "react";
import Conversation from "./conversation";
import userGetConversation from "../../hooks/useGetConversation";

export default function Conversations() {
  const { loading, conversation } = userGetConversation();
  console.log("Conversation : ", conversation);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* {conversation.map({conversation}=>{
        <Conversation
        key={conversation._id}
        conversation={conversation}
        />
  ))} */}
      {conversation.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : null}
    </div>
  );
}
