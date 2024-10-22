// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import NavBar from "./components/NavBar/NavBar";
// import News from "./components/News/News";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { router } from "./config/config";
// import Search from "./components/Search/Search";
// import Login from "./components/Login/Login"; // Import the Login component

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true); // Set authentication state to true
//   };

//   return (
//     <>
//       <Router>
//         <NavBar />
//         <Routes>
//           {!isAuthenticated ? (
//             <Route
//               path="/login"
//               element={<Login onLogin={handleLogin} />}
//             />
//           ) : (
//             router.map((path) => (
//               <Route
//                 exact
//                 key={uuidv4()}
//                 path={path.path}
//                 element={
//                   <News
//                     key={path.key}
//                     newscategory={path.category}
//                     country={path.country}
//                   />
//                 }
//               />
//             ))
//           )}
//           <Route path="/search/:query" element={<Search />} />
//           <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login for other routes */}
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;


import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
