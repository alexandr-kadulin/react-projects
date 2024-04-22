import { PiQuotesFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuotes = () => {
    setIsLoading(true);

    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuotes(response.data);
        setQuote(response.data[Math.floor(Math.random() * 16)]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <main className="min-h-screen p-4 sm:p-0 bg-slate-600 grid place-items-center">
      <div id="quote-box">
        {isLoading ? (
          <div className="text-slate-50">Loading...</div>
        ) : (
          <section className="min-w-96 min-h-40 p-4 bg-slate-50 rounded flex flex-col gap-y-4">
            <blockquote id="text" className="text-center text-lg">
              <p className="leading-3">
                <PiQuotesFill className="inline text-4xl text-slate-600" />{" "}
                {quote.text}
              </p>
            </blockquote>
            <div id="author" className="text-right mb-2 italic text-slate-600">
              {quote.author}
            </div>
            <div className="flex justify-between">
              <a
                id="tweet-quote"
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center min-w-12 bg-slate-600 text-slate-50 p-1.5 rounded hover:bg-slate-500 ease-in-out duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
              <button
                id="new-quote"
                className="min-w-32 bg-slate-600 text-slate-50 p-1.5 rounded hover:bg-slate-500 ease-in-out duration-300"
                onClick={() => setQuote(quotes[Math.floor(Math.random() * 16)])}
              >
                New Quote
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
