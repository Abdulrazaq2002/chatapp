import React from "react";
import Slidebar from "../../component/sidebar/slidebar";
import MessagesContainer from "../../component/message/messagesContainer";

export default function Home() {
  return (
    <div className='flex md:h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Slidebar />
      <MessagesContainer />
    </div>
  );
}
