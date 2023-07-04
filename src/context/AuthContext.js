// import { createContext, useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// const AuthContext = createContext();

// export default AuthContext;

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(()=>
//   JSON.parse(localStorage.getItem('token')) || null
// );
// //this will return without the coilybraces
//   const navigate = useNavigate();

//   const loginUser = async(incoming)=>{
//     console.log(incoming);
//     try {
//     const res = await axios.post('http://127.0.0.1:8000/api/auth/token/login/', incoming)
//     console.log(res.data);
//     if (res.status === 201){
//         setToken(res.data.auth_token);
//         localStorage.setItem('token', JSON.stringify(res.auth_token))
//         navigate('/place-to-stay')
//     }
//     } catch (error) {
//     console.log(error);
//     if(error){
//         if (error.response.data.non_field_error){
//             toast.error(error.response.data.non_field_error[0])
//         } else if (error.response.data.username){
//         toast.error(error.response.data.username[0])
//         } else if (error.response.data.password){
//         toast.error(error.response.data.password[0])
//         }
//     }
//     }
// }

// const registerUser = async (incomingData)=>{
//   console.log(incomingData);
//   try {
//   const res = await axios.post('http://127.0.0.1:8000/api/auth/users/', incomingData)
//   console.log(res.data);

//   if(res.status === 201){
//     toast.success(`Registered successfully welcome ${res.username}`)
//     navigate('/login')
//     loginUser({
//         username: incomingData.username,
//         password: incomingData.password,
//     })
// } 
// } catch (error) {
//     if(error){
//         console.log(error);
//         // if (error.response.data.non_field_error){
//         //     toast.error(error.response.data.non_field_error[0])
//         // } else if (error.response.data.username){
//         // toast.error(error.response.data.username[0])
//         // } else if (error.response.data.password){
//         // toast.error(error.response.data.password[0])
//         // } else if (error.response.data.email){
//         //     toast.error(error.response.data.email[0])
//         // }
//     }
// }
// }


//   const AuthData = {
//     user,
//     registerUser,
//     loginUser,
//     token,
//   };

//   return (
//     <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
//   );
// };
