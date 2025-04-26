import { useMemo, useState } from "react";
import "./App.css";
import MarksTable from "./MarksTable";

function Calculator() {
  const [marks, setMarks] = useState(() => {
    let val = localStorage.getItem("cbse 2022 marks");
    return val ? JSON.parse(val) : [{ sub: "", marks: 40, term1: "", final: "" }];
  });

  const [submitted, setSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    const updatedMarks = marks.map((subject) => ({
      ...subject,
      term2: calculate(subject.term1, subject.final),
    }));
    setMarks(updatedMarks);
    setSubmitted(true);
  }

  function changeMarks(newMarks) {
    setMarks(newMarks);
    localStorage.setItem("cbse 2022 marks", JSON.stringify(newMarks));
  }

  function calculate(term1Raw, finalScore) {
    const term1Weighted = (term1Raw * 60) / 100;
    const term2Weighted = finalScore - term1Weighted;
    const term2Raw = (term2Weighted * 100) / 140;
    return Math.round(term2Raw);
  }

  return (
    <>
      <div className="flex pt-20 justify-center">
        <form
          onSubmit={submit}
          className="flex flex-col items-center w-full max-w-md px-4"
        >
          <MarksTable props={{ marks, changeMarks, setMarks, submitted }} />
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 border border-gray-400 rounded px-4 py-2 mt-4"
          >
            Calculate Marks
          </button>
        </form>
      </div>
      <div className="fixed bottom-4 left-4 text-sm text-gray-500">
        <a 
          target="_blank" 
          href="https://icons8.com/icon/3220/plus"
          className="text-gray-600 hover:text-gray-900"
        >
          Plus
        </a>{" "}
        icon by{" "}
        <a 
          target="_blank" 
          href="https://icons8.com"
          className="text-gray-600 hover:text-gray-900"
        >
          Icons8
        </a>
      </div>
    </>
  );
}

export default Calculator;
