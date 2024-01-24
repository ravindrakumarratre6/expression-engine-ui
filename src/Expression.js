// src/Expression.js
import React, { useState } from 'react';

const Expression = ({ onAddExpression, onDeleteExpression }) => {
  const [ruleType, setRuleType] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');

  const handleAddExpression = () => {
    if (ruleType && operator && value && score) {
      const newExpression = {
        key: ruleType,
        output: {
          value: parseFloat(value),
          operator,
          score: parseInt(score),
        },
      };
      onAddExpression(newExpression);
      setRuleType('');
      setOperator('');
      setValue('');
      setScore('');
    }
  };

  return (
    <div className='fs-3'>
      <div className="form-group fs-3" >
        <label className="text-light">Rule Type:</label>
        <select
          className="form-control"
          value={ruleType}
          onChange={(e) => setRuleType(e.target.value)}
        >
          <option value="">Select Rule Type</option>
          <option value="age">Age</option>
          <option value="creditScore">Credit Score</option>
          <option value="accountBalance">Account Balance</option>
        </select>
      </div>
      <div className="form-group " >
        <label class="text-light">Operator:</label>
        <select
          className="form-control"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="">Select Operator</option>
          <option value=">">{'>'}</option>
          <option value="<">{'<'}</option>
          <option value=">=">{'>='}</option>
          <option value="<=">{'<='}</option>
          <option value="=">{'='}</option>
        </select>
      </div>
      <div className="form-group">
        <label class="text-light">Value:</label>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label class="text-light">Score:</label>
        <input
          type="text"
          className="form-control"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <div className="container" style={{margin:"10px 0 0 0"}}>
        <button onClick={handleAddExpression}  className="btn btn-outline-primary">
          Add Expression
        </button>
        <span>    </span>
        <button onClick={onDeleteExpression} className="btn btn-outline-danger btn-">
          Delete Expression
        </button>
      </div>
    </div>
  );
};

export default Expression;
