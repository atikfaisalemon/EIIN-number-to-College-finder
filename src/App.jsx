import { useState } from "react";
import "./App.css";
import collegeInfo from "./assets/data.json";

function App() {
  const [eiin, setEiin] = useState("");
  const [college, setColege] = useState();
  const [isEmpty, setIsEmpty] = useState(false);

  function handleChange(e) {
    setEiin(e.target.value);
  }

  function searchCollege() {
    const singleCollege = collegeInfo.find((item) => item["EIIN No"] == eiin);
    !singleCollege ? setIsEmpty(true) : setIsEmpty(false);
    setColege(singleCollege);
  }

  const locationArr = college && college["Location"]?.split(" ");
  const distric = locationArr?.length > 1 && locationArr[0];
  const thana = locationArr?.length > 1 && locationArr?.slice(1).join(" ");

  return (
    <>
      <body className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-gray-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Find Out College From EIIN Number In Bangladesh
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 ">
              Enter EIIN Number:
            </label>
            <input
              type="text"
              id="eiin"
              name="eiin"
              placeholder="EIIN-NUMBER"
              className="mt-1 block w-full  py-2 rounded-md shadow-sm sm:text-sm"
              value={eiin}
              onChange={handleChange}
            />
          </div>

          {college && (
            <div id="college-info" className="">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  College Name:
                </label>
                <p id="college-name" className="mt-1 text-gray-900 font-bold">
                  {(college && college["College Name"]) || college["Name"]}
                </p>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  DISTRICT:
                </label>
                <p id="location" className="mt-1 text-gray-900 ">
                  {distric}
                </p>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  THANA:
                </label>
                <p id="location" className="mt-1 text-gray-900 ">
                  {thana}
                </p>
              </div>
            </div>
          )}

          {isEmpty ? <p>No result found</p> : null}

          <div className="mt-6">
            <button
              id="lookup-btn"
              type="button"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              onClick={searchCollege}
            >
              Find College
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-red-400 animate-pulse">
            Ony For <span className="text-green-400 font-bold">RAJSHAHI</span>{" "}
            Board For Now
          </p>
        </div>
      </body>
    </>
  );
}

export default App;
