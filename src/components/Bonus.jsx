import React from "react";

const Bonus = () => {
  return (
    <div className="w-[50%] mx-auto mb-16">
      <div className="border-2 rounded-xl p-5 mb-3">
        <h5 className="text-xl font-bold mb-3">Difference between props and state?</h5>
        <p>The difference comes in which component the data are owned.
          State is owned locally and the component itself updates it.
          Props are owned and read-only by a parent.
          Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
      </div>
      <div className="border-2 rounded-xl p-5 mb-3">
        <h5 className="text-xl font-bold mb-3">How do work useslState()</h5>
        <p>useState is React Hook that allows you to add state to a functional component.
          It returns an array with two values: the current state and a function to update it.
          The Hook takes an initial state value as an argument and returns an
          updated state value whenever the setter function is called.</p>
      </div>
      <div className="border-2 rounded-xl p-5 mb-3">
        <h5 className="text-xl font-bold mb-3">What is the job of useEffect()</h5>
        <p>The useEffect Hook allows you to perform side effects in your components.
          Some examples of side effects are: fetching data, directly updating the DOM, and timers.
          useEffect accepts two arguments. The second argument is optional.</p>
      </div>
      <div className="border-2 rounded-xl p-5 mb-3">
        <h5 className="text-xl font-bold mb-3">How does react work?</h5>
        <p>Think of your HTML code as a tree. In fact, that is exactly how the browser treats
          your DOM (your rendered HTML on the browser). React allows you to effectively
          re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
      </div>
    </div>
  );
};


export default Bonus;