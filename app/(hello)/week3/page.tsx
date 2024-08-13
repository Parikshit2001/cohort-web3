import { PrimaryButton } from "@/app/components/Buttons";

export default function Week3() {
  return (
    <div className="grid grid-cols-12 h-full py-5 px-5 gap-x-5">
      <div className="col-span-8 py-5 flex flex-col space-y-2">
        <div>
          <h1 className="text-3xl font-medium">Assignments</h1>
        </div>
      </div>
      <div className="col-span-4 bg-white rounded-2xl px-2 py-5 h-fit shadow-lg sticky top-10">
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-3xl">Course Material</h1>
          </div>
          <div className="w-full flex flex-col text-white">
            <PrimaryButton
              href={
                "https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1"
              }
              target="_blank"
            >
              PublicKey Cryptography
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
