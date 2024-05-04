import video from "../assets/elearning/video/quran.mp4";
import image from "../assets/elearning/image/1.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Usefetch from "../hooks/usefetch";
import { useNavigate } from "react-router-dom";

const Contentcourse = () => {
  const navigate = useNavigate();
  const { courseid } = useParams();

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [showDivComment, setShowDivComment] = useState(null);
  const [showDivContent, setShowDivContent] = useState(null);
  const [showDivQuiz, setShowDivQuiz] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  const [showModalEditContent, setShowModalEditContent] = useState(false);
  const [showModalEditQuiz, setShowModalEditQuiz] = useState(false);

  const [quiz, setquiz] = useState(false);
  const [showmodalquiz, setmodalquiz] = useState(false);
  const [showmodalcontent, setmodalcontent] = useState(false);
  const [content_id, setcontent_id] = useState();
  const [quiz_id, setQuiz_id] = useState();

  const [user, setUser] = useState();
  const [Token, setToken] = useState();

  // quiz inputs
  const [titleQuiz, setTitleQuiz] = useState();
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  const [titleEditQuiz, setTitleEditQuiz] = useState();
  const [questionEdit, setEditQuestion] = useState();
  const [answerEdit, setEditAnswer] = useState();

  // content inputs
  const [titleContent, setTitleContent] = useState();
  const [descriptionContent, setdescriptionContent] = useState();
  const [dataa, setData] = useState([]);

  const [inpEditTitle, setInpEditTitle] = useState();
  const [inpEditDesc, setInpEditDesc] = useState();
  const [inpEditData, setInpEditData] = useState([]);

  // comment input
  const [comment, setComment] = useState();
  const [inpEditComment, setInpEditComment] = useState();

  const { data, loder, error, userInfo, token } = Usefetch(
    `http://127.0.0.1:8000/api/detailmycourses/${courseid}/${content_id}/${
      user && user.id
    }`
  );
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
  }, []);
  const showDeleteComment = (index, userId) => {
    if ((user && user.role == "teacher") || (user && user.id == userId)) {
      setShowDivComment((prevIndex) => (prevIndex === index ? null : index));
    }
  };
  const closeEditContent = () => {
    setInpEditTitle("");
    setInpEditDesc("");
    setShowModalEditContent(!showModalEditContent);
  };
  const closeEditQuiz = () => {
    setTitleEditQuiz("");
    setEditQuestion("");
    setEditAnswer("");
    setShowModalEditQuiz(!showModalEditQuiz);
  };
  const showEditContent = (title, desc) => {
    setInpEditTitle(title);
    setInpEditDesc(desc);
    setShowModalEditContent(!showModalEditContent);
  };
  const showEditQuiz = (title, question, correct_answer) => {
    setEditQuestion(question);
    setEditAnswer(correct_answer);
    setTitleEditQuiz(title);
    setShowModalEditQuiz(!showModalEditQuiz);
  };
  const showDeleteContent = (index) => {
    setShowDivContent((prevIndex) => (prevIndex === index ? null : index));
  };
  const showDeleteQuiz = (index) => {
    setShowDivQuiz((prevIndex) => (prevIndex === index ? null : index));
  };
  const showEditComment = (index, comment) => {
    setInpEditComment(comment);
    setShowEdit((prevIndex) => (prevIndex === index ? null : index));
  };
  const showquiz = () => {
    setShow(false);
  };
  const showclass = () => {
    setShow(true);
  };
  const clickcontent = (id) => {
    setcontent_id(id);
    setShow1(true);
  };
  const clickquiz = (id) => {
    setQuiz_id(id);
    setShow1(false);
  };
  const closecontent = () => {
    setdescriptionContent("");
    setTitleContent("");
    setmodalcontent(!showmodalcontent);
  };
  const showContent = () => {
    setmodalcontent(!showmodalcontent);
  };
  const closeQuiz = () => {
    setmodalquiz(!showmodalquiz);
  };
  const showQuiz = () => {
    setmodalquiz(!showmodalquiz);
  };
  // Quiz
  //insert
  const submitQuiz = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titleQuiz);
    formData.append("question", question);
    formData.append("correct_answer", answer);
    formData.append("course_id", courseid);

    console.log(titleQuiz, question, answer, courseid);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/addquiz", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${Token}`, // Replace with your actual auth token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add quiz");
        // setSuccessMessage('coursenotadd')
        // navigate('/mycourse')
      }

      const data = await response.json();
      console.log("Quiz added:");
      setTitleQuiz("");
      setQuestion("");
      setAnswer("");
      // setSuccessMessage('course add successfully ');
      // navigate('/contnt')
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //delete
  const deleteQuiz = async (quizId) => {
    // console.log(quizId);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/deletequiz/${quizId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
            // Add any authorization headers if needed
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete quiz");
      }

      // If comment is successfully deleted, you can update your UI as needed
      console.log("quiz deleted successfully");
      setShowDivQuiz(!showDivQuiz);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //edit insha allah
  const editQuiz = async (quizId) => {
    console.log(quizId);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/editquiz/${quizId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify({
            title: titleEditQuiz,
            question: questionEdit,
            correct_answer: answerEdit,
          }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update quiz: ${errorMessage}`);
      }

      console.log("Quiz updated successfully");
      setEditQuestion("");
      setEditAnswer("");
      setTitleEditQuiz("");
      setShowModalEditQuiz(!showModalEditQuiz);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // content
  const [errors, setErrors] = useState([]);
  const [file, setFile] = useState(null);

  //insert
  const submitContent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("courseid", courseid); // Change to the appropriate course ID
    formData.append("title", titleContent);
    formData.append("description", descriptionContent);
    formData.append("dataa", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/addcontent", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${Token}`, // Replace with your actual auth token
        },
      });

      if (!response.ok) {
        const responseData = await response.json();
        setErrors(responseData.errors || ["Failed to add content"]);
        return;
      }

      // Clear form fields on successful submission
      setTitleContent("");
      setFile(null);
      setErrors([]);
      alert("Content added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      setErrors(["Failed to add content"]);
    }
  };
  //delete
  const deleteContent = async (contentId) => {
    console.log(contentId);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/deletecontent/${contentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
            // Add any authorization headers if needed
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete content");
      }

      // If comment is successfully deleted, you can update your UI as needed
      console.log("content deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //edit
  const editContent = async (contentId) => {
    console.log(contentId);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/editcontent/${contentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify({
            title: inpEditTitle,
            desc: inpEditDesc,
            data: inpEditData,
          }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update content: ${errorMessage}`);
      }

      console.log("Content updated successfully");
      setInpEditTitle("");
      setInpEditDesc("");
      setShowModalEditContent(!showModalEditContent);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Comment
  //insert
  const submitComment = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("content_id", content_id);
    formData.append("user_id", user && user.id);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/addcomment", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${Token}`, // Replace with your actual auth token
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add Comment");
      }

      setComment("");
      const responseData = await response.json();
      console.log("Comment added:", responseData);

      // window.location.href = `/content/${data && data.course.id}`;

      // Clear form fields after successful submission
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //edit

  const editComment = async (commentId, userId) => {
    if (user && user.id === userId) {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/editcomment/${commentId}`,
          {
            method: "PUT", // or "PATCH" depending on your API
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Token}`,
              // Add any authorization headers if needed
            },
            body: JSON.stringify({ comment: inpEditComment }), // Send updated comment
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update comment");
        }

        // If comment is successfully updated, you can update your UI as needed
        console.log("Comment updated successfully");
        setShowEdit(!showEdit);
        setShowDivComment(!showDivComment);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("un uzarization ");
    }
  };
  //delete
  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/deletecomment/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
            // Add any authorization headers if needed
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      // If comment is successfully deleted, you can update your UI as needed
      console.log("Comment deleted successfully");
      setShowDivComment(!showDivComment);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const role = user && user.role;
  // const role = "teacher";

  return (
    <div className="container mx-auto pt-36">
      <marquee className="flex w-full ">
        <div class="mb-8 flex  w-full space-x-52  font-semibold text-gray-900 dark:text-white md:text-2xl lg:text-4xl ">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black ">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-350 from-black">
            {data && data.course.title}
          </span>
        </div>
      </marquee>
      <div className="flex space-x-10">
        {/* <h1 className="text-4xl text-red-500">{courseid}</h1>
      <h1 className="text-4xl text-red-500">{content_id}</h1> */}
        <div className="flex flex-col w-full pt-6">
          {show1 ? (
            <div>
              {data &&
                Array.isArray(data.contents) &&
                data.contents
                  .filter((content) => content.id === content_id) // Filter based on content_id
                  .map((items) => (
                    <div className="flex flex-col items-start w-full ">
                      {/* {role === "teacher" ? (
                      <button
                        onClick={showContent}
                        className=" py-2 w-52 self-end bg-yellow-1 rounded-2xl mb-5 hover:scale-105"
                      >
                        Add Lecture
                      </button>
                    ) : (
                      <button className="px-4 py-2  w-full bg-yellow-1 rounded-sm mb-5">
                        pls jwan gwy bgra{" "}
                      </button>
                    )} */}
                      <video
                        src={`http://127.0.0.1:8000/${items.data}`}
                        controls
                        autoPlay
                        className=" border-black h-96 w-full shadow-sm shadow-white mb-4 rounded-3xl "
                      ></video>
                      <div class="flex items-center justify-center mt-2 mb-4">
                        <img
                          class="w-10 h-10 rounded-full mr-7 "
                          src={image}
                          alt="Avatar of Jonathan Reinink"
                        />
                        <p class="text-black leading-none font-medium md:text-base text-sm">
                          {data.teacher.name}
                        </p>
                      </div>
                      <h1 className="text-black text-start font-medium text-2xl w-full">
                        {items.title}
                      </h1>
                      <p className="text-black text-start ps-1 w-full mb-10  h-36 overflow-y-auto  ">
                        {items.desc}
                      </p>
                    </div>
                  ))}
              {data &&
                // Array.isArray(data.comments) &&
                data.comments?.map((items, index) => (
                  <div class="flex flex-col  my-2" key={index}>
                    <div
                      class=" rounded-md p-3 ml-3 mb-1 border-b border-l"
                      id={`comment${index}`}
                    >
                      <div class="flex items-center justify-between ">
                        <div className="flex space-x-1 w-full ">
                          <img
                            src="https://avatars.githubusercontent.com/u/22263436?v=4"
                            class="object-cover w-8 h-8 rounded-full 
                          border-2 border-emerald-400  shadow-emerald-400
                          "
                          />
                          <h3 class="font-bold text-black mt-[2px] ">
                            {items.nameUserWhoComment}
                          </h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <p
                            className="font-medium cursor-pointer  "
                            onClick={() =>
                              showDeleteComment(index, items.user_id)
                            }
                          >
                            ...
                          </p>
                          {showDivComment === index && (
                            <div className="w-20 flex flex-col justify-center items-center space-y-1 bg-white shadow-md rounded-sm py-2 ">
                              <p
                                onClick={() => deleteComment(items.id)}
                                className="hover:underline cursor-pointer text-sm hover:text-red-500 hover:bg-gray-300 w-full"
                              >
                                Delete
                              </p>
                              <p
                                onClick={() =>
                                  showEditComment(index, items.comment)
                                }
                                className="hover:underline cursor-pointer text-sm hover:text-blue-500 hover:bg-gray-300 w-full"
                              >
                                Edit
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <p class="text-black mt-2">{items.comment}</p>
                      {showEdit === index && (
                        <div className="w-full flex justify-center px-4  shadow-sm">
                          <input
                            onChange={(e) => {
                              setInpEditComment(e.target.value);
                            }}
                            value={inpEditComment}
                            type="text"
                            name=""
                            id=""
                            className="w-full rounded-l-md border "
                          />
                          <button
                            className="bg-blue-500 p-2 rounded-r-md"
                            onClick={() => editComment(items.id, items.user_id)}
                          >
                            edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              <div className="flex flex-col mb-10">
                <form>
                  <div class="w-full px-3 my-2">
                    <textarea
                      id="comment"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      value={comment}
                      class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      name="body"
                      placeholder="Type Your Comment"
                      required
                    ></textarea>
                  </div>

                  <div class="w-full flex justify-end px-3">
                    <button
                      onClick={submitComment}
                      class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>
              {data &&
                Array.isArray(data.quizzes) &&
                data.quizzes
                  .filter((quiz) => quiz.id === quiz_id) // Filter based on content_id
                  .map((items) => (
                    // <div>{items.id}{items.title}</div>
                    <div className="flex flex-col items-start w-full ">
                      <p className="text-xl text-start full mb-6 text-black">
                        {items.title}
                      </p>
                      <p className="text-xl text-start full mb-6 text-black">
                        {items.question}
                      </p>

                      <div
                        className={`w-full ${
                          role === "teacher" ? "" : "hidden"
                        }`}
                      >
                        <textarea
                          className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                          name="body"
                          placeholder="Type Your Answer"
                          required
                        ></textarea>
                        <button className="bg-blue-500 text-white px-8 py-2 self-center mt-5 rounded-md">
                          submit
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
        <div className="w-full felx flex-col items-center space-y-4 ">
          {role == "teacher" ? (
            <div className="flex justify-center space-x-2   ">
              <button
                onClick={showQuiz}
                className=" py-2 w-full self-end bg-blue-350 rounded-lg text-white hover:bg-blue-500"
              >
                Add Quize
              </button>
              <button
                onClick={showContent}
                className=" px-4 py-2  w-full bg-blue-350 rounded-lg text-white  hover:bg-blue-500 "
              >
                Add Lecture
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center space-x-4">
            <button
              onClick={showquiz}
              className="focus:font-bold text-black  focus:text-blue-350  w-full text-lg font-semibold   "
            >
              <p class=" group relative ">
                <span>Quiz</span>
                <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
              </p>
            </button>
            <button
              onClick={showclass}
              className="focus:font-bold text-black  focus:text-blue-350  w-full text-lg font-semibold"
            >
              <p class=" group relative ">
                <span>Class</span>
                <span class="absolute -bottom-0 right-0 w-0 transition-all h-0.5 bg-blue-350 group-hover:w-full"></span>
              </p>
            </button>
          </div>
          <div className="w-full py-2 h-[600px] space-y-1 overflow-y-auto no-scrollbar">
            {show
              ? data &&
                Array.isArray(data.contents) &&
                data.contents.map((items, index) => (
                  <div className=" group flex justify-between items-start  space-y-1 pb-1  hover:bg-slate-200 cursor-default ">
                    <input
                      type="checkbox"
                      className="w-10 my-1 accent-pink-400"
                      id=""
                    />
                    <div
                      className="flex flex-col space-y-1 pb-1  items-start pl-2 w-full"
                      onClick={() => clickcontent(items.id)}
                    >
                      <h1 className="text-center text-xl text-black group-hover:text-black ">
                        {items.title.length > 50
                          ? `${items.title.substring(0, 50)}...`
                          : items.title}
                      </h1>
                      <p className="text-gray-400 group-hover:text-gray-800 pl-1 ">
                        {items.desc.length > 80
                          ? `${items.desc.substring(0, 80)}...`
                          : items.desc}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p
                        className="pr-1 font-bold text-lg cursor-pointer border w-6 "
                        onClick={() => showDeleteContent(index)}
                      >
                        ...
                      </p>

                      {showDivContent === index && (
                        <div
                          className={`w-20 ${
                            role === "teacher" ? "flex" : "hidden"
                          } flex-col justify-center items-center space-y-1 bg-white shadow-md rounded-sm py-2 `}
                        >
                          <p
                            onClick={() => deleteContent(items.id)}
                            className="hover:underline cursor-pointer text-sm hover:text-red-500 hover:bg-gray-300 w-full"
                          >
                            Delete
                          </p>
                          <p
                            onClick={() =>
                              showEditContent(items.title, items.desc)
                            }
                            className="hover:underline cursor-pointer text-sm hover:text-blue-500 hover:bg-gray-300 w-full"
                          >
                            Edit
                          </p>
                          {/* content edit modal  */}
                          {showModalEditContent && (
                            <div
                              className={`${"flex"} modal-content fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
                            >
                              <div className="bg-white rounded-xl w-96">
                                <div className="flex  w-full justify-between items-center">
                                  <h1 className="text-xl ps-10 -mb-10 text-green-500">
                                    Edit Lecture
                                  </h1>
                                  <button
                                    onClick={closeEditContent}
                                    className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
                                  >
                                    X
                                  </button>
                                </div>
                                <div class="max-w-md mx-auto p-10 ">
                                  <div class="relative z-0 w-full mb-5 group">
                                    <input
                                      onChange={(e) => {
                                        setInpEditTitle(e.target.value);
                                      }}
                                      value={inpEditTitle}
                                      type="text"
                                      name="title"
                                      id="title"
                                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" "
                                      // required
                                    />
                                    <label
                                      for="title"
                                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Title
                                    </label>
                                    <p className="text-red-500 text-sm w-full ">
                                      sdddd
                                    </p>
                                  </div>
                                  <div class="relative z-0 w-full mb-5 group">
                                    <textarea
                                      onChange={(e) => {
                                        setInpEditDesc(e.target.value);
                                      }}
                                      value={inpEditDesc}
                                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                      rows="3"
                                      placeholder=" "
                                    ></textarea>
                                    <label
                                      for="desc"
                                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Description
                                    </label>
                                    <p className="text-red-500 text-sm">
                                      sdddd
                                    </p>
                                  </div>
                                  <div class="relative z-0 w-full mb-5 group">
                                    <input
                                      onChange={(e) => {
                                        const selectedFiles = e.target.files;
                                        setInpEditData(selectedFiles);
                                      }}
                                      multiple
                                      type="file"
                                      id="imagecourse"
                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=""
                                      // required
                                      // value={Array.from(dataa)
                                      //   .map((file) => file.name)
                                      //   .join(", ")} // Display selected filenames
                                    />
                                    <label
                                      for="imagecourse"
                                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Data
                                    </label>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      editContent(
                                        items.id,
                                        items.title,
                                        items.desc
                                      )
                                    }
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* <p className="hover: underline cursor-pointer text-sm hover:text-red-500">re</p> */}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              : data &&
                Array.isArray(data.quizzes) &&
                data.quizzes.map((items, index) => (
                  <div className=" group flex justify-between items-start  space-y-1 pb-1  hover:bg-slate-200 cursor-default ">
                    <input type="checkbox" name="" id="" />
                    <div
                      className="flex flex-col space-y-1 pb-1  items-start pl-2 w-full"
                      onClick={() => clickquiz(items.id)}
                    >
                      <h1 className="text-center text-xl text-black group-hover:text-black ">
                        {items.title.length > 50
                          ? `${items.title.substring(0, 50)}...`
                          : items.title}
                      </h1>
                      <p className="text-gray-400 group-hover:text-gray-800 pl-1">
                        {items.question.length > 80
                          ? `${items.question.substring(0, 80)}...`
                          : items.question}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p
                        className="pr-1 font-bold text-lg cursor-pointer"
                        onClick={() => showDeleteQuiz(index)}
                      >
                        ...
                      </p>
                      {/* lera esh akay  */}
                      {showDivQuiz === index && (
                        <div className="w-20 flex flex-col justify-center items-center space-y-1 bg-white shadow-md rounded-sm py-2 ">
                          <p
                            onClick={() => deleteQuiz(items.id)}
                            className="hover:underline cursor-pointer text-sm hover:text-red-500 hover:bg-gray-300 w-full"
                          >
                            Delete
                          </p>
                          <p
                            onClick={() =>
                              showEditQuiz(
                                items.title,
                                items.question,
                                items.correct_answer
                              )
                            }
                            className="hover:underline cursor-pointer text-sm hover:text-blue-500 hover:bg-gray-300 w-full"
                          >
                            Edit
                          </p>
                          {/* modal edit quiz  */}
                          {showModalEditQuiz && (
                            <div
                              className={`${"flex"} modal-content fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
                            >
                              <div className="bg-white rounded-xl w-96">
                                <div className="flex w-full justify-between items-center">
                                  <h1 className="text-xl ps-10 -mb-10 text-green-500">
                                    Edit Lecture
                                  </h1>
                                  <button
                                    onClick={closeEditQuiz}
                                    className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
                                  >
                                    X
                                  </button>
                                </div>
                                <div className="bg-white rounded-xl">
                                  <div class="max-w-md mx-auto p-10">
                                    <div class="relative z-0 w-full mb-5 group">
                                      <input
                                        onChange={(e) => {
                                          setTitleEditQuiz(e.target.value);
                                        }}
                                        value={titleEditQuiz}
                                        type="text"
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
                                      <p className="text-red-500 text-sm w-full ">
                                        sdddd
                                      </p>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                      <textarea
                                        onChange={(e) => {
                                          setEditQuestion(e.target.value);
                                        }}
                                        value={questionEdit}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        rows="3"
                                        placeholder=" "
                                      ></textarea>
                                      <label
                                        for="question"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        Question
                                      </label>
                                      <p className="text-red-500 text-sm">
                                        sdddd
                                      </p>
                                    </div>
                                    <div class="relative z-0 w-96 mb-5 group">
                                      <textarea
                                        onChange={(e) => {
                                          setEditAnswer(e.target.value);
                                        }}
                                        value={answerEdit}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        rows="3"
                                        placeholder=" "
                                      ></textarea>
                                      <label
                                        for="correct ansswer"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                      >
                                        correct ansswer
                                      </label>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => editQuiz(items.id)}
                                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                      update
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/*   modals  --------------------- */}
      {/*   modal quiz */}
      <div
        className={`${
          showmodalquiz ? "flex" : "hidden"
        } modal-content fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
      >
        <div className="bg-white rounded-xl">
          <div className="flex  w-full justify-between items-center">
            <h1 className="text-xl ps-10 -mb-10 text-green-500">Add Quiz</h1>
            <button
              onClick={closeQuiz}
              className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
            >
              X
            </button>
          </div>
          <form class="max-w-md mx-auto p-10" onSubmit={submitQuiz}>
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => {
                  setTitleQuiz(e.target.value);
                }}
                value={titleQuiz}
                type="text"
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
                  setQuestion(e.target.value);
                }}
                value={question}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                rows="3"
                placeholder=" "
              ></textarea>
              <label
                for="question"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Question
              </label>
              <p className="text-red-500 text-sm">sdddd</p>
            </div>
            <div class="relative z-0 w-96 mb-5 group">
              <textarea
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                value={answer}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                rows="3"
                placeholder=" "
              ></textarea>
              <label
                for="correct ansswer"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                correct ansswer
              </label>
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
      {/*   modal content */}
      <div
        className={`${
          showmodalcontent ? "flex" : "hidden"
        } modal-content fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center `}
      >
        <div className="bg-white rounded-xl w-96">
          <div className="flex  w-full justify-between items-center">
            <h1 className="text-xl ps-10 -mb-10 text-green-500">Add Lecture</h1>
            <button
              onClick={closecontent}
              className="hover:bg-red-700 py-1 px-3 bg-red-500 text-white font-semibold rounded-tr-xl"
            >
              X
            </button>
          </div>
          <form class="max-w-md mx-auto p-10 " onSubmit={submitContent}>
            <div class="relative z-0 w-full mb-5 group">
              <input
                onChange={(e) => {
                  setTitleContent(e.target.value);
                }}
                value={titleContent}
                type="text"
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
                  setdescriptionContent(e.target.value);
                }}
                value={descriptionContent}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  border-t-transparent  border-x-transparent border-b-gray-200  focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500  disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700  dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                rows="3"
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
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="file"
                id="file"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              <label
                for="imagecourse"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Data
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            {errors.length > 0 && (
              <div className="mb-5 mt-5">
                <ul className="text-red-500">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contentcourse;
