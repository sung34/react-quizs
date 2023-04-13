import './App.css'
import Counter from './components/Counter'
import Clocks from './components/Clocks'

function App() {
  return (
    <>
      <h1>{"<카운터 예제>"}</h1>
      <Counter />
      <h1>{"<세계 시계 예제>"}</h1>
      <Clocks />
    </>
  )
}

export default App
