import React, { useState, useEffect } from "react";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();
  const [eroorConfirmPassword, setErrorConfirmPassword] = useState();
  const [user, setUser] = useState();
  const [Token, setToken] = useState();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setToken(storedToken);
    setUser(storedUserInfo);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  };
  const showPassword = () => {
    setShowPass((prevState) => !prevState);
  };
  const formData = new FormData();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", "student");
    if (image) {
      formData.append("image", image); // Append the image directly
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const data = await response.json();
      console.log("User registered successfully");
      console.log("Token:", data.token);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  return (
    <div className="container mx-auto ">
      <div className="font-[sans-serif] text-gray-800  max-w-4xl flex items-center mx-auto md:h-screen  shadow-sm pt-32 bg-blue-50">
        <div className="grid md:grid-cols-3  items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-blue-350 to-blue-400 lg:px-8 px-4 py-4">
            <div>
              <h4 className="text-white text-lg font-semibold">
                Create Your Account
              </h4>
              <p className="text-[13px] text-white mt-2">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Simple & Secure Registration
              </h4>
              <p className="text-[13px] text-white mt-2">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <div className="flex items-center md:p-8 p-6 w-full bg-white h-full  lg:ml-auto md:col-span-2  py-6 px-6 sm:px-16">
            <form className="w-full mx-auto" onSubmit={handleRegister}>
              <div className="mb-12">
                <h3 className="text-3xl font-bold ">Create an account</h3>
              </div>
              <div>
                <label className="text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    // required
                    value={formData.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className={`w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-350 px-2 py-3 outline-none ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Enter name"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
                {!errors.name && errors.server && (
                  <p className="text-xs text-red-500 mt-1">{errors.server}</p>
                )}
              </div>

              <div className="mt-8">
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    // required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className={`w-full  bg-transparent text-sm border-b border-gray-300 focus:border-blue-350 px-2 py-3 outline-none ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter email"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
                {!errors.name && errors.server && (
                  <p className="text-xs text-red-500 mt-1">{errors.server}</p>
                )}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    // required
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className={`w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-350 px-2 py-3 outline-none ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter password"
                  />
                  <svg
                    onClick={showPassword}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    // required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className={`w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-350 px-2 py-3 outline-none ${
                      eroorConfirmPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Confirm password"
                  />
                </div>
                {eroorConfirmPassword ? (
                  <p className="text-xs text-red-500 mt-1">
                    {eroorConfirmPassword}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-8">
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    onChange={(e) => {
                      const selectedImage = e.target.files[0];
                      console.log(selectedImage);
                      setImage(selectedImage);
                    }}
                    type="file"
                    id="image"
                    className={`w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-350 px-2 py-3 outline-none ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mt-8">
                <input
                  // required
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded"
                />
                <label htmlFor="agreeTerms" className="ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-350 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="mt-12">
                <button
                  type="submit"
                  className="w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-blue-350 border border-blue-350 focus:outline-none hover:bg-blue-350 hover:text-white duration-200"
                >
                  Register
                </button>
                <p className="text-sm mt-8">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-350 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
