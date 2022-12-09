function Form(props) {
  return (
    <div className="flex justify-center">
      <form
        className="bg-[#678983] p-5 w-96 flex flex-col mt-4 rounded-md drop-shadow-lg"
        action=""
      >
        <textarea
          onChange={props.quoteSetter}
          className="h-20 rounded-md p-2"
          type="text"
          placeholder="What's your favorite quote?"
        />
        <input
          onChange={props.authorSetter}
          className="rounded-md mt-3 h-8 p-2"
          type="text"
          placeholder="Who said it?"
        />
        <button
          onClick={props.clickHandler}
          className="mt-3 bg-[#E6DDC4] w-20 rounded-md font-bold p-1 hover:bg-[#E7D9B1] active:bg-[#CABA8D]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
