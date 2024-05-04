import image from "../assets/elearning/image/1.jpg";
import { useState } from "react";
import Usefetch from "../hooks/usefetch";
import Cardcourses from "../components/cardcourses";

const Category = () => {
  const [url, setUrl] = useState(`http://127.0.0.1:8000/api/courses`);
  const { data, loader, error, userInfo, token } = Usefetch(url);
  const [selectedValue, setSelectedValue] = useState(null); // State to hold the selected value

  const handleChange = (e) => {
    const categoryId = e.target.value;
    setSelectedValue(categoryId);
    setUrl(`http://127.0.0.1:8000/api/courses?category_id=${categoryId}`);
    console.log(url);
  };

  return (
    <div className="container mx-auto pt-36  min-h-screen">
      <h1 className="w-full mb-10  -ml-10 text-center text-2xl text-gray-500">
        Select the favorite course for you
      </h1>
      <div>
        <input
          type="text"
          id=""
          placeholder="search to course"
          className="rounded-xl mb-2 md:w-96 w-56 h-10 ps-3 focus:outline-blue-1000 border place-self-center relative right-32"
        />
      </div>
      <div className="w-full max-w-full flex flex-row">
        <div className=" flex flex-col w-full  items-center space-y-5 max-h-[600px] overflow-y-auto no-scrollbar  p-2">
          {data &&
            Array.isArray(data.course) &&
            data.course.map((items) => (
              <Cardcourses
                key={items.id}
                title={items.title}
                teachername={items.instructor}
                desc={items.description}
                image={items.imageofcourse}
                price={items.price}
                duration={items.duration}
              />
            ))}
        </div>
        <div className="md:w-[500px] w-72  ">
          <h1 className="relative text-black  -top-10 text-xl w-full text-start">
            Select the category you are favorite {selectedValue}
          </h1>
          <div className="w-full max-h-[580px] overflow-y-auto no-scrollbar p-2 relative -top-10 flex flex-col items-start space-y-2 pt-3">
            {data &&
              data.categories.map((items) => (
                <div key={items.id} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    value={items.id} // Assuming category ID is 'id'
                    checked={parseInt(selectedValue) === items.id}
                    onChange={handleChange}
                    className="w-5 h-5   cursor-pointer focus:accent-blue-350 "
                  />
                  <span className="label-text text-black font-medium ">{items.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
