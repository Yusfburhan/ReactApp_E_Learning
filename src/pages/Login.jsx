import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSnapchatGhost } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error,seterror]=useState('')
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (response.ok) {
            // Login successful
            const token = data.token;
            const userInfo = data.user;
            // Store token and user info in localStorage or sessionStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            // navigate("/", { token: data.token, userInfo: data.user_info });
            window.location.href = '/';
            
          } else {
            // Handle login errors
            console.log(data.error);
            console.log(data)
            seterror(data)
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      };
      
      return ( 
        <div className=" bg-white">
      <div className=" relative  top-36 left-[480px] h-[580px] w-[800px] bg-no-repeat  bg-cover bg-hero-pattern flex rounded-lg shadow-lg shadow-blue-600"  >
        <div className="w-96 flex flex-col   justify-end py-10 space-y-52  px-1"> 
            <div className=" flex flex-col  space-y-3 ">
              <span className="text-orange-300 text-2xl ">Contact us</span>
              <div className="flex justify-center space-x-6">
                <FaSnapchatGhost fill="#f6f6f6" size={30}/>
                <RiTelegramLine fill="#f6f6f6" size={30}/>
                <FaFacebookF fill="#f6f6f6" size={30}/>
                <PiInstagramLogoFill fill="#f6f6f6" size={30}/>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-3 justify-center">
                  <button class="flex  self-center  items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"  width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                    Login with google 
                </button>
                <button class="flex  self-center  items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"  width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                    Login with google 
                </button>
                <button class="flex  self-center  items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"  width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                    Login with google 
                </button>
            </div>
        </div>
        <div className="w-full flex flex-col  items-center justify-center space-y-5">
          <p className="text-gray-500">Learn With As</p>
          <h1 className="text-xl ">LOGIN TO YOUR ACCOUNT</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-80 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full h-12 rounded-lg focus:outline-orange-500 ps-4 text-orange-600 shadow-sm  shadow-gray-400"
                required
                />
               <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter password"
                 className="w-full h-12 rounded-lg focus:outline-orange-500 ps-4 text-orange-600 shadow-sm  shadow-gray-400"
                 required
                 />
              <button type="submit" className="text-xl bg-blue-600 w-48 py-2 rounded-md text-white hover:bg-orange-500 hover:scale-110 ">Login</button>
              {/* <h1>{error ? error.password || error.email :""}</h1> */}
              {/* <h1>{data.errors ? user.password  :""}</h1> */}
          </form>
        </div>
      </div>
    </div>
   );
  }
  
  export default Login;
  
  // const Login = ({setuser}) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  //   const [user,ssetuser]=useState('')
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       const data = await response.json();
  //       if (response.ok) {
  //         // Login successful
  //         const token = data.token;
  //         const userInfo = data.user;
  //         // Store token and user info in localStorage or sessionStorage
  //         localStorage.setItem('token', token);
  //         localStorage.setItem('userInfo', JSON.stringify(userInfo));
  
  //        navigate("/home", { token: data.token, userInfo: data.user_info });
  //       } else {
  //         // Handle login errors
  //         console.log(data.error);
  //         console.log(data)
  //         ssetuser(data)
  //       }
  //     } catch (error) {
  //       console.error("Error during login:", error);
  //     }
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         placeholder="Email"
  //         required
  //       />
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         placeholder="Password"
  //         required
  //       />
  //       <button type="submit">Login</button>
  //       <h1>{user ? user.password :""}</h1>
  //     </form>
  //   );
  // };
  
  // export default Login;