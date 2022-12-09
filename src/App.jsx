import { useState, useEffect } from "react";
import Title from "./components/Title";
import Icons from "./components/Icons";
import Form from "./components/Form";
import QuoteCard from "./components/QuoteCard";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  const [quotes, setQuotes] = useState([]);
  const quotesCollectionRef = collection(db, "Quotes");

  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  //getting the data

  useEffect(() => {
    const getQuotes = async () => {
      const data = await getDocs(quotesCollectionRef);

      setQuotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getQuotes();
  }, []);

  // create

  const createQuote = async (e) => {
    e.preventDefault();
    if (newQuote === "") {
      alert("Well, silence can't be a quote!");
    } else if (newQuote.length < 10) {
      alert("A little more letters would sound great!");
    } else {
      if (newAuthor === "") {
        alert("Someone would have said it, I am sure!");
      } else {
        await addDoc(quotesCollectionRef, {
          quote: newQuote,
          author: newAuthor,
        });
        location.reload();
      }
    }
  };

  const quoteSetter = (e) => {
    setNewQuote(e.target.value);
  };

  const authorSetter = (e) => {
    setNewAuthor(e.target.value);
  };

  // delete

  const deleter = async (id) => {
    const quoteDoc = doc(db, "Quotes", id);
    await deleteDoc(quoteDoc);
    location.reload();
  };

  return (
    <div className="font-[Poppins]">
      <Title />
      <Icons />
      <Form
        quoteSetter={quoteSetter}
        authorSetter={authorSetter}
        clickHandler={createQuote}
        data={quotesCollectionRef}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {quotes.map((quote) => {
          return (
            <QuoteCard
              deleter={() => {
                deleter(quote.id);
              }}
              key={quote.id}
              quote={quote.quote}
              author={quote.author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
