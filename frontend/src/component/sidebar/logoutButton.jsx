import { BiLogOut } from "react-icons/bi";
import UserLogout from "../../hooks/userLogout";

export default function LogoutButton() {
  const { loading, logout } = UserLogout(); // Call UserLogout to get loading and logout
  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut
          className='w-6 h-6 cursor-pointer hover:text-blue-900'
          onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
}

//Started Code
// import { BiLogOut } from "react-icons/bi";

// export default function LogoutButton() {
//   return (
//     <div className='mt-auto'>
//       <BiLogOut className='w-6 h-6 text-blue cursor-pointer' />
//     </div>
//   );
// }
