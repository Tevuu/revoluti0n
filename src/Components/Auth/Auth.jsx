import { useEffect, useState } from "react";
import { ErrorModal } from "../Alerts/ErrorModal";
import { SuccessModal } from "../Alerts/SuccessModal";
import { CSSTransition } from "react-transition-group";

export const Auth = ({
  successModal,
  setSuccessModal,
  errorModal,
  setErrorModal,
  setA1,
  load1,
  setLoad1,
}) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [reg, setReg] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const add = (login, password, passwordCheck) => {
    if (!login || !password || !passwordCheck) {
      setInputError(true);
    } else if (passwordCheck === password) {
      localStorage.setItem("CRVCKHUB_LOG", login);
      localStorage.setItem("CRVCKHUB_PAS", password);
      setSuccessModal(true);
      setReg(!reg);
    } else {
      setPasswordError(true);
    }
  };
  const check = (login, password) => {
    if (
      localStorage.getItem("CRVCKHUB_LOG") === login &&
      localStorage.getItem("CRVCKHUB_PAS") === password
    ) {
      setA1(true);
      localStorage.setItem("a1", "True");
    } else {
      setErrorModal(true);
    }
  };
  useEffect(() => {
    setLoad1(!load1);
  }, [1]);
  return (
    <div className={`${load1 ? "opacity-100" : "opacity-0"} duration-[1s]`}>
      <img
        src="https://images.wallpaperscraft.ru/image/single/el_derevia_tuman_189877_4928x3264.jpg"
        className="h-screen w-screen object-cover absolute z-0"></img>
      <div className="z-[1] absolute w-full h-full flex items-center justify-center p-2">
        <div className=" bg-black/20 backdrop-blur-sm min-w-[65%] h-[60%] rounded-2xl drop-shadow-md flex">
          <div className="flex flex-col min-w-[40%] h-full items-center justify-center relative ">
            <div className="border-white h-full w-[0.5px] absolute right-0 bg-white/70 opacity-10"></div>
            <div className="text-white/20 blur-[0.2px] font-Krona text-2xl w-full h-min text-center select-none ">
              P R O J E C T <p> R E V O L U T I O N</p>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 items-center min-w-[60%] h-full gap-8 relative">
            <div className="w-full flex items-center flex-col justify-center gap-4">
              {reg ? (
                <>
                  <div className="flex flex-col justify-center items-center min-w-[100%] h-full gap-4 relative">
                    <input
                      className="outline-none w-[80%] bg-[#313131] rounded-3xl p-3 font-Krona text-white/80"
                      placeholder="🔒 Username"
                      onChange={(e) => setLogin(e.target.value)}></input>
                    <div className="w-[80%] flex relative items-center">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="outline-none w-full bg-[#313131]  rounded-3xl p-3 font-Krona text-white/80"
                        placeholder="🔑 Password"
                        type={
                          !passwordVisibility ? "Password" : "text"
                        }></input>
                      {passwordVisibility ? (
                        <button
                          className="absolute right-4"
                          onClick={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }>
                          🤔
                        </button>
                      ) : (
                        <button
                          className="absolute right-4"
                          onClick={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }>
                          🤫
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="min-w-[40%] bottom-[20%] flex flex-col gap-0.5">
                    <button
                      className="w-full bg-[#313131] py-2 rounded-lg font-Krona text-white/80 hover:bg-white/20 "
                      onClick={() => check(login, password)}>
                      Sign In
                    </button>
                    <div className="flex items-center flex-col font-Krona text-[10px] text-white/20">
                      <div className="select-none">Don't have an account?</div>
                      <button
                        className="hover:text-white/60 duration-200"
                        onClick={() => setReg(!reg)}>
                        SignUp
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center min-w-[100%] h-full gap-4 relative">
                    <input
                      className="outline-none w-[80%] bg-[#313131] rounded-3xl p-3 font-Krona text-white/80"
                      placeholder="🔒 Username"
                      onChange={(e) => setLogin(e.target.value)}></input>
                    <div className="w-[80%] flex relative items-center flex-col gap-4">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="outline-none w-full bg-[#313131]  rounded-3xl p-3 font-Krona text-white/80"
                        placeholder="🔑 Password"
                        type={
                          !passwordVisibility ? "Password" : "text"
                        }></input>

                      <input
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        className="outline-none w-full bg-[#313131]  rounded-3xl p-3 font-Krona text-white/80"
                        placeholder="🔑 Repeat Password"
                        type={
                          !passwordVisibility ? "Password" : "text"
                        }></input>
                      {passwordError ? (
                        <p className="text-red-500 text-sm w-42 h-min">
                          Passwords must be the same!
                        </p>
                      ) : inputError ? (
                        <p className="text-red-500 text-sm w-42 h-min">
                          Fill in all the fields!
                        </p>
                      ) : null}
                      {passwordVisibility ? (
                        <button
                          className="absolute right-4 top-3"
                          onClick={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }>
                          🤔
                        </button>
                      ) : (
                        <button
                          className="absolute right-4 top-3"
                          onClick={() =>
                            setPasswordVisibility(!passwordVisibility)
                          }>
                          🤫
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="min-w-[40%] bottom-[20%] flex flex-col gap-0.5">
                    <button
                      className="w-full bg-[#313131] py-2 rounded-lg font-Krona text-white/80 hover:bg-white/20 "
                      onClick={() => add(login, password, passwordCheck)}>
                      SignUp
                    </button>
                    <div className="flex items-center flex-col font-Krona text-[10px] text-white/20">
                      <div className="select-none">Have an account?</div>
                      <button
                        className="hover:text-white/60 duration-200"
                        onClick={() => setReg(!reg)}>
                        SignIn
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CSSTransition
          in={successModal}
          classNames="my-node"
          timeout={300}
          unmountOnExit>
          <SuccessModal
            setSuccessModal={setSuccessModal}
            text={"You are welcome ✨"}
          />
        </CSSTransition>
      </div>

      <div>
        <CSSTransition
          in={errorModal}
          classNames="my-node"
          timeout={300}
          unmountOnExit>
          <ErrorModal
            setErrorModal={setErrorModal}
            text={"Incorrect username or password"}
          />
        </CSSTransition>
      </div>
    </div>
  );
};
