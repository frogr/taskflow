import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'system-ui',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1>🚀 TaskFlow</h1>
      <p>Vite + React + Rails is working!</p>
      <button onClick={() => alert('React is alive!')}>
        Test React
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)