import React from "react";
import testimage from "../Home/HomeCards/image/card-1.jpg"
import '@fortawesome/fontawesome-free/css/all.min.css';


function About() {
  return (
    <section className="bg-theme-light py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-theme-dark">
            The Team Behind FinVidya
          </h2>
        </div>
        <center>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
                <img
                  src={testimage}
                  className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                  alt="Vidit Maheshwari"
                />
                <h3 className="text-lg font-bold uppercase mb-2">Kanika Chanana</h3>
                <div className="text-[#acacac] italic mb-2">COE</div>
                <p className="text-gray-700">
                  {/* Vidit is our founder and has developed strategies for a variety of clients to achieve better risk-adjusted returns. */}
                </p>
                {/* <ul className="flex justify-center mt-4 space-x-3">
                  <li>
                    <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
                <img
                  src={testimage}
                  className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                  alt="Mukesh Ambani"
                />
                <h3 className="text-lg font-bold uppercase mb-2">KASHISH AGGARWAL</h3>
                <div className="text-[#acacac] italic mb-2">COE</div>
                {/* <p className="text-gray-700">
                  Mukesh Ambani, our seasoned investor, brings invaluable financial expertise and unwavering support to our success story. His strategic insights and collaborative spirit make him an integral part of our journey towards prosperity.
                </p>
                <ul className="flex justify-center mt-4 space-x-3">
                  <li>
                    <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
                <img
                  src={testimage}
                  className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                  alt="Mukesh Ambani"
                />
                <h3 className="text-lg font-bold uppercase mb-2">Rupinder Singh Rana</h3>
                <div className="text-[#acacac] italic mb-2">COPC</div>
                {/* <p className="text-gray-700">
                  Mukesh Ambani, our seasoned investor, brings invaluable financial expertise and unwavering support to our success story. His strategic insights and collaborative spirit make him an integral part of our journey towards prosperity.
                </p>
                <ul className="flex justify-center mt-4 space-x-3">
                  <li>
                    <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div className="bg-theme-light text-center p-8 rounded-lg transition duration-300 ease-in-out hover:bg-theme-green hover:text-theme-dark">
                <img
                  src= {testimage}
                  className="mx-auto mb-4 rounded-full bg-gray-300 p-2"
                  alt="Ratan Tata"
                />
                <h3 className="text-lg font-bold uppercase mb-2">Mitali Rajput</h3>
                <div className="text-[#acacac] italic mb-2">COBS</div>
                {/* <p className="text-gray-700">
                  Ratan Tata, our esteemed investor, embodies visionary leadership and commitment to innovation. His invaluable presence enhances our strategic direction and credibility, fostering a shared commitment to excellence and future growth.
                </p>
                <ul className="flex justify-center mt-4 space-x-3">
                  <li>
                    <a href="#" className="bg-[#4099ff] p-2 rounded-full text-white">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#c92228] p-2 rounded-full text-white">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-[#ea4c89] p-2 rounded-full text-white">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
}

export default About;
