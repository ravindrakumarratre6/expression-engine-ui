import "./App.css"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Expression from './Expression';

function App() {
  const [expressions, setExpressions] = useState([]);
  const [combinator, setCombinator] = useState('and');
console.log("expressions",expressions)
  const handleAddExpression = (newExpression) => {
    console.log("newexpression",newExpression)
    setExpressions([...expressions, newExpression]);
  };

  const handleDeleteExpression = () => {
    if (expressions.length > 0) {
      const updatedExpressions = expressions.slice(0, -1);
      setExpressions(updatedExpressions);
    }
  };

  return (
    <div className="container bg-dark" >
      <div className="bg-dark text-white fs-2">
      <h1 className="text-light">Expression Engine</h1>
      <Expression
        onAddExpression={handleAddExpression}
        onDeleteExpression={handleDeleteExpression}
      />
     
      {/* Display expressions and combinator */}
      <pre className="text-light fs-3" style={{margin:"10px 0 0 0"}}>{JSON.stringify({ rules: expressions, combinator }, null, 1)}</pre>
      </div>
    </div>
  );
}

export default App;