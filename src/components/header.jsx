const Header = (props) => {
  return (
    <div className="flex justify-center items-center mt-32 mb-0 z-10">
      {/* <div className="w-44  inline-block h-1 bg-blue-350  rounded-l-full"></div> */}
      <h1 className={`text-3xl w-full mb-5 border-blue-350 cursor-default   rounded-xl py-2 bg-blue-350 text-white  `}>
        {props.title}
      </h1>
      {/* <div className="flex justify-center items-center w-full bg-blue-350  h-1 rounded-r-full"></div> */}
    </div>
  );
};

export default Header;
