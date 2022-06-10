import React from 'react'
import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Switch, Route, Link} from 'react-router-dom'
// import NavbarComp from './components/NavbarComp'

export default function App(){
    return(
        <BrowserRouter>
            <NavbarComp/>
            <Routes>
                <Route path="/" element={<Homepage />}>
                <Route index element={<Homepage />} />
                <Route path="blogs" element={<Homepage />} />
                <Route path="contact" element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>

        // <div>
        //     <NavbarComp/>
        //     <Homepage/>
        //     <Footer/>
        // </div>
    )
}

function Home() {
    return <Homepage/>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}