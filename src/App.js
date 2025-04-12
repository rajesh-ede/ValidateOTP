import { useState, useRef, useEffect } from "react";
import "./styles.css";
const OTP_DIGIT_COUNT = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);

    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };
  const handleOnKeyDown = (e, index) => {
    console.log(e);
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h1>Valid OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
