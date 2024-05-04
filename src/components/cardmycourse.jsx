
const Cardmycourse = (props) => {
  return (
    <div key={props.id} class="group  hover:scale-105 relative flex w-64 h-96 max-w-96 flex-col rounded-xl bg-transparent  bg-clip-border text-gray-700 shadow-sm shadow-gray-300 z-0">
      <div class="relative mx-4 mt-4 overflow-hidden text-white  rounded-xl bg-gradient-to-r to-yellow-100 from-blue-1000 bg-clip-border shadow-yellow-1">
        <img src={`http://127.0.0.1:8000/${props.image}`} alt="ui/ux review check" className="h-52 w-full" />
        <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
        </button>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-center mb-1">
          <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-black  ">
            {props.name}
          </h5>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button onClick={props.click}
          class="block w-full select-none rounded-lg bg-blue-700 hover:bg-blue-1000 hover:scale-110 duration-200 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-blue-1000/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Show coursname{" "}
        </button>
      </div>
    </div>
  );
};

export default Cardmycourse;
