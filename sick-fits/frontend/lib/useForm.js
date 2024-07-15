import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { name, type, value } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      value[0] = e.target.files;
    }
    setInputs({
      ...prev,
      [name]: e.target.value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  return {
    inputs,
    handleChange,
    resetForm,
  };
}
