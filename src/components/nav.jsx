import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/elearning/logo/image of my uni.jpg";
import { Link } from "react-router-dom";
import image from "../assets/elearning/image/images.jpeg";

const Nav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [Token, setToken] = useState();
  const [shownav, setShownav] = useState(false);
  const [dropdownemail, setdropdownemail] = useState(false);
  const nav = () => {
    console.log("alhamdwlila");
    setShownav(!shownav);
  };
  const dropemail = () => {
    setdropdownemail(!dropdownemail);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
  }, []);
  const createnewaccount = () => {
    navigate("/signup");
  };
  const account = () => {
    navigate("/account");
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken(null);
    setUser(null);
    setdropdownemail(false);
    window.location.href = '/';
  };

  return (
    <div className="">
      <nav className=" w-full h-20  md:flex hidden justify-between  items-center fixed z-50 bg-blue-50 px-14 xl:px-44">
        <div className="flex items-center space-x-4 ml ">
          <Link to={"/"} className="w-12 h-12 mr-10 ">
            <img src={Logo} alt="" className="rounded-full" />
          </Link>
          <Link
            to={"/"}
            className="font-medium lg:text-xl text-sm  hover:underline-offset-4 hover:scale-110 "
          >
            <p class=" group relative ">
              <span>Home</span>
              <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
            </p>
          </Link>
          <Link
            to={"/mycourse"}
            className="font-medium lg:text-xl text-sm  hover:underline-offset-4 hover:scale-110"
          >
            <p class=" group relative ">
              <span>My Course</span>
              <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
            </p>
          </Link>
          <Link
            to={"/courses"}
            className="font-medium lg:text-xl text-sm  hover:underline-offset-4 hover:scale-110"
          >
            <p class=" group relative ">
              <span>Courses</span>
              <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
            </p>
          </Link>
          <Link
            to={"/Aboutus"}
            className="font-medium lg:text-xl text-sm  hover:underline-offset-4 hover:scale-110"
          >
            <p class=" group relative ">
              <span>About As</span>
              <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
            </p>
          </Link>
          <Link
            to={"/contactus"}
            className="font-medium lg:text-xl text-sm  hover:underline-offset-4 hover:scale-110"
          >
            <p class=" group relative ">
              <span>Contact Us</span>
              <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
            </p>
          </Link>
        </div>
        <div className="flex items-center space-x-3 ">
          {Token ? (
            <div className="flex space-x-6">
              {/* <Link
                to={"/mycourse"}
                className="bg-blue-350 duration-200  px-4 rounded-md text-white hover:scale-105    py-1  text-lg "
              >
                {" "}
                My Course
              </Link> */}
              <div class="hs-dropdown relative flex flex-col ">
                <div
                  className="flex space-x-2 items-center justify-center mt-2 cursor-pointer"
                  onClick={dropemail}
                >
                  <img
                    class="w-6 h-6 rounded-full"
                    src={`http://127.0.0.1:8000/${user && user.image}`}
                    alt="yusf"
                    onClick={dropemail}
                  />
                  {/* <span class="text-black  group-hover:text-blue-350 group-focus:text-blue-350 font-medium w-10 truncate max-w-[7.5rem] dark:text-gray-400"> */}
                  {/* {user && user.name} */}
                  {/* </span> */}
                  <svg
                    onClick={dropemail}
                    className=""
                    class="hs-dropdown-open:rotate-180 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill=""
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                {dropdownemail && (
                  <div
                    className={`hs-dropdown-menu w-44 absolute top-6  -left-20    transition-[opacity,margin] duration hs-dropdown-open:opacity-100  ${
                      dropdownemail ? "" : "hidden opacity-0"
                    }]  min-w-44 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700`}
                    aria-labelledby="hs-dropdown-custom-trigger"
                  >
                    <Link
                      to={"/myprofile"}
                      class="w-full  flex justify-start items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                    >
                      My Profile
                    </Link>
                  
                    <Link
                      to={"/signup"}
                      class="w-full  flex justify-start items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                    >
                      Create New Account 
                    </Link>
                    <button
                      onClick={logout}
                      class="w-full  flex justify-start items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                    >
                      logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link
                to={"/signup"}
                className="bg-blue-350 duration-200  px-4 rounded-md text-white hover:scale-105    py-1  text-lg"
              >
                {" "}
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="bg-blue-350 duration-200  px-4 rounded-md text-white hover:scale-105    py-1  text-lg"
              >
                {" "}
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/*  nav toggle  */}
      <nav className="md:hidden flex fixed  z-50">
        {!shownav && (
          <button
            onClick={nav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        )}
        {shownav && (
          <div
            className={`h-screen min-[400px]:w-96 w-screen bg-blue-400 md:hidden   ${
              shownav ? "flex" : "hidden"
            } flex-col items-center `}
          >
            <svg
              className="border self-end mb-24"
              onClick={() => {
                setShownav(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
                x1="7.534"
                x2="27.557"
                y1="7.534"
                y2="27.557"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5a"></stop>
                <stop offset=".443" stop-color="#ee3d4a"></stop>
                <stop offset="1" stop-color="#e52030"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
                d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
              ></path>
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
                x1="27.373"
                x2="40.507"
                y1="27.373"
                y2="40.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#a8142e"></stop>
                <stop offset=".179" stop-color="#ba1632"></stop>
                <stop offset=".243" stop-color="#c21734"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
                d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
              ></path>
            </svg>
            <Link to={"/"} className="">
              <img src={Logo} alt="" className="rounded-full w-36 h-36 mb-10" />
            </Link>
            <div className="flex flex-col w-full h-full items-center justify-start space-y-4">
              <Link
                to={"/"}
                className="font-medium text-white  text-3xl hover:underline hover:underline-offset-2 hover:scale-110 "
              >
                Home
              </Link>
              <Link
                to={"/mycourse"}
                className="font-medium text-white  text-3xl hover:underline hover:underline-offset-2 hover:scale-110 "
              >
                My courses
              </Link>
              <Link
                to={"/courses"}
                className="font-medium text-white  text-3xl hover:underline hover:underline-offset-2 hover:scale-110 "
              >
                Home
              </Link>
              <Link
                to={"/categories"}
                className="font-medium text-white  text-3xl hover:underline hover:underline-offset-2 hover:scale-110 "
              >
                Categories
              </Link>
              <Link
                to={"/contactme"}
                className="font-medium text-white  text-3xl hover:underline hover:underline-offset-2 hover:scale-110 "
              >
                Conatct me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
