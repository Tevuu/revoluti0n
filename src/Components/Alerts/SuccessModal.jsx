export const SuccessModal = ({ setSuccessModal, text }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full z-[5]">
      <div className="flex flex-col p-4 w-[220px] h-[200px] items-center justify-center rounded-xl bg-[#ffffff] gap-4">
        <div className="font-Krona flex-col items-center justify-center text-center">
          <p className="text-[19.2px]">Seccues!</p>
          <p className="text-[12px]">{text}</p>
        </div>
        <div className="flex flex-col gap-4 w-full h-full items-center">
          <img
            className="w-12 h-12"
            src="https://cdn-icons-png.flaticon.com/512/711/711239.png"></img>
          <button
            onClick={() => setSuccessModal(false)}
            className="bg-[#313131] py-2 w-32 rounded-lg font-Krona text-white/80 hover:bg-black/50 duration-300">
            OK!
          </button>
        </div>
      </div>
    </div>
  );
};
