import { useRef, useState } from "react";

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const submitRef = useRef(null);
  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { value: areaValue },
    } = e;
    if (areaValue !== "\n") {
      setValue(areaValue);
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      submitRef.current.click();
    }
  };

  return { value, setValue, submitRef, onChange, onKeyDown };
};
