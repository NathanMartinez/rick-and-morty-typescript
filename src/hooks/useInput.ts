import { useState } from "react";

const useInput = (initialState: object) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event: any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return {
    state,
    handleChange,
    handleClick,
  };
};

export default useInput;
