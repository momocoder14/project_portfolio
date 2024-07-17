import React from "react";

const Stats = () => {
  return (
    <>
      <p className="text-gray-500 text-center text-lg">See the stats of my </p>
      <h1 className="text-center text-3xl md:text-4xl font-medium mb-10">
        Mobile Apps
      </h1>
      <div className="flex justify-center items-center py-10">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard">
              <div className="stats shadow-lg flex flex-col space-y-4 bg-white rounded-lg p-4">
                <h1 className="text-center text-gray-600">Mobile App Stats</h1>
                <div className="stat bg-gray-100 text-gray-500 p-4 rounded-lg">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value text-2xl font-bold">5K</div>
                </div>

                <div className="stat bg-gray-100 text-gray-500 p-4 rounded-lg">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Users</div>
                  <div className="stat-value text-2xl font-bold">1,200</div>
                </div>

                <div className="stat bg-gray-100 text-gray-500 p-4 rounded-lg">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value text-2xl font-bold">700</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
