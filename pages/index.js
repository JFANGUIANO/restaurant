import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import logo from '../public/vercel.svg';
import testone from '../public/testone.svg';
import car from '../public/car.svg';

 const Index = () => (
    <div>    
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <a href="http://localhost:3000" className="flex items-center">  
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Company de negocios</span>
              </a>
              <div className="flex items-center">
                  <a href="tel:7681127303" className="mr-6 text-sm font-medium text-white dark:text-white hover:underline">(768) 112-7302</a>
                  <Link href="/login"> 
                    <a className="text-sm font-medium text-blue-400 dark:text-blue-500 hover:underline mx-4">Login</a> 
                  </Link>
              </div>
          </div>
      </nav>
      <nav className="bg-gray-700 dark:bg-gray-700">
          <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
              <div className="flex items-center">
                  <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                      <li>
                          <a href="#" className="text-white dark:text-white hover:underline">Company</a>
                      </li>
                      <li>
                          <a href="#" className="text-white dark:text-white hover:underline">Team</a>
                      </li>
                      <li>
                          <a href="#" className="text-white dark:text-white hover:underline">Features</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
   
      <div id="default-carousel" className="mt-4 mx-auto px-4 flex justify-center w-full lg:w-1/2 bg-white" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 justify-center flex justify-center w-1/2">
              {/* <!-- Item 1 --> */}
              <div id="item1" className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20">
                  <Image src={logo} className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width="300px" height="200px"/>
              </div>
              {/* <!-- Item 2 --> */}
              <div id="item2" className="duration-100 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10">
                  <Image src={testone} className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width="300px" height="200px"/>
              </div>
              {/* <!-- Item 3 --> */}
              <div id="item3" className="duration-100 ease-in-out absolute inset-0 transition-all transform translate-y-full z-0">
                  <Image src={car} className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width="300px" height="200px"/>
              </div>
          </div>
     
      </div>

      <div className="flex justify-center py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a>
      </div>

      {/* TESTIMONIOS */}
      <section className="mb-20 text-gray-700">
  <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
      iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
      porro a pariatur veniam.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
    <div className="mb-12 md:mb-0">
      <div className="flex justify-center mb-6">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
          className="rounded-full shadow-lg w-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">Maria Smantha</h5>
      <h6 className="font-semibold text-blue-600 mb-4">Web Developer</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
        tenetur quae quaerat ad velit ab hic tenetur.
      </p>
      <ul className="flex justify-center mb-0">
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star-half-alt"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 536 512"
          >
            <path
              fill="currentColor"
              d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
    <div className="mb-12 md:mb-0">
      <div className="flex justify-center mb-6">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
          className="rounded-full shadow-lg w-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">Lisa Cudrow</h5>
      <h6 className="font-semibold text-blue-600 mb-4">Graphic Designer</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path></svg>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid commodi.
      </p>
      <ul className="flex justify-center mb-0">
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
    <div className="mb-0">
      <div className="flex justify-center mb-6">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
          className="rounded-full shadow-lg w-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">John Smith</h5>
      <h6 className="font-semibold text-blue-600 mb-4">Marketing Specialist</h6>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path></svg>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul className="flex justify-center mb-0">
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="star"
            className="w-4 text-yellow-500"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</section>

      
      
    </div>
 )

 export default Index;
