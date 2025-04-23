import React from 'react'

function MarksTable({ props }) {
  return (
    <table className="text-center border border-gray-600">
      <thead className="border-b border-gray-600">
        <tr>
          <th className="w-30 border-r border-gray-300">
            Term 1 Theory
          </th>
          <th className="w-30 border-r border-gray-300">
            Final Theory
          </th>
        </tr>
      </thead>
      <tbody>
          {
            props.marks.map((subject, index)=> 
              (
                <tr key={index}>
                  <td className="border-r border-gray-300 justify-center">
                    <input type="number" min="0" max="40" value={subject.term1} className="w-full text-center appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                  </td>
                  <td className="border-r border-gray-300">
                    <input type="number" min="0" max="40" value={subject.final} className="w-full text-center appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                  </td>
                </tr>
              )
            )
          }

        <tr>
          <td colSpan="2" className="border-r border-gray-300 justify-center">
            <button type='button' onClick={ () => {props.setMarks([...props.marks, {term1:"", final:""}])} } className='hover:cursor-pointer w-full'>+</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MarksTable
