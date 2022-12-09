function QuoteCard(props) {
  return (
    <div className="bg-[#E6DDC4] w-48 h-60 m-6 p-4 flex flex-col justify-between">
      <p>{props.quote}</p>
      <p className="font-bold">{props.author}</p>
    </div>
  );
}
export default QuoteCard;
