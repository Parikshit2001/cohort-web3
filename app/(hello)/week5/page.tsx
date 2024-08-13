export default function Week5() {
  return (
    <div className="grid grid-cols-12 h-full py-5 px-5 gap-x-5">
      <div className="col-span-8 py-5 flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-medium">Assignment</h1>
        </div>
        <div className="w-full rounded-xl bg-cyan-500">
          <h2 className="text-2xl py-3 px-4 text-white font-medium">Generating SHA-256 Hash</h2>
        </div>
      </div>
      <div className="col-span-4 bg-white rounded-2xl px-2 py-5 h-fit shadow-lg">
        <div>
          <h1 className="text-3xl">Course Material</h1>
        </div>
      </div>
    </div>
  );
}
