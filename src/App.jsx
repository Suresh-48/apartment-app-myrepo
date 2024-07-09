import React from "react";
import { BrowserRouter, Route, Routes,Navigate  } from "react-router-dom";
import Register from "./components/member/Register";
import SignIn from "./components/member/SignIn";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import MemberDashboard from "./components/member/MemberDashboard";
import LogIn from "./components/admin/LogIn";
import Header from "./components/member/Header";
import Sidebar from "./components/member/Sidebar";
import ProfileEdit from "./components/member/ProfileEdit";
import ProfilePasswordEdit from "./components/member/ProfilePasswordEdit";
import FamilyMember from "./components/member/FamilyMember";
import Parking from "./components/member/Parking";
import Pet from "./components/member/Pet";
import FamilyMemberList from "./components/member/FamilyMemberList";
import PetsList from "./components/member/PetsList";
import ParkingList from "./components/member/ParkingList";
import Ticket from "./components/member/Ticket";
import TicketList from "./components/member/TicketList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/adminsignin" />} />
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/memberdashboard" element={<MemberDashboard/>}></Route>
        <Route path="/adminsignin" element={<LogIn/>}></Route>
        <Route path="/memberheader" element={<Header/>}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>
        <Route path="/profile-edit" element={<ProfileEdit/>}></Route>
        <Route path="/profile-password-edit" element={<ProfilePasswordEdit/>}></Route>
        <Route path="/family-member" element={<FamilyMember/>}></Route>
        <Route path="/family-member-list" element={<FamilyMemberList/>}></Route>
        <Route path="/parking" element={<Parking/>}></Route>
        <Route path="/parking-list" element={<ParkingList/>}></Route>
        <Route path="/pets" element={<Pet/>}></Route>
        <Route path="/pets-list" element={<PetsList/>}></Route>
        <Route path="/ticket" element={<Ticket/>}></Route>
        <Route path='/ticket-list' element={<TicketList/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
