  "use client";

  import data from "./data";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
    const [jokes,setJokes] = useState(undefined)
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const [clicked, setClicked] = useState(false)
    useEffect(()=>{
      const fetchData = async () =>{
        try {
          const jokesurl = await axios.get("https://v2.jokeapi.dev/joke/Programming");
          setJokes(jokesurl.data)
          console.log(jokesurl.data)
        } catch (error) {
          setJokes("error")
        }
        
      }
      fetchData();
    },[   ])
   
    

    return (
      <>
        <h1 className="font-bold text-center text-black text-3xl mb-10">
          {`Welcome to ${data.company.name} at ${data.company.address.state}`}
        </h1>
        <Slider {...settings}>
          {data.company.employees.map((employee) => (
            <div key={employee.id} className="px-2">
              <div className="w-80 h-[28rem]  bg-gray-800 mx-auto font-sans text-white rounded-lg shadow-lg p-6">
                <p className="text-center text-xl font-semibold underline mb-4">
                  Employee Details
                </p>
                <div
                  className="mb-4 w-full h-40 bg-cover bg-white mx-auto rounded-t-lg"
                  style={{ backgroundImage: `url(${employee.url})`, marginBottom:"20px" }}
                ></div>
                <div className="mb-4 flex ">
                  <p className="text-blue-400 font-semibold mb-1">ID Number:</p>
                  <p className="text-gray-300">{employee.id}</p>
                </div>
                <div className="mb-4 flex ">
                  <p className="text-blue-400 font-semibold mb-1">Name:</p>
                  <h1 className="text-lg">{employee.name}</h1>
                </div>
                <div className="mb-4 flex ">
                  <p className="text-blue-400 font-semibold mb-1">Department:</p>
                  <h3 className="text-lg">{employee.department}</h3>
                </div>
                <div className="mb-4 flex ">
                  <p className="text-blue-400 font-semibold mb-1">Working on:</p>
                  {employee.projects.length > 0 ? (
                    employee.projects.map((project) => (
                      <p key={project.id} className="text-gray-300 ml-4">
                        {project.name}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-300 ml-4">Not assigned</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button  onClick={() => setClicked(!clicked)}>
        Fetch Jokes
      </button>
        {jokes ? (
  <div>
    <h1 className="mt-10 text-2xl text-black text-center">{jokes.setup}</h1>
    {jokes.type === "twopart" && (
      <p className="mt-5 text-2xl text-black text-center">{jokes.delivery}</p>
    )}
  </div>
) : jokes === "error" ? (
  <p className="mt-10 text-2xl text-red-500 text-center">Error fetching jokes</p>
) : (
  <p className="mt-10 text-2xl text-gray-500 text-center">Loading jokes...</p>
)}


      </>
    );
  }
