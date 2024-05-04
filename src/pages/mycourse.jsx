import { useState, useEffect } from "react";
import image from "../assets/elearning/image/1.jpg";
import Cardmycourse from "../components/cardmycourse";
import Usefetch from "../hooks/usefetch";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown";

const Mycourses = () => {
  const [showmodal, setshowmodal] = useState(false);

  const [title, settitle] = useState();
  const [description, setdesc] = useState();
  const [imageofcourse, setimagee] = useState(null);
  const [price, setprice] = useState();
  const [currency, setcurr] = useState();
  const [instructor, setinstractor] = useState();
  const [duration, setduration] = useState();
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [Token, setToken] = useState();
  const { data, loder, error, userInfo, token } = Usefetch(
    `http://127.0.0.1:8000/api/mycourses/${user && user.id}`
  );
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
    console.log(successMessage && successMessage);
  }, []);
  const sub = (e) => {
    e.preventDefault();
    console.log(imageofcourse);
  };
  const handelstudent = (id) => {
    navigate(`/content/${id}`);
  };
  const clickmodal = () => {
    setshowmodal(!showmodal);
  };
  const close = () => {
    setshowmodal(!showmodal);
  };
  const handelteacher = (id) => {
    // console.log('alhamdw lila ')
    navigate(0);
  };

  //  modal function to get name and id
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (id, name) => {
    setSelectedValue({ id, name });
  };

  // addCousrsre
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageofcourse", imageofcourse.name);
    formData.append("category_id", selectedValue && selectedValue.id);
    formData.append("price", price);
    formData.append("currency", currency);
    formData.append("instructor", instructor);
    formData.append("duration", duration);
    formData.append("teacherid", user && user.id);
   
    try {
      const response = await fetch("http://127.0.0.1:8000/api/addcourse", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${Token}`, // Replace with your actual auth token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add course");
        setSuccessMessage("coursenotadd");
        navigate("/mycourse");
      }

      const data = await response.json();
      console.log("Course added:");
      settitle("");
      setdesc("");
      setimagee(null);
      setprice("");
      setcurr("");
      setinstractor("");
      setduration("");
      setSuccessMessage("course add successfully ");
      navigate("/mycourse");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const role = 'teacher';
  const role = user && user.role;
  return (
    <div className="container mx-auto pt-36 z-10  min-h-screen">
      {successMessage && <h1 className="text-white"> {successMessage}</h1>}
      <div className="flex flex-col items-center space-y-5">
        <h1 className=" w-full  mb-5 ps-28 text-start  text-2xl text-black ">
          salam alikm <span className="text-blue-350">{user && user.name}</span>{" "}
          this is the course you {role === "student" ? "joined" : "created"}
        </h1>
          
        <div className="flex justify-center space-x-7 md:justify-around md:space-x-72 ">
          <input
            type="text"
            id=""
            placeholder="search to course"
            className="text-black font-bold  rounded-xl  min-[450px]:w-96 w-72 h-10 ps-3 focus:outline-yellow-1  border "
          />
          {role === "teacher" ? (
            <button
              type="button"
              onClick={clickmodal}
              class="hover:scale-110 text-white shadow-md shadow-b35bg-blue-350  bg-blue-350  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add courses
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="max-h-full h-full   max-w-full w-full grid min-[700px]:grid-cols-2 min-[1040px]:grid-cols-4 content-center place-items-center gap-y-4">
          {role === "student"
            ? data &&
              Array.isArray(data.courseEnrolled) &&
              data.courseEnrolled.map((items) => (
                <Cardmycourse
                  id={items.id}
                  name={items.title}
                  desc={items.description}
                  image={items.imageofcourse}
                  price={items.price}
                  duration={items.duration}
                  click={() => handelstudent(items.id)}
                />
              ))
            : data &&
              Array.isArray(data.courseteachercreated) &&
              data.courseteachercreated.map((items) => (
                <Cardmycourse
                  id={items.id}
                  name={items.title}
                  desc={items.description}
                  image={items.imageofcourse}
                  price={items.price}
                  duration={items.duration}
                  click={() => handelstudent(items.id)}
                />
              ))}
        </div>
      </div>

      {/* modal add course  */}
      <div
        className={`${
          showmodal ? "flex" : "hidden"
        } fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
      >
        <div className="bg-white rounded-xl">
          <div className="flex  w-full justify-between items-center">
            <h1 className="text-xl ps-10 -mb-10 text-green-500">
              Add the course
            </h1>
            <button
              onClick={close}
              className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
            >
              X
            </button>
          </div>
          <form class="max-w-md mx-auto p-10" onSubmit={handleSubmit}>
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => settitle(e.target.value)}
                type="text"
                value={title}
                name="title"
                id="title"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="title"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
              <p className="text-red-500 text-sm w-full ">sdddd</p>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <textarea
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                rows="3"
                value={description}
                placeholder=" "
              ></textarea>
              <label
                for="desc"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
              <p className="text-red-500 text-sm">sdddd</p>
            </div>
            <Dropdown data={data} onSelect={handleSelect} />
            {selectedValue && (
              <p>
                {" "}
                {selectedValue.id},{selectedValue.name}
              </p>
            )}
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => {
                  const selectedImage = e.target.files[0];
                  setimagee(selectedImage);
                }}
                type="file"
                id="imagecourse"
                class="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="imagecourse"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image Of Course
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setprice(e.target.value)}
                  type="number"
                  value={price}
                  name="price"
                  id="price"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="price"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Price
                </label>
                <p className="text-red-500 text-sm">sdddd</p>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setcurr(e.target.value)}
                  type="text"
                  value={currency}
                  name="currency"
                  id="currency"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="currency"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Curency
                </label>
                <p className="text-red-500 text-sm">sdddd</p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setinstractor(e.target.value)}
                  type="text"
                  value={instructor}
                  name="instractor"
                  id="instractor"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="instractor"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  instractor
                </label>
                <p className="text-red-500 text-sm">sdddd</p>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setduration(e.target.value)}
                  type="number"
                  value={duration}
                  name="duration"
                  id="duration"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="duration"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  duration
                </label>
                <p className="text-red-500 text-sm">sdddd</p>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit} className="mt-24">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        className="border border-black "
      />
      <button type="submit">Submit</button>
    </form>
     */}
    </div>
  );
};

export default Mycourses;
