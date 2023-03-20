import { Routes, Route} from "react-router-dom";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation";
import SignIn from "./components/routes/sign-in/sign-in.component"



//shop page
const Shop = () => {
  return <h1>Im the shop page</h1>;
};

//Navbar


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="Sign-In" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;


