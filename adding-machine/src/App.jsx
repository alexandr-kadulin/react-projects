import { useState } from "react";

const BUTTONS = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "*" },
  { id: "seven", value: "7" },
  { id: "eight", value: "8" },
  { id: "nine", value: "9" },
  { id: "subtract", value: "-" },
  { id: "four", value: "4" },
  { id: "five", value: "5" },
  { id: "six", value: "6" },
  { id: "add", value: "+" },
  { id: "one", value: "1" },
  { id: "two", value: "2" },
  { id: "three", value: "3" },
  { id: "zero", value: "0" },
  { id: "decimal", value: "." },
  { id: "equals", value: "=" },
];

const OPERATORS = ["*", "/", "+", "-"];

export default function App() {
  const [output, setOutput] = useState("");
  let numbers, lastNumber, result;

  const handleClick = (id, value) => {
    switch (id) {
      case "clear":
        setOutput("");
        return;
      case "equals":
        numbers = output.split(/[*/+-]/).filter((num) => num !== "");

        if (numbers.length < 2) {
          return;
        }
        // avoiding eval, finding and removing leading zeros
        result = new Function(
          `return ${output.replace(/(^|[-+*/])(0+)(?=\d)/g, "$1")}`,
        )();

        if (
          result.toString().includes(".") &&
          result.toString().slice(result.toString().indexOf(".") + 1).length > 4
        ) {
          result = result.toFixed(4);
        }

        setOutput(result.toString());
        return;
      case "decimal":
        numbers = output.split(/[*/+-]/);
        lastNumber = numbers[numbers.length - 1];

        if (lastNumber.includes(".")) {
          return;
        }

        setOutput((output) => output + value);
        return;
      case "zero":
        numbers = output.split(/[*/+-]/);
        lastNumber = numbers[numbers.length - 1];

        if (lastNumber.startsWith(value) && lastNumber.length === 1) {
          return;
        }

        setOutput((output) => output + value);
        return;
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
        setOutput((output) => output + value);
        return;
      case "multiply":
      case "divide":
      case "add":
      case "subtract":
        if (output.endsWith(value) || !output.length) {
          return;
        }

        if (
          output.endsWith("-") &&
          OPERATORS.includes(output[output.length - 2])
        ) {
          setOutput((output) => output.slice(0, -2) + value);
          return;
        }

        if (OPERATORS.includes(output[output.length - 1]) && value !== "-") {
          setOutput((output) => output.replace(/.$/, value));
          return;
        }

        setOutput((output) => output + value);
        return;
      default:
        return;
    }
  };

  return (
    <div className="relative w-72">
      <div className="relative grid">
        <h2
          id="display"
          className="relative mb-3 h-24 px-5 text-right overflow-hidden select-none"
        >
          {output || 0}
        </h2>
        {BUTTONS.map((button) => {
          const { id, value } = button;

          return (
            <span
              key={id}
              id={id}
              className="relative p-2.5 m-1.5 min-w-10 flex justify-center items-center rounded-md cursor-pointer select-none"
              onClick={() => handleClick(id, value)}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}
