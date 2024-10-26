import { useState } from "react";
import { Auth } from "./Components/Auth/Auth.jsx";
import { Home } from "./Components/Home/Home.jsx";

function App() {
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [subModal, setSubModal] = useState(false);
  const [card, setCard] = useState(false);
  const [a1, setA1] = useState(false);
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);

  return (
    <div className="w-full h-full overflow-x-hidden duration-500">
      {a1 || localStorage.getItem("a1") ? (
        <Home
          setA1={setA1}
          subModal={subModal}
          setSubModal={setSubModal}
          load={load}
          setLoad={setLoad}
          card={card}
          setCard={setCard}
        />
      ) : (
        <Auth
          successModal={successModal}
          setSuccessModal={setSuccessModal}
          errorModal={errorModal}
          setErrorModal={setErrorModal}
          setA1={setA1}
          load1={load1}
          setLoad1={setLoad1}
        />
      )}
    </div>
  );
}

export default App;
