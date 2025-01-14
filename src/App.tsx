function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-slate-300 p-10 gap-4">
          <button className="px-3 py-2 rounded-md bg-green-400 font-semibold font-mono">
            Increment
          </button>
          <h1 className="text-3xl">0</h1>
          <button className="px-3 py-2 rounded-md bg-red-400 font-semibold font-mono">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
