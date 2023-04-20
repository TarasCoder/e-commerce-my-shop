import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import SignIn from "./components/routes/sign-in/Sign-in";



const Shop = () => {
  return (
    <div>
      <h1>Here is the shop!</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
