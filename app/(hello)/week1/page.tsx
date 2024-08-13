import { PrimaryButton } from "@/app/components/Buttons";
import W1A1 from "@/app/Assignments/week1/W1A1";
import W1A2 from "@/app/Assignments/week1/W1A2";
import W1A3 from "@/app/Assignments/week1/W1A3";

export default function Week1() {
  return (
    <div className="grid grid-cols-12 h-full py-5 px-5 gap-x-5">
      <div className="col-span-8 py-5 flex flex-col space-y-2">
        <div>
          <h1 className="text-3xl font-medium">Assignments</h1>
        </div>
        <W1A1 />
        <W1A2 />
        <W1A3 />
      </div>
      <div className="col-span-4 bg-white rounded-2xl px-2 py-5 h-fit shadow-lg sticky top-10">
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-3xl">Course Material</h1>
          </div>
          <div className="w-full flex flex-col text-white">
            <PrimaryButton
              href={
                "https://projects.100xdevs.com/tracks/web3-orientation/Web3-Cohort---Orientation-5"
              }
              target="_blank"
            >
              Hashing
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
