import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Pages/Page"
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import SelectRoom from "./Pages/SelectRoom";
import CheckInForm from "./Components/CheckInForm";
import BookRoom from "./Pages/BookRoom";
import PaymentRoom from "./Pages/PaymentRoom";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";

function App() {

  return (
    <>
    <Router>
      <div className="max-w-[1380px] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/selectroom" element={<SelectRoom />} />
        <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/paymentroom" element={<PaymentRoom />} />
        <Route path="/checkin" element={<CheckInForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
