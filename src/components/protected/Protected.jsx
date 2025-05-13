import React from "react";

const Protected = ({ isSignedIn, children }) => {
  return (
    <div>
      {isSignedIn ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            className="w-20 rounded-full mb-4"
            src="/logo.png"
            alt="logo"
          ></img>
          <h2 className="text-4xl font-bold mb-4">Access Denied</h2>
          <p className="text-lg mb-8">
            You need to be signed in to view this page.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-700 text-white font-extrabold py-2 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Protected;
