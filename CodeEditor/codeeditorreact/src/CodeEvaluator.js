import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios';

const CodeEvaluator = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/evaluate', { code });
      setResult(response.data);
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };

  return (
    <div>
      <h2>React Code Evaluator</h2>
      <CodeMirror value={code} onChange={(editor, data, value) => setCode(value)} />
      <button onClick={handleSubmit}>Submit Code</button>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
};

export default CodeEvaluator;
