import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/CounterSlice";


function App() {
  const {count} = useSelector((state) => state.counter)
const dispatch = useDispatch();


  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex border border-purple-300 rounded-md bg-slate-300 p-10 gap-4">
          <button onClick={()=> dispatch(increment())} className="px-3 py-2 rounded-md bg-green-400 font-semibold font-mono">
            Increment
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button onClick={()=> dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-400 font-semibold font-mono">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
