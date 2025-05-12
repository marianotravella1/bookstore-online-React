import React from 'react'

const Protected = ({ isSignedIn, children }) => {
  return (
    <div>
      {isSignedIn ? (
        children
      ) : (
        <div>
          <h2>Access Denied</h2>
          <p>You need to be signed in to access this page.</p>
        </div>
      )}
    </div>
  )
}

export default Protected