import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    setInputs({
      ...prev,
      [e.target.name]: e.target.value,
    });
  }

  return {
    inputs,
    handleChange,
  };
}
