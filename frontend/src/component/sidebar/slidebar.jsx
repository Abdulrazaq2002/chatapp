import React from "react";
import SearchInput from "./searchInput";
import Conversations from "./conversations";
import LogoutButton from "./logoutButton";

export default function Slidebar() {
  return (
    <div className='border-slate-500 flex flex-col'>
      <SearchInput className='text-sm' />
      <div className='divider px-3'></div>
      <Conversations className='text-sm' />
      <LogoutButton />
    </div>
  );
}

//Started Code
// import React from "react";
// import SearchInput from "./searchingout";
// import Conversetions from "./conversations";
// import LogoutButton from "./logoutButton";

// export default function Slidebar() {
//   return (
//     <div className='order-r border-slate-500 flex flex-col'>
//       <SearchInput />
//       <div className='divider px-3'></div>
//       <Conversetions />
//       <LogoutButton />
//     </div>
//   );
// }
