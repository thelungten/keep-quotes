function Form() {
  return (
    <div className="flex justify-center">
      <form
        className="bg-[#678983] p-5 w-96 flex flex-col mt-4 rounded-md"
        action=""
      >
        <textarea
          className="h-20 rounded-md p-2"
          type="text"
          placeholder="What's your favorite quote?"
        />
        <input
          className="rounded-md mt-3 h-8 p-2"
          type="text"
          placeholder="Who said it?"
        />
        <button
          className="mt-3 bg-[#E6DDC4] w-20 rounded-md font-bold p-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
