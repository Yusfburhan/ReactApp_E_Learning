import Modal from "../components/Modal";
import shaka from "../assets/elearning/image/shaka.jpg";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";

const MyProfile = () => {
  // const user={'name':'yusf'}
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const inputRef = useRef(null);

  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPhone, setIsEditPhone] = useState(false);

  const showeditName = () => {
    setIsEditName(!isEditName);
    inputRef.current && inputRef.current.focus();
  };
  const handelSaveName = () => {
    console.log("insha allah handel save(edit)");
  };
  const showeditEmail = () => {
    setIsEditEmail(!isEditEmail);
    // inputRef.current && inputRef.current.focus();
  };
  const handelSaveEmail = () => {
    console.log("insha allah handel save(edit)");
  };

  const showeditPhone = () => {
    setIsEditPhone(!isEditPhone);
    // inputRef.current && inputRef.current.focus();
  };
  const handelSavePhone = () => {
    console.log("insha allah handel save(edit)");
  };

  const edituser = async (quizId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/edituser/${quizId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name,
            email: email,
            // phone: phone,
          }),
        }
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update quiz: ${errorMessage}`);
      }

      console.log("Quiz updated successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUserInfo);
    setToken(storedToken);
    setName(storedUserInfo.name);
    setEmail(storedUserInfo.email);
    setPhone(storedToken.phone);
    console.log(user);
  }, []);
  return (
    <div className=" container mx-auto h-full ">
      <div className="flex items-start  pb-48 pt-36">
        <div className="w-96">
          <img
            src={`http://127.0.0.1:8000/${user && user.image}`}
            alt=""
            className="w-80 h-80 rounded-full"
          />
        </div>
        <div className=" flex flex-col space-y-5 ">
          <div className="flex flex-col items-start ">
            <h1 className="">Name</h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              {isEditName ? (
                <input
                  className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium "
                  value={name}
                  ref={inputRef}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              ) : (
                <h1 className="text-start  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium ">
                  {name}
                </h1>
              )}

              <CiEdit onClick={showeditName} className="h-full" />
            </div>
            {isEditName ? (
              <div className="flex space-x-3 justify-center mt-2 w-full">
                <button
                  className="bg-red-500 px-2 py-1  rounded-md"
                  onClick={showeditName}
                >
                  Cancle
                </button>
                <button
                  className="bg-green-500 px-4 py-1  rounded-md"
                  onClick={handelSaveName}
                >
                  save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="">Email</h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              {isEditEmail ? (
                <input
                  className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium "
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              ) : (
                <h1 className="text-start  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium ">
                  {email}
                </h1>
              )}

              <CiEdit onClick={showeditEmail} className="h-full" />
            </div>
            {isEditEmail ? (
              <div className="flex space-x-3 justify-center mt-2 w-full">
                <button
                  className="bg-red-500 px-2 py-1  rounded-md"
                  onClick={showeditEmail}
                >
                  Cancle
                </button>
                <button
                  className="bg-green-500 px-4 py-1  rounded-md"
                  onClick={handelSaveEmail}
                >
                  save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col items-start ">
            <h1 className="">Role</h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              <h1 className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium text-start">
                {user && user.role}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="">Phone Number</h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              {isEditPhone ? (
                <input
                  className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium "
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              ) : (
                <h1 className="text-start  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium ">
                  {phone}
                </h1>
              )}

              <CiEdit onClick={showeditPhone} className="h-full" />
            </div>
            {isEditPhone ? (
              <div className="flex space-x-3 justify-center mt-2 w-full">
                <button
                  className="bg-red-500 px-2 py-1  rounded-md"
                  onClick={showeditPhone}
                >
                  Cancle
                </button>
                <button
                  className="bg-green-500 px-4 py-1  rounded-md"
                  onClick={handelSavePhone}
                >
                  save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col items-start ">
            <h1 className="">date of created account </h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              <h1 className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium text-start">
                {user && user.created_at}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="">Last Update </h1>
            <div className="flex justify-between items-center w-96 py-1 px-1 rounded-md border-[1px] ">
              <h1 className="  ps-2 w-full focus:outline-blue-350 text-gray-500 font-medium text-start">
                {user && user.updated_at}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
