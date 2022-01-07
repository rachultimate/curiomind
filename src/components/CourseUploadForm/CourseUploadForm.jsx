import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const CourseUploadForm = () => {
  return (
    <>
      <Navbar />
      <div class="w-2/5 m-auto h-screen pt-20">
        <p className="flex justify-center text-2xl p-2 border-b-4 border-blue-500 mb-5">
          UPLOAD COURSE
        </p>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-200">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Name of Course <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter Course Name"
            />
            <p className="text-red-500 text-xs p-2 italic">
              Please fill out this field.
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Course Category <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter Course Category"
            />
            <p className="text-red-500 text-xs p-2 italic">
              Please fill out this field.
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Course Descriptiom
            </label>
            <input
              className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter Course Description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-light mb-2"
              for="username"
            >
              Instructor Name <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter Instructor Name"
            />
            <p className="text-red-500 text-xs p-2 italic">
              Please fill out this field.
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-light mb-2">
              Image Url
            </label>
            <input
              className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter Image Url"
            />
          </div>
          <div class="mb-4">
            <label className="block text-gray-800  text-sm font-light mb-2">
              Upload Week Videos
            </label>
            <div>
              <label className="block text-gray-500 text-sm font-light mb-2">
                Week 0
              </label>
              <input
                className="shadow appearance-none text-xs border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="link"
                placeholder="https://example.mp4"
              />
            </div>
            <div>
              <label className="block text-gray-500  text-sm font-light mb-2 pt-3">
                Week 1
              </label>
              <input
                className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="link"
                placeholder="https://example.mp4"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-light mb-2 pt-3">
                Week 2
              </label>
              <input
                className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="link"
                placeholder="https://example.mp4"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-light mb-2 pt-3">
                Week 3
              </label>
              <input
                className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="link"
                placeholder="https://example.mp4"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-light mb-2 pt-3">
                Week 4
              </label>
              <input
                className="shadow appearance-none border text-xs rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="link"
                placeholder="https://example.mp4"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default CourseUploadForm
