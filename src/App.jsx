import Calculator from './Calculator'
import './App.css'

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 py-6 my-4 border-b-2 border-blue-500 font-sans shadow-sm">
        Calculate Your CBSE 2021-22 Term-2 Marks
      </h1>
      <Calculator />
      <div className="fixed bottom-4 right-4">
        <a
          href="https://github.com/garrettspot/2022-term2-marks-CBSE/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <img
            src="https://github.com/garrettspot/2022-term2-marks-CBSE/blob/main/assets/github.png"
            alt="GitHub"
            className="h-10"
          />
          <span>Contribute on GitHub</span>
        </a>
      </div>
    </div>
  )
}

export default App
