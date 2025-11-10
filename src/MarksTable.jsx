function MarksTable({ props }) {
function handleInputChange(index, field, value) {
    const newMarks = [...props.marks];
    newMarks[index] = { ...newMarks[index], [field]: value };
    props.changeMarks(newMarks);
  }

  function handleInputChange(index, field, value) {
    const newMarks = [...props.marks];
    newMarks[index] = { ...newMarks[index], [field]: value };
    props.changeMarks(newMarks);
  }

  return (
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
      <thead className="bg-blue-100">
        <tr>
          <th className="w-1/4 px-20 py-3 text-center text-sm font-semibold text-gray-600 whitespace-nowrap border-b border-r border-gray-200">
            Subject
          </th>

          <th className="w-1/4 px-6 py-3 text-center text-sm font-semibold text-gray-600 whitespace-nowrap border-b border-r border-gray-200">
            Term 1 Theory
          </th>

          {props.submitted ? (
            <th className="w-1/4 px-6 py-3 text-center text-sm font-semibold text-gray-600 whitespace-nowrap border-b border-r border-gray-200">
              Term 2 Theory
            </th>
          ) : null}

          <th className="w-1/4 px-7 py-3 text-center text-sm font-semibold text-gray-600 whitespace-nowrap border-b border-gray-200">
            Final Theory
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {props.marks.map((subject, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="p-0 border-r border-gray-200">
              <input
                type="text"
                value={subject.sub}
                placeholder="Optional"
                onChange={(e) =>
                  handleInputChange(index, "sub", e.target.value)
                }
                className="w-full h-full px-6 py-4 text-center border-0 focus:ring-2 focus:ring-orange-200 focus:outline-none bg-transparent"
              />
            </td>

            <td className="p-0 border-r border-gray-200">
              <input
                type="number"
                min="0"
                max="40"
                value={subject.term1}
                placeholder="Enter marks"
                onChange={(e) =>
                  handleInputChange(index, "term1", e.target.value)
                }
                className="w-full h-full px-6 py-4 text-center appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-0 focus:ring-2 focus:ring-orange-200 focus:outline-none bg-transparent"
              />
            </td>

            {props.submitted ? (
              <td className="px-6 py-4 text-center font-medium text-gray-700 bg-gray-50 border-r border-gray-200">
                {subject.term2}
              </td>
            ) : null}
            
            <td className="p-0">
              <input
                type="number"
                min="0"
                max="80"
                value={subject.final}
                placeholder="Enter marks"
                onChange={(e) =>
                  handleInputChange(index, "final", e.target.value)
                }
                className="w-full h-full px-6 py-4 text-center appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-0 focus:ring-2 focus:ring-orange-200 focus:outline-none bg-transparent"
              />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" className="border-t border-gray-200">
            <button
              type="button"
              onClick={() => {
                props.setMarks([...props.marks, { term1: "", final: "" }]);
              }}
              className="w-full py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors flex justify-center"
            >
              <img
                className="h-5 w-5"
                src="https://raw.githubusercontent.com/garrettspot/2022-term2-marks-CBSE/refs/heads/main/assets/plus.png"
                alt="Add More Subjects"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MarksTable;
