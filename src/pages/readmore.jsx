import image from "../assets/elearning/image/2.jpg";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Usefetch from "../hooks/usefetch";
const Readmore = () => {
  const { courseid } = useParams();

  const [showModal, setShowmodal] = useState(true);
  const [user, setUser] = useState();
  const [Token, setToken] = useState();
  const { data, loder, error, userInfo, token } = Usefetch(
    `http://127.0.0.1:8000/api/readmore/${courseid}`
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
  }, []);

  const displayModal = () => {
    setShowmodal(!showModal);
  };
    
  return (
    <div className="py-20">
      <img src={`http://127.0.0.1:8000/${data && data.course.imageofcourse}`} alt="" className="h-[420px] w-full object-cover" />
      <div className="container mx-auto py-8 flex space-x-5">
        <div className="w-full">
          <h1 className="text-3xl ">{data && data.course.title}</h1>
          <p className="text-xl mt-4">
          {data && data.course.description}
          </p>
          <div className="flex justify-center items-center mt-14 space-x-14">
            <h1 className="text-2xl ">{data && data.course.duration} hourse </h1>
            <button
              className="bg-blue-350 py-3 px-6 text-xl text-white  hover:bg-blue-1000"
              onClick={displayModal}
            >
              Buy Now {data && data.course.price} {data && data.course.currency}
            </button>
          </div>
          <div className="flex space-x-2 justify-center">
            <p className="text-xl mt-4 text-red-500">
            {data && data.numOfPeopleEnrolledThisCourse}  
            </p>
            <p className="text-xl mt-4 ">
            student have joined to this course
            </p>
          </div>
        </div>
        <div>
          <img
            src={image}
            className="h-72 w-96 object-cover rounded-md"
            alt=""
          />
          <h1 className="mt-2 font-bold text-xl">{data && data.course.instructor} </h1>
        </div>
      </div>
      {/* modal  */}
      <div
        className={`${
          showModal ? "hidden" : "flex "
        } modal-content fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
      >
        <div className="w-96   shadow-xl border rounded-md ">
          <div className="flex justify-between">
            <h1 className="text-2xl justify-self-center text-center w-full mt-10">
              Payment
            </h1>
            <h1
              className="text-2xl hover:bg-red-500 h-8 w-8 cursor-pointer"
              onClick={displayModal}
            >
              X
            </h1>
          </div>
          <div className="mx-2">
            <h1 className="text-start ps-4">Enter your code </h1>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="flex h-10 w-full rounded-md border-2 bg-background
                px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground
                focus-visible:outline-none focus-visible:border-blue-350 focus-visible:ring-ring
                focus-visible:ring-offset-2 "
            />
          </div>
          <button className="bg-green-500 py-2 px-4 mt-4 mb-10 rounded-md hover:bg-green-600 text-white">
            {" "}
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
