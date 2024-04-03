import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import userConversation from "../../zustand/userConversation";
import userGetConversation from "../../hooks/useGetConversation";
import { toast } from "react-hot-toast";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const inputWidth = {
    width: "120px",
  };
  const { setSelectedConversation } = userConversation();
  const { conversation } = userGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const con = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (con) {
      setSelectedConversation(con);
      setSearch("");
    } else toast.error("No such user found");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center gap-2 justify-end'>
      <input
        type='text'
        placeholder='Search..'
        className='input input-bordered rounded-full outline-none w-24 md:w-full'
        // style={inputWidth}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-4 h-4 outline-none' />
      </button>
    </form>
  );
}

//Started Code
// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// export default function Searchingout() {
//   return (
//     <form className='flex item-center gap-2'>
//       <input
//         type='text'
//         placeholder='Search..'
//         className='input input-bordered rounded-full'
//       />
//       <button className='btn btn-circle bg-sky-500 text-white'>
//         <IoSearchSharp className='w-6 h-6 outline-none' />
//       </button>
//     </form>
//   );
// }
