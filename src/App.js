import React from 'react';




import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/SignUp';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route  path='/about' exact element={<About/>} />
		<Route exact path='/contact' element={<Contact/>} />
		<Route exact path='/blogs' element={<Blogs/>} />
		<Route exact path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
