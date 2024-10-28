import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-start mb-6 lg:mb-0">
          <h1 className='text-3xl font-bold text-white'>FinVidya</h1>
          <div className="flex flex-col">
            <h3 className="text-green-500 font-bold mb-2">Contact us:</h3>
            <p>Email: investing.FinVidya@gmail.com</p>
            {/* <p>Phone: </p> */}
            {/* <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p> */}
          </div>
        </div>

        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <h3 className="font-bold mb-2">Subscribe to news</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l-lg bg-gray-700 text-white border border-gray-600"
            />
            <button className="p-2 bg-green-500 rounded-r-lg text-black font-bold">Subscribe</button>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <nav className="mb-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Use Cases</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-500"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-green-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-green-500"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 pt-6 text-center lg:text-left">
        <p>&copy; 2024 FinVidya. All Rights Reserved.</p>
        <a href="#" className="text-gray-500 hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
