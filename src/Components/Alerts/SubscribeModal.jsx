import { useEffect, useState } from "react";

export const SubscribeModal = ({ setSubModal }) => {
  const [error, setError] = useState(0);
  const [price, setPrice] = useState(0);
  const [promo, setPromo] = useState("");
  const [co, setCo] = useState(0);

  useEffect(() => {
    switch (promo) {
      case "Enjoy":
        setPrice(Math.floor(price - price * 0.1));
        break;
      case "Bunny":
        setPrice(Math.floor(price - price * 0.2));
        break;
    }
  }, [co]);

  const handleClose = (e) => {
    if (e.target.id === "exit") {
      setSubModal(false);
    }
  };
  return (
    <div
      className="backdrop-blur-lg fixed inset-0 flex items-center justify-center z-[5] "
      id="exit"
      onClick={handleClose}>
      <div className="flex flex-col p-4 sm:w-[90%] md:w-[90%] xl:w-[60%] 2xl:w-[40%] h-[600px] lg:h-[650px] xl:h-[850px] 2xl:h-[900px] items-center justify-center rounded-xl bg-neutral-200 gap-4 overflow-y-auto overflow-x-hidden">
        <div className="font-Krona flex-col items-center justify-center text-center gap-4 w-full h-full ">
          <div className="flex w-full relative justify-center items-center">
            <p className="text-[19.2px] text-gray-900 select-none p-4">
              Subscriptions
            </p>
            <button
              className="absolute right-4 top-4 hover:rotate-180 duration-500"
              onClick={() => setSubModal(false)}>
              X
            </button>
          </div>
          <div className="w-full bg-white/80 rounded-xl blur-[0.5px] h-[0.5px] " />
          <div className="flex flex-col gap-4 w-full p-8 justify-center items-center">
            <div className="flex gap-4">
              <div className="sm:text-[16px] text-[10px] flex flex-col w-[70%] h-full text-black/90 drop-shadow-xl rounded-lg text-justify">
                Unlock Ultimate Gaming Power with Deluxe! Deluxe grants you
                access to a complete arsenal of cheats and cracks for your
                favorite games. Boost your gameplay to the next level with
                unmatched advantages. But there's more! By subscribing to
                Deluxe, you directly support crvck hub's growth. We operate
                without ads and rely on our members to keep the service
                thriving. Join the Elite! Choose Deluxe and experience the
                ultimate gaming freedom while helping us build the best cheat
                and crack hub around.
              </div>
              <div className="flex w-1/2 h-auto items-center justify-center">
                <img
                  src="https://papik.pro/uploads/posts/2022-08/1661433652_9-papik-pro-p-stikeri-drein-png-10.png"
                  className="w-72 h-72 object-cover"></img>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                onChange={(e) => {
                  setPromo(e.target.value);
                  setCo(() => co + 1);
                }}
                className="outline-none w-full bg-[#313131] rounded-xl p-3 font-Krona text-white/80"
                placeholder="✨ Promo-Code"></input>

              <div className="w-full bg-[#313131] p-4 flex justify-between rounded-lg gap-2">
                <button
                  className="bg-[#202020] py-12 w-full  text-[10px] sm:text-[20px] rounded-lg font-Krona text-white/80 hover:bg-black/50 duration-300"
                  onClick={() => {
                    setPrice(19.99);
                    setCo(() => co + 1);
                  }}>
                  19.99$ / Month
                </button>
                <button
                  className="bg-[#202020] w-full text-[10px] sm:text-[20px] rounded-lg font-Krona text-white/80 hover:bg-black/50 duration-300"
                  onClick={() => {
                    setPrice(79.99);
                    setCo(() => co + 1);
                  }}>
                  79.99$ / 6 Month
                </button>
                <button
                  className="bg-[#202020] w-full text-[10px] sm:text-[20px] rounded-lg font-Krona text-white/80 hover:bg-black/50 duration-300"
                  onClick={() => {
                    setPrice(179.99);
                    setCo(() => co + 1);
                  }}>
                  179.99$ / Year
                </button>
              </div>
              <div className="w-full bg-[#313131] p-4 flex justify-between rounded-lg">
                <div className="flex flex-col w-full text-justify sm:text-[12px] text-[8px] gap-2 ">
                  <p className="text-white">
                    💵BTC: Fjx82jzk83zvn1nmzsi3n1nakk41
                  </p>
                  <p className="text-white">💸LTC: VK2kzL51nm235m18fn1kJfn1n</p>
                  <p className="text-white">
                    💳XRP: XRP19kxnm12289idh8gh43ksjl
                  </p>
                </div>
              </div>
              <button
                onClick={() => setError(() => error + 1)}
                className="bg-[#202020] py-2 w-full rounded-b-lg font-Krona text-white/80 hover:bg-black/50 duration-300 flex items-center justify-center flex-col">
                <div className="text-[16px]">{`Total: ${
                  price ? price + " $" : "0$"
                } `}</div>
                <p className="text-[10px]">
                  Send the amount to a one-time crypto address
                </p>
              </button>

              {error > 0 ? (
                <div
                  className={
                    error < 5
                      ? "font-Krona text-orange-500 select-none"
                      : "font-Krona text-red-500 select-none"
                  }>
                  {error < 5
                    ? "⚙️ No transactions detected!"
                    : " ❗ You have sent too many requests!"}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
