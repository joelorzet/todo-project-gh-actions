import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			{count}
			<button type='button' onClick={() => setCount((prev) => prev + 1)}>
				Click
			</button>
		</div>
	);
}

export default App;
