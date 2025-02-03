import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounterHandler());
  };

  function incrementHandler() {
    dispatch(counterAction.increment());
  }
  function increase() {
    dispatch(counterAction.increase(5));
  }
  function decrementHandler() {
    dispatch(counterAction.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>

      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increase}>increase by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
