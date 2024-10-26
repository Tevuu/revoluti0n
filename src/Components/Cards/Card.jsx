export const Card = ({ setCard, card, inf }) => {
  const handleClose1 = (e) => {
    if (e.target.id === "exit1") {
      setCard(false);
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[10] backdrop-blur-lg"
      id="exit1"
      onClick={handleClose1}>
      <div className="flex flex-col p-2 sm:w-[90%] md:w-[90%] xl:w-[70%] 2xl:w-[80%] h-[400px] lg:h-[350px] xl:h-[600px] 2xl:h-auto items-center justify-center rounded-xl bg-neutral-200 gap-4 overflow-y-auto overflow-x-hidden">
        <div className="font-Krona flex-col items-center justify-center text-center gap-4 w-full h-full ">
          <div className="flex w-full relative justify-center items-center">
            <p className="text-[19.2px] text-gray-900 select-none p-4">
              {inf.name}
            </p>
            <button
              className="absolute right-4 top-4 hover:rotate-180 duration-500"
              onClick={() => setCard(false)}>
              X
            </button>
          </div>
          <div className="w-full bg-white/80 rounded-xl blur-[0.5px] h-[0.5px] " />
          <div className="flex flex-col gap-4 w-full h-auto p-8 justify-center items-center">
            <div className="flex flex-col 2xl:flex-row-reverse items-center gap-8 w-full">
              <div className="flex w-full h-full justify-center ">
                <div className="flex w-full h justify-center  gap-2">
                  <img
                    className="max-w-[450px] rounded-lg object-cover"
                    src="https://ftp.rentshops.ru/shop_1147/400692d6dd86b818c333bb8f64f83feb.png"></img>
                  <div className="flex flex-col items-center justify-start gap-4">
                    <img
                      src="https://ftp.rentshops.ru/shop_1147/bb2239daa2a16598f10def7072aa88fb.png"
                      className="rounded-lg max-w-[300px]"
                    />
                    <img
                      src="https://avatars.mds.yandex.net/i?id=dac1bf64d00c41fbea836cebd700dc22_l-4576362-images-thumbs&n=13"
                      className="rounded-lg max-w-[300px]"
                    />
                    <img
                      src="https://crazycapystore.com/wp-content/uploads/2024/07/f6bca45c047f17f3ec2897eba1b6c3f9.jpeg"
                      className="rounded-lg max-w-[300px]"
                    />
                    <img
                      src="https://steamuserimages-a.akamaihd.net/ugc/1773832368404892066/C583DAF7A69BE3FE847130A0699FFE57B16858FD/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
                      className="rounded-lg max-w-[300px]"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:text-[16px] text-[10px] flex flex-col h-full gap-2 w-full text-justify text-black/90 drop-shadow-xl rounded-lg ">
                <p className="text-center">Some Name Here.</p>
                <p className="text-center text-sm text-green-700">Undetected</p>
                <p> AIM ASSIST </p>

                <p className="text-sm text-left">
                  Enabled / Enable the aimbot, the "vector" aimbot will be
                  enabled by default Aim precision / Set the aiming accuracy of
                  a vector aimbot Silent aimbot / Enable silent aimbot, when it
                  is activated, the "vector" aimbot will be disabled Aim key /
                  Set the key for the aimbot to work Aim radius / Set the radius
                  for the aimbot to work Random spot / Enable the selection of a
                  random body part for an aimbot Auto switch / Automatic
                  switching to the next target within the range of the aimbot
                </p>

                <p> ESP </p>

                <p className="text-sm text-left">
                  Enabled / Enable ESP Show bounding box / Display 2D boxing on
                  an opponent Show name / Display names Show skeleton / Display
                  the player's skeleton Show weapon / Display the player's
                  current weapon Show distance / Display the distance to the
                  player Show prediction marker / Display the lead point (up to
                  500 meters) Show player inventory / Set the key to display the
                  contents of the player's inventory Show chernarus cities / Set
                  the key to display all cities and settlements on the map
                </p>

                <p> MISC </p>

                <p className="text-sm text-left">
                  Enabled / Enable MISC functions Always day / Enable a
                  permanent day Remove grass / Disable the display of grass,
                  bushes Aspect ratio / Name the aspect ratio of the
                </p>
                <p> SOFT UI </p>

                <p className="text-sm text-left">
                  Menu key / Set the key to display the menu (by default, the
                  menu opens with the "Home" key) Panic Key "Delete" / Panic key
                  "Delete" which turns off all functions Battlemode key / Set
                  the key to hide all visuals except for the players Save CPU /
                  Slow down the cheat by reducing the CPU load Show fov /
                  Display the aiming radius of the aimbot Show cross / Display
                  the crosshair in the center of the screen
                </p>
              </div>
            </div>
            <div className="w-full h-min flex flex-col 2xl:flex-row gap-4 justify-between items-center">
              <div className=" w-full font-Krona text-white/80 duration-300 flex 2xl:justify-end justify-center grow">
                <a
                  href="https://yourfile"
                  target={"_blank"}
                  className="text-[16px] p-4 w-full bg-[#202020] flex items-center  gap-4 justify-center rounded-lg hover:bg-[#444444] duration-500">
                  <img
                    src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904659-arrow-backup-down-download-save-storage-transfer_122509.png"
                    className="w-4 h-4 invert"
                  />
                  Free Trial 1 day
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
