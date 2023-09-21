import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import SignUp from './components/signUp/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/signIn/SignIn';
import { auth } from "./firebase";
import ProtectedRoute from './ProtectedRoutes';







function App() {



   const currentUser = auth.currentUser;
 
  console.log(currentUser)
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route index element={<LandingPage/>}></Route>
                <Route path="/rightpics/SignIn" element={<SignIn/>}></Route>
                <Route path="/rightpics/SignUp" element={<SignUp/>}></Route>
                <Route
                 path="/rightpics/Dashboard"
                 element={<ProtectedRoute authenticated={currentUser} element={<Dashboard />} />}
                 />
                <Route path="/*" element={<>Error Page</>}></Route>
            </Routes>
           
        </Router> 
    </div>
  );
}

export default App;
