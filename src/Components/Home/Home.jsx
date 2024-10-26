import { SubscribeModal } from "../Alerts/SubscribeModal";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useRef, useState } from "react";
import { CheatCard } from "./CheatCard";
import Catergory from "../../Res/Category.json";
import { Card } from "../Cards/Card";

export const Home = ({
  setA1,
  subModal,
  setSubModal,
  load,
  setLoad,
  card,
  setCard,
}) => {
  const [data, setData] = useState([]);
  const [inf, setInf] = useState({});
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    setLoad(!load);
    setData(Catergory);
  }, [1]);
  return (
    <div
      className={`${
        load
          ? "opacity-100 bg-cover max-w-full min-h-screen bg-[url('https://images.wallpaperscraft.ru/image/single/el_derevia_tuman_189877_4928x3264.jpg')]"
          : "opacity-0"
      } duration-[1s]`}>
      <div className="max-h-screen p-4 flex items-center justify-center w-screen">
        <CSSTransition
          nodeRef={ref1}
          in={subModal}
          classNames="my-node"
          timeout={300}
          unmountOnExit>
          <div
            ref={ref1}
            className="backdrop-blur-lg fixed inset-0 flex items-center justify-center z-[5] ">
            <SubscribeModal setSubModal={setSubModal} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={card}
          classNames="my-node"
          timeout={300}
          unmountOnExit
          nodeRef={ref2}>
          <div
            ref={ref2}
            className="fixed inset-0 flex items-center justify-center z-[10] backdrop-blur-lg">
            <Card setCard={setCard} card={card} inf={inf} />
          </div>
        </CSSTransition>
        <div className="bg-black/10 min-w-[60%] h-min p-4 gap-8 rounded-lg flex justify-evenly duration-500 font-Krona text-black/50 relative">
          <button className="hover:text-white/90 duration-500">Home</button>
          <button
            className="hover:text-white/90 duration-500"
            onClick={() => setSubModal(!subModal)}>
            Subscribe
          </button>
          <button
            className="hover:text-white/90 duration-500"
            onClick={() => {
              setA1(false);
              localStorage.removeItem("a1");
              window.location.reload();
            }}>
            Exit
          </button>
        </div>
      </div>
      <div className="w-full h-auto p-4 flex justify-center items-center flex-col gap-2">
        <div className="bg-black/10 w-[60%] h-auto rounded-lg">
          <div className="flex rounded-lg">
            <div className="bg-[url('https://sun9-76.userapi.com/impf/dDqGqe5s_rTn7_KDM0ELUiwuD3h1dVDRP0uNig/nMya6_JbqjM.jpg?size=1920x768&quality=95&crop=42,17,1877,749&sign=2425443ccef2bebd0121766d3afb3c55&type=cover_group')] rounded-lg bg-cover w-full h-[400px]">
              <div className="w-full font-Krona rounded-lg text-neutral-200 drop-shadow-lg hover:backdrop-blur-none backdrop-blur-xl duration-1000  flex flex-col items-center justify-center h-full ">
                <p className="lg:text-[100px] select-none">Res Hacks. </p>
                <p className="text-[62,5px] select-none">Since 2016.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-auto flex justify-center items-center flex-col ">
          <div className="bg-white/10 py-4 w-full h-auto rounded-lg ">
            <p className="text-center font-Krona text-white">
              Daily Category's
            </p>
          </div>
          <div className="flex gap-4 justify-between flex-wrap w-full py-4 items-center ">
            {data.map((item) => (
              <CheatCard
                key={item.id}
                name={item.name}
                picture={item.picture}
                setCard={setCard}
                setInf={setInf}>
                card={card}
              </CheatCard>
            ))}
          </div>
          <div className="flex flex-col w-full  items-center justify-center gap-12">
            <div className="font-Krona bg-white/10 py-4 w-full h-auto rounded-lg text-center text-white/20">
              <p className="text-[16px]">RES CHEAT </p>
              <p className="text-[10px]">2016 - 2024</p>
              <p className="text-[10px]">support@me.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
