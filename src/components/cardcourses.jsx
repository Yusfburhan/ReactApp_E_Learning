import image from "../assets/elearning/image/2.jpg";
import img from "../assets/elearning/image/child-315049_1280-removebg-preview.png"
const Cardcourses = (props) => {
  return (
    <div key={props.key} class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
      <div class="relative w-2/5 max-h-96 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
        src={`http://127.0.0.1:8000/${props.image}`}
          alt="card-image"
          class="object-cover w-full "
        />
      </div>
      <div class="p-6">
        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.title}
        </h4>
        <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {props.desc}
        </p>
        <div className="flex justify-between  mb-3">
            <h6 class="flex items-center space-x-2   mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
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
              <circle fill="#FC6F58"
               cx="256" cy="256" r="256" />
              <path fill="#F1543F"
                d="M437.019,437.019c46.599-46.599,71.468-106.694,74.626-167.703L382.526,140.197L212.713,296.512  l-78.002,80.777l134.37,134.372C330.171,508.552,390.359,483.678,437.019,437.019z"
              />
              <circle fill="#FFD15D"
               cx="256" cy="256" r="171.529" />
              <path fill="#F9B54C"
                d="M377.289,134.711c-33.492-33.492-77.39-50.24-121.287-50.24v343.057  c43.898,0,87.795-16.746,121.287-50.24C444.275,310.303,444.275,201.697,377.289,134.711z"
              />
              <circle fill="#E6F3FF"
              cx="256" cy="256" r="133.413" />
              <path fill="#CFDBE6"
                d="M350.336,161.664c-26.05-26.05-60.192-39.076-94.334-39.076v266.823  c34.142,0,68.286-13.026,94.334-39.076C402.437,298.236,402.437,213.764,350.336,161.664z"
              />
              <path fill="#FC6F58"
                d="M148.189,245.177c0-8.909,7.221-16.131,16.131-16.131s16.131,7.221,16.131,16.131  c0-8.909,7.221-16.131,16.131-16.131c8.909,0,16.131,7.221,16.131,16.131c0,15.426-32.261,33.875-32.261,33.875  S148.189,261.472,148.189,245.177z"
              />
              <path fill="#324A5E"
                d="M211.078,312.899c-2.646,0-5.294-1.01-7.313-3.031c-4.041-4.039-4.041-10.588,0-14.626l41.076-41.077  v-83.925c0-5.711,4.632-10.343,10.343-10.343s10.343,4.632,10.343,10.343v88.209c0,2.743-1.09,5.373-3.031,7.313l-44.106,44.106  C216.373,311.889,213.725,312.899,211.078,312.899z"
              />
              <path fill="#2B3B4E"
                d="M256.002,159.939V272.26l6.496-6.496c1.941-1.939,3.031-4.57,3.031-7.313v-88.211  C265.528,164.805,261.33,160.356,256.002,159.939z"
              />
                </svg>
                <span>{props.duration} hourse</span>
            </h6> 
            <div class="flex  items-center">
                <img class="w-8 h-8 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink"/>
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">{props.teacher}</p>
                </div>
            </div>
        </div>
         
        <div className="flex justify-center space-x-10 items-center">
            <p  className="text-blue-1000 font-bold  cursor-default">120000 IQD</p>   
            <a href="#" class="inline-block">
          <button
            class=" bg-blue-500 flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-blue-1000 active:bg-gray-900/20"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
            </a>  
        </div>
        
      </div>
    </div>
  );
};

export default Cardcourses;
