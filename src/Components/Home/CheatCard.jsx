export const CheatCard = ({ name, picture, setCard, setInf, card }) => {
  return (
    <button
      className={`w-[350px] bg-neutral-200 rounded-lg p-4 h-[300px] opacity-50 hover:opacity-100 duration-700 bg-cover flex-grow`}
      style={{ backgroundImage: `url(${picture})` }}
      onClick={() => {
        setCard(!card);
        setInf({ name: name, picture: picture });
      }}>
      <div className="w-full h-full flex items-center justify-center font-Krona text-white text-[28px] drop-shadow-md select-none">
        {name}
      </div>
    </button>
  );
};
