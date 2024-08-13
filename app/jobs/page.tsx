import React from "react";
import { PrimaryButton } from "../components/Buttons";

function page() {
  return (
    <div className="grid grid-cols-12 h-full py-5 px-5 gap-x-5">
      <div className="col-span-8 py-5 flex flex-col space-y-2">
        <div>
          <h1 className="text-3xl font-medium">Coming Soon</h1>
        </div>
      </div>
      <div className="col-span-4 flex flex-col space-y-14">
        {/* <div className=" bg-white rounded-2xl px-2 py-5 h-fit shadow-lg sticky top-10 flex flex-col space-y-10">
          <div className="flex flex-col space-y-5">
            <div>
              <h1 className="text-3xl">OpenSource Repos</h1>
              <p className="text-sm text-gray-500">
                Get Started with Open Source Contributions
              </p>
            </div>
            <div className="w-full flex flex-col text-white space-y-3">
              <PrimaryButton
                href={"https://github.com/code100x/tiplink"}
                target="_blank"
              >
                Tiplink
              </PrimaryButton>
              <PrimaryButton
                href={"https://github.com/code100x/job-board"}
                target="_blank"
              >
                JobBoard
              </PrimaryButton>
              <PrimaryButton
                href={"https://github.com/code100x"}
                target="_blank"
              >
                code100x
              </PrimaryButton>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default page;
