import { increase } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.number);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increase({ number: 10 }));
        }}
      >
        increase
      </button>
    </>
  );
}
