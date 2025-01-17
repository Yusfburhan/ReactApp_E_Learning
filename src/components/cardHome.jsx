import image from "../assets/elearning/image/2.jpg";
import { useNavigate } from "react-router-dom";
const Cardhome = (props) => {
  const navigate = useNavigate();

  return (
    <div
      key={props.key}
      class=" group duration-300 relative flex flex-col hover:scale-110  mt-6  bg-transparent   w-72 min-w-72  rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md "
    >
      <div class=" relative  h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src={`http://127.0.0.1:8000/${props.image}`} alt="card-image" className="w-full h-full" />
      </div>
      <div class="p-6">
        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black  ">
          {props.name}
        </h5>
        <p class="block font-sans text-base  h-20  antialiased font-light leading-relaxed text-slate-400 group-hover:text-slate-500">
          {/* {props.text} */}
          {props.text.length > 88
            ? `${props.text.substring(0, 88)}...`
            : props.text}
        </p>
        <div className="w-full flex justify-between">
          <p className="text-blue-350  text-sm">{props.price} IQD</p>
          <p class="flex items-center gap-1.5 font-semibold font-sans text-sm  leading-relaxed text-red-400 group-hover:text-red-600 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              class="-mt-0.5 h-5 w-5 text-yellow-700"
              //   xml:space="preserve"
            >
              <circle fill="#FC6F58" cx="256" cy="256" r="256" />
              <path
                fill="#F1543F"
                d="M437.019,437.019c46.599-46.599,71.468-106.694,74.626-167.703L382.526,140.197L212.713,296.512  l-78.002,80.777l134.37,134.372C330.171,508.552,390.359,483.678,437.019,437.019z"
              />
              <circle fill="#FFD15D" cx="256" cy="256" r="171.529" />
              <path
                fill="#F9B54C"
                d="M377.289,134.711c-33.492-33.492-77.39-50.24-121.287-50.24v343.057  c43.898,0,87.795-16.746,121.287-50.24C444.275,310.303,444.275,201.697,377.289,134.711z"
              />
              <circle fill="#E6F3FF" cx="256" cy="256" r="133.413" />
              <path
                fill="#CFDBE6"
                d="M350.336,161.664c-26.05-26.05-60.192-39.076-94.334-39.076v266.823  c34.142,0,68.286-13.026,94.334-39.076C402.437,298.236,402.437,213.764,350.336,161.664z"
              />
              <path
                fill="#FC6F58"
                d="M148.189,245.177c0-8.909,7.221-16.131,16.131-16.131s16.131,7.221,16.131,16.131  c0-8.909,7.221-16.131,16.131-16.131c8.909,0,16.131,7.221,16.131,16.131c0,15.426-32.261,33.875-32.261,33.875  S148.189,261.472,148.189,245.177z"
              />
              <path
                fill="#324A5E"
                d="M211.078,312.899c-2.646,0-5.294-1.01-7.313-3.031c-4.041-4.039-4.041-10.588,0-14.626l41.076-41.077  v-83.925c0-5.711,4.632-10.343,10.343-10.343s10.343,4.632,10.343,10.343v88.209c0,2.743-1.09,5.373-3.031,7.313l-44.106,44.106  C216.373,311.889,213.725,312.899,211.078,312.899z"
              />
              <path
                fill="#2B3B4E"
                d="M256.002,159.939V272.26l6.496-6.496c1.941-1.939,3.031-4.57,3.031-7.313v-88.211  C265.528,164.805,261.33,160.356,256.002,159.939z"
              />
            </svg>
            {props.duration} hourse
          </p>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button
          onClick={props.handelClick}
          class="bg-blue-350 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border hover:bg-blue-600 hover:scale-105 text-white shadow-md shadow-white hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cardhome;
