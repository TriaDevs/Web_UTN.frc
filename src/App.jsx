import styles from "./style";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Subjects,
} from "./components";

const NavBarLanding = () => {
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
  </div>;
};

const Landing = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      ;
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <CTA />
        </div>
      </div>
    </div>
  );
};

const MateriasAlgebra = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<MateriasAlgebra />} />
        <Route path="/ingreso" element={<MateriasAlgebra />}/>
        <Route path="/ingreso/matematica" element={<MateriasAlgebra />}/>
        <Route path="/basicas/fisicai" element={<MateriasAlgebra />}/>
        <Route path="/basicas/fisicaii" element={<MateriasAlgebra />}/>
        <Route path="/basicas/ami" element={<MateriasAlgebra />}/>
        <Route path="/basicas/algebra" element={<MateriasAlgebra />}/>
        <Route path="/basicas/pye" element={<MateriasAlgebra />}/>
        <Route path="/sistemas/algebra" element={<MateriasAlgebra />}/>
        <Route path="/sistemas/algebra" element={<MateriasAlgebra />}/>
        <Route path="/sistemas/algebra" element={<MateriasAlgebra />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
