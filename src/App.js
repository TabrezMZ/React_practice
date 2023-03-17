import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Q0 from "./Ques/Q0";
import Q1 from "./Ques/Q1";
import Q2 from "./Ques/Q2";
import Q3 from "./Ques/Q3";
import Q4 from "./Ques/Q4";
import Q5 from "./Ques/Q5";
import Q6 from "./Ques/Q6";
import Q7 from "./Ques/Q7";
import Q8 from "./Ques/Q8";
import Q9 from "./Ques/Q9";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Q0" element={<Q0 />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/Q2" element={<Q2 />} />
          <Route path="/Q3" element={<Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5" element={<Q5 />} />
          <Route path="/Q6" element={<Q6 />} />
          <Route path="/Q7" element={<Q7 />} />
          <Route path="/Q8" element={<Q8 />} />
          <Route path="/Q9" element={<Q9 />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
