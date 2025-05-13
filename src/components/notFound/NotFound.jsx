import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate("/")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4">404 Not Found</h2>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <button
        onClick={handleGoBack}
        className="bg-blue-700 text-white font-extrabold py-2 px-4 rounded"
      >
        Go Back
      </button>
    </div>
  )
}

export default NotFound