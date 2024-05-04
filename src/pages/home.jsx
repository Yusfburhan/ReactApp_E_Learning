import image from "../assets/elearning/image/2.jpg";
import general from "../assets/elearning/image/2.jpg";
import imagechild from "../assets/elearning/image/child-315049_1280-removebg-preview.png";

import img1 from "../assets/elearning/icon/anywhere.png";
import img2 from "../assets/elearning/icon/clock.png";
import img3 from "../assets/elearning/icon/24-hours-support.png";
import img4 from "../assets/elearning/icon/literature.png";

import yusf from "../assets/elearning/image/yusf.jpg";
import shaka from "../assets/elearning/image/shaka.jpg";
import kaiwan from "../assets/elearning/image/kaiwan.png";
import ardalan from "../assets/elearning/image/ardalan.jpg";

import Footer from "../components/footer";
import Category from "./courses";
import { useState, useEffect } from "react";
import Usefetch from "../hooks/usefetch";
import Cardhome from "../components/cardHome";
import Header from "../components/header";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Home = () => {
  const fut = [
    [1, "java", image, " The in Barcelona.", 20000],
    // [
    //   2,
    //   "java",
    //   image,
    //   " The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
    //   20000,
    // ],
    [
      3,
      "java",
      image,
      "The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
      20000,
    ],
    [
      4,
      "java",
      image,
      " The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
      20000,
    ],
    [
      5,
      "java",
      image,
      "The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
      20000,
    ],
    [
      6,
      "java",
      image,
      " The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
      20000,
    ],
    [
      7,
      "java",
      image,
      " The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to Naviglio where you can enjoy the main night life in Barcelona.",
      20000,
    ],
  ];
  const developer = [
    [
      1,
      "Kaiwan Qadr",
      "Student",
      "NewHalbja,Sylaimanyah,kurdstan",
      kaiwan,
      "fac",
      "insta",
      "snap",
    ],
    [
      2,
      "Ardalan Hassan ",
      "Student",
      "serwchawa,Sylaimanyah,kurdstan",
      ardalan,
      "fac",
      "insta",
      "snap",
    ],
    [
      3,
      "Shahid Najmadin",
      "Student",
      "sirwan,Sylaimanyah,kurdstan",
      shaka,
      "fac",
      "insta",
      "snap",
    ],
    [
      4,
      "Yusf",
      "Student",
      "kifre,Sylaimanyah,kurdstan",
      yusf,
      "fac",
      "insta",
      "snap",
    ],
  ];
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [Token, setToken] = useState();
  const { data, loder, error, userInfo, token } = Usefetch(
    `http://127.0.0.1:8000/api/dashboard/${user && user.id}`
  );
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
  }, []);
  const handelClick = ($id) => {
    navigate(`/readmore/${$id}`);
  };
  const handelstudent = (id) => {
    navigate(`/content/${id}`);
  };
  return (
    <div className={` pt-32 flex flex-col `}>
      <div className="flex z-10  container mx-auto">
        <div className="w-full  flex  flex-col justify-start items-start space-y-5 pt-14 ">
          <h1 className="text-black text-5xl  text-start font-bold">
            The one of Best <span className="text-blue-350">Platform</span> For{" "}
            <br /> Enhaancing Skills
          </h1>
          <div className="inline-block h-1 rounded-full w-48 bg-blue-350"></div>
          <p className="text-black font-medium mt-1">
            unlimited Accesss to{" "}
            <span className="font-semibold">{data && data.numberOfCourse}</span>{" "}
            world-class {data && data.numOfCategories} deferent categories{" "}
          </p>
          <h6 className="text-black font-semibold">
            Anywhere Access Easy Learning
          </h6>
          <h6 className="text-slate-700 font-medium text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus{" "}
            <br /> deserunt aut ratione ex.
          </h6>
          <div className="flex  w-full relative top-14 space-x-2">
            <a
              href="#"
              className="text-lg text-white py-2 px-8 hover:scale-110  font-medium shadow-md shadow-blue-350 bg-blue-350 rounded-lg"
            >
              DOCS
            </a>
            <button className="text-lg text-blue-350 py-2 px-8   font-normal  rounded-lg hover:scale-110">
              Watch video
            </button>
          </div>
        </div>
        <div className="w-full mt-20 flex justify-center ">
          <img
            src={general}
            alt=""
            className="h-80 w-[480px]  border rounded-br-3xl rounded-tl-3xl"
          />
        </div>
      </div>

      <div className="grid  grid-cols-4 w-full  mt-28 z-10 container mx-auto">
        <div className="border border-blue-500 rounded-3xl flex items-center space-x-6  w-64 max-[1200px]:w-36 justify-center py-3">
          <img src={img1} alt="" className="w-10 h-10 " />
          <h1 className=" font-semibold text-blue-500">Learn Anywhere</h1>
        </div>
        <div className="border border-red-400 rounded-3xl flex items-center space-x-6  w-64 max-[1200px]:w-36 justify-center py-3">
          <img src={img2} alt="" className="w-10 h-10 " />
          <h1 className=" font-semibold text-red-400">Lifetime Access</h1>
        </div>
        <div className="border border-green-400  rounded-3xl flex items-center space-x-6  w-64 max-[1200px]:w-36 justify-center py-3">
          <img src={img3} alt="" className="w-10 h-10 " />
          <h1 className=" font-semibold text-green-400">24/7 Support</h1>
        </div>
        <div className="border border-orange-400 rounded-3xl flex items-center space-x-6  w-64 max-[1200px]:w-36 justify-center py-3">
          <img src={img4} alt="" className="w-10 h-10 " />
          <h1 className=" font-semibold text-orange-400">Right lecture</h1>
        </div>
      </div>
      <div className="flex mt-14 z-10 container mx-auto">
        <div className="w-full flex items-center justify-end  h-[440px] ">
          <img src={imagechild} alt="" className="h-full w-96" />
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-5xl mb-3 font-medium text-black">
            Study Anywhere
          </h1>
          <h1 className="text-5xl mb-5 font-medium text-black">
            Easily Online
          </h1>
          <p className=" w-96 text-xl text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            cumque magnam saepe laboriosam, fugiat ipsum veritatis laudantium
            atque optio ullam voluptatibus! Cupiditate quo explicabo obcaecati
            quis unde ipsam, quia maiores!
          </p>
        </div>
      </div>

      {/* My course */}
      {data && Array.isArray(data.courseEnrolled)? (
        <h1 className="text-start mt-5  w-full text-3xl font-semibold ps-32 container mx-auto">
          My Course
        </h1>
      ) : (
        ""
      )}
      <div className="flex flex-col items-center  font-medium z-10 mb-10 container mx-auto">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar w-full py-10 px-1 hover:px-4">
          {data &&
            Array.isArray(data.courseEnrolled) &&
            data.courseEnrolled.map((items) => (
              <Cardhome
                key={items.id}
                image={items.imageofcourse}
                name={items.title}
                text={items.description}
                price={items.price}
                duration={items.duration}
                handelClick={() => handelstudent(items.id)}
              />
            ))}
        </div>
      </div>

      {/* category  */}
      <h1 className="text-gray-700 text-lg font-semibold ">
        show the category d s hd hd h
      </h1>
      <h1 className="text-black font-semibold text-4xl mb-5">
        Newset Category{" "}
      </h1>
      <div className="grid grid-cols-4 gap-y-3  mb-20 content-center place-items-center container mx-auto">
        {data &&
          data.categoures.map((items) => (
            <div className="group h-64 w-72 rounded-xl cursor-pointer">
              <img
                src={`http://127.0.0.1:8000/${items.image}`}
                alt=""
                className="min-w-full max-w-full min-h-full max-h-full rounded-xl "
              />
              <div className="items-center justify-center min-w-full max-w-full min-h-full relative rounded-xl bg-blue-350 animate-pulse -mt-64 group-hover:flex hidden group-hover:opacity-90">
                <h1 className="font-bold text-white text-xl">{items.name}</h1>
              </div>
            </div>
          ))}
      </div>
      {/* papular course  */}
      <div className="bg bg-white">
        <div className=" pb-16 pt-4 container mx-auto">
          <h3 className="text-gray-700 text-lg font-medium">
            choose a course accourding to your aria of interest{" "}
          </h3>
          <h1 className="font-semibold text-5xl">Most Papular Courses</h1>
        </div>
        <div className=" grid grid-cols-3 content-center place-items-center gap-3  w-full pb-24 container mx-auto ">
          {data &&
            Array.isArray(data.popular) &&
            data.popular.map((items) => (
              <div class=" hover:scale-105 relative flex w-80 min-w-60 flex-col overflow-hidden rounded-lg  bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    src={`http://127.0.0.1:8000/${items.image}`}
                    alt="ui/ux review check"
                    className="h-44 w-full object-fill hover:scale-105"
                  />
                </div>
                <div class="px-2 pt-6 pb-3 border-b mx-4">
                  <h4 class="block font-sans text-xl text-black antialiased font-semibold leading-snug tracking-normal ">
                    {items.title.length > 25
                      ? `${items.title.substring(0, 25)}...`
                      : items.title}
                  </h4>
                  <p class="block mb-2 mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    {items.description.length > 27
                      ? `${items.description.substring(0, 27)}...`
                      : items.description}
                  </p>
                  <div class="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        alt="Tania Andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
                      />
                      <p>
                        {items.instructor.length > 15
                          ? `${items.instructor.substring(0, 15)}...`
                          : items.instructor}
                      </p>
                    </div>
                    <p className="">{items.duration} hourse</p>
                  </div>
                </div>
                <div class="flex items-center justify-between p-6">
                  <p class="block font-sans text-base antialiased font-semibold leading-relaxed text-blue-350">
                    {items.price} IQD
                  </p>
                  <button
                  onClick={() => handelClick(items.id)}
                  className="bg-blue-350 hover:bg-blue-1000 text-white  rounded-2xl px-2 py-1">
                    Read more
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* information inshallah  */}
      <div className="group h-96  cursor-pointer mb-20">
        <img
          src={image}
          alt=""
          className="min-w-full max-w-full min-h-full max-h-full "
        />
        <div className="items-center justify-center min-w-full max-w-full min-h-full relative content-center flex  bg-[#017b95] animate-plse -mt-96 opacity-80 ">
          <div className="grid   grid-cols-5  w-[1300px] content-center place-items-center">
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] w-48 py-6 space-y-4 rounded-xl">
              <p className="font-semibold text-black text-2xl ">Users</p>
              <p className="font-bold text-blue-350 text-4xl ">
                {data && data.numOfUsers}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] w-48 py-6 space-y-4 rounded-xl">
              <p className="font-semibold text-black text-2xl ">Instractors</p>
              <p className="font-bold text-blue-350 text-4xl ">
                {data && data.numOfTeacher}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] w-48 py-6 space-y-4 rounded-xl">
              <p className="font-semibold text-black text-2xl ">Students</p>
              <p className="font-bold text-blue-350 text-4xl ">
                {data && data.numOfStudent}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] w-48 py-6 space-y-4 rounded-xl">
              <p className="font-semibold text-black text-2xl ">Enrollment</p>
              <p className="font-bold text-blue-350 text-4xl ">
                {data && data.numOfEnrollmet}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] w-48 py-6 space-y-4 rounded-xl">
              <p className="font-semibold text-black text-2xl ">Courses</p>
              <p className="font-bold text-blue-350 text-4xl ">
                {data && data.numberOfCourse}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* future and design  */}
      <h1 className="text-start mt-5  w-full text-3xl font-semibold ps-32 container mx-auto">
        Future course learn and design & devlopment
      </h1>
      <div className="flex items-center space-x-2 container mx-auto">
        {/* <svg
          width={75}
          height={75}
          viewBox="0 0 64 64"
          className=" hover:scale-105 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class="iconify iconify--emojione-monotone"
          preserveAspectRatio="xMidYMid meet"
          fill="#02b3e4"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2zm17 35.428H30.307V48L15 32l15.307-16v11.143H49v10.285z"
              fill="#02b3e4"
            ></path>
          </g>
        </svg> */}
        <div className="flex space-x-4 overflow-x-auto no-scrollbar w-full py-10 px-1 hover:px-4">
          {fut.map((items) => (
            <Cardhome
              key={items[0]}
              image={items[2]}
              name={items[1]}
              text={items[3]}
              price={items[4]}
              duration="1"

            />
          ))}
          {/* <Cardhome/> */}
        </div>
        {/* <svg
          width={75}
          height={75}
          className=" hover:scale-105 cursor-pointer"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-h
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2zm1.693 46V37.428H15V27.143h18.693V16L49 32L33.693 48z"
              fill="#02b3e4"
            ></path>
          </g>
        </svg> */}
      </div>

      {/*short and ..*/}
      <h1 className="text-start mt-10   w-full text-3xl font-semibold ps-32 container mx-auto">
        Short And Sweet Course{" "}
      </h1>
      <div className="flex items-center space-x-2 container mx-auto ">
        <div className="flex space-x-4 overflow-x-auto  no-scrollbar w-full py-10   px-1 hover:px-4">
          {data &&
            data.shortAndSweetCourses.map((items) => (
              <Cardhome
                key={items.id}
                name={items.title}
                image={items.imageofcourse}
                text={items.description}
                price={items.price}
                duration={items.duration}
                handelClick={() => handelClick(items.id)}
              />
            ))}
        </div>
      </div>
      {/* free */}
      <h1 className="text-start mt-10  w-full text-3xl font-semibold ps-32 container mx-auto">
        Free Courses{" "}
      </h1>
      <div className="flex items-center space-x-2 container mx-auto">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar w-full py-10 px-1 hover:px-4">
          {data &&
            data.freeCourses.map((items) => (
              <Cardhome
                key={items.id}
                name={items.title}
                image={items.imageofcourse}
                text={items.description}
                price={items.price}
                duration={items.duration}
                handelClick={() => handelClick(items.id)}
              />
            ))}
        </div>
      </div>
      <div className="h-[2px] w-full mr-80 inline-block bg-blue-350  container mx-auto mt-24"></div>
      {/* developer  */}
      <div className=" pb-20 h-full  mt-3">
        <h1 className="w-full text-center   font-semibold text-3xl text- mb-3 ">
          The developer of this project
        </h1>
        <div className="h-[2px] w-full  bg-blue-350  ml-80 container mx-auto  mb-5"></div>
        <div className="grid grid-cols-4 pt-14 content-center place-items-center container mx-auto">
          {developer.map((items) => (
            <div className="w-64  shadow-2xl shadow-gary-400 flex flex-col items-center bg-white pb-4 rounded-b-2xl">
              <img
                src={items[4]}
                alt=""
                className="rounded-b-xl w-52 h-52 relative bottom-8 object-fill"
              />
              <div className="">
                <h1 className="font-semibold w-full text-center ">
                  {items[1]}{" "}
                </h1>
                <h6 className="font-semibold w-full text-center text-gray-500 -mt-1 mb-3">
                  {items[2]}
                </h6>
                <h6 className="font-semibold w-full text-center text-gray-500 mb-3">
                  {items[3]}{" "}
                </h6>
                <div className="flex items-center justify-between">
                  <div className="inline-block w-14 bg-black h-[2px]"></div>
                  <div className="flex space-x-2 mx-2">
                    <a href={`${items[5]}`} className="w-8 h-8">
                      <FaFacebookSquare
                        className="w-full h-full"
                        color="#02b3e4"
                      />
                    </a>
                    <a href={`${items[6]}`} className="w-8 h-8">
                      <FaSquareInstagram
                        className="w-full h-full"
                        color="#02b3e4"
                      />
                    </a>
                    <a href={`${items[7]}`} className="w-8 h-8">
                      <FaSquareSnapchat
                        className="w-full h-full "
                        color="#02b3e4"
                      />
                    </a>
                  </div>
                  <div className="inline-block w-14 bg-black h-[2px]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
