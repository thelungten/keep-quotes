function QuoteCard(props) {
  return (
    <div className="bg-[#E6DDC4] w-48 h-60 m-auto mt-5 p-4 flex flex-col justify-between drop-shadow-md rounded-md relative">
      <img
        onClick={props.deleter}
        className="w-4 absolute top-1 right-1 opacity-50 active:opacity-90 hover:opacity-70 cursor-pointer"
        src="src/assets/x.png"
        alt=""
      />
      <p>{props.quote}</p>
      <p className="font-bold">{props.author}</p>
    </div>
  );
}
export default QuoteCard;
