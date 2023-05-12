import { useState } from "react"
import ToDo from "./ToDo"

function UseRefExample3() {
    const [showToDo, setShowTodo] = useState(true)
  return <div>
    {showToDo && <ToDo />}
    <button className="btn btn-primary" onClick={() => setShowTodo(!showToDo)}>Toggle ToDo</button>
  </div>
}

export default UseRefExample3