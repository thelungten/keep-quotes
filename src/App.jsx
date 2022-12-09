import { useState } from "react";
import Title from "./components/Title";
import Icons from "./components/Icons";
import Form from "./components/Form";
import QuoteCard from "./components/QuoteCard";

const quotes = [
  {
    quote: "a thing os beauty is joy forever",
    author: "john green",
  },
  {
    quote: "be the change you wish to see in this world",
    author: "mahatma gandhi",
  },
  {
    quote: "to be or not to be, that is the question",
    author: "william shakespeare",
  },
  {
    quote:
      "life is like a box of chocolates, you never know what you are gonna get",
    author: "tom hanks",
  },
];

function App() {
  return (
    <div className="font-[Poppins]">
      <Title />
      <Icons />
      <Form />
      <div className="grid">
        {quotes.map((quote) => {
          return <QuoteCard quote={quote.quote} author={quote.author} />;
        })}
      </div>
    </div>
  );
}

export default App;
