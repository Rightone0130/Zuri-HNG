import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import SignUp from './components/signUp/SignUp';
import Siidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/signIn/SignIn';
import { auth } from "./firebase";
import ProtectedRoute from './ProtectedRoutes';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import AuthContainer from './components/authContainer/AuthContainer';
import ListSort from './testpack/ListSort';














function App() {



   const currentUser = auth.currentUser;
 
  console.log(currentUser)
  return (
    <div className="App">
        <Router>
         
          
          {/* <SignUp/> */}
          {/* <SignIn/> */}
          {/* <AuthContainer /> */}
          {/* <ListSort/> */}
            <Routes>
                <Route index element={<LandingPage/>}></Route>
                <Route path="/rightpics/SignIn" element={<SignIn/>}></Route>
                <Route path="/rightpics/SignUp" element={<SignUp/>}></Route>
                {/* <Route path="/rightpics/Dashboard"  authenticated={currentUser} element={<Dashboard/>}></Route> */}
                <Route
            path="/rightpics/Dashboard"
            element={<ProtectedRoute authenticated={currentUser} element={<Dashboard />} />}
          />
                <Route path="movie/:id" element={<>Movie</>}></Route>
                <Route path="movies/:id" element={<>movies</>}></Route>
                <Route path="movies/type/:type" element={<>MoviesList</>}></Route>

                <Route path="/*" element={<>Error Page</>}></Route>
            </Routes>
           
        </Router> 
    </div>
  );
}

export default App;
