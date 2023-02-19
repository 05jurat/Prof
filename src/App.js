
import './App.scss'
import Resume from './pages/PageResume/Resume'
import Result from './pages/PageResult/Result'
import Detail from './pages/pageDetail/Detail'
import About from './pages/pageAbout/page_about'
import Abouts from './pages/pagesAbout/About'
import Ends from './pages/PagesEnds/Ends'
import Blanks from './pages/PageBlank/Blank'
import Contact from './pages/PageContact/Page_contact'
import Kalkulyator from './pages/PageKalkulyaator/Kalkulyator'
import List from './pages/pageList/List'
import Registr from './pages/pageRegistr/page_registr'
import ResBuild from './pages/PageResumeBuild/Build'
import Inbox from './pages/pagesInbox/Inbox'
import ProMain from './pages/PagesProfilMain/Main'
import Test from './pages/pagesTest/Test'
import Test2 from './pages/PagesTest2/Test_two'
import Traning2 from './pages/PagesTraning2/Traning_two'
import Traning from './pages/PageTraning/Traning'
import Login from './pages/PageLogin/login'
import {  Routes, Route } from "react-router-dom";
function Blank() {
  return (
       <Routes>
       <Route exact path="/" element={<Blanks/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Detail" element={<Detail/>}/>
       <Route path="/Result" element={<Result/>}/>
       <Route path="/Resume" element={<Resume/>} />
       <Route path="/Traning" element={<Traning/>}/>
       <Route path="/Traning2" element={<Traning2/>}/>
       <Route path="/Test2" element={<Test2/>}/>
       <Route path="/Test" element={<Test/>}/>
       <Route path="/ProMain" element={<ProMain/>} />
       <Route path="/Inbox" element={<Inbox/>}/>
       <Route path="/ResBuild" element={<ResBuild/>}/>
       <Route path="/Registr" element={<Registr/>}/>
       <Route path="/List" element={<List/>}/>
       <Route path="/Kalkulyator" element={<Kalkulyator/>} />
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Ends" element={<Ends/>}/>
       <Route path="/Abouts" element={<Abouts/>}/>
       <Route path='/Login' element ={<Login/>}/>
     </Routes>

  );
}

export default Blank;
