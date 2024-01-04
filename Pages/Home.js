import { useEffect, useState } from "react";
import QuoteCard from "../Components/QuoteCard";
import style from "../Styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, isSuccess, isError } from "../Redux/Actions/quoteAction";

function Home() {
  const Loading = useSelector((state) => state.Loading);
  const error = useSelector((state) => state.err);
  const quote = useSelector((state) => state.quote);
  console.log(quote);
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  const getNewQuote = async () => {
    dispatch(isLoading());
    try {
      let data;
      if (!tag || tag === "Random") {
        data = await fetch("https://api.quotable.io/quotes/random");
      } else {
        data = await fetch(`https://api.quotable.io/quotes/random?tags=${tag}`);
      }
      const q = await data.json();
      if (q) dispatch(isSuccess(q));
    } catch (e) {
      dispatch(isError(e.message));
      console.log(e.message);
    }
  };

  const handleChange = (e) => {
    setTag(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getNewQuote();
  }, [tag]);

  return (
    <div className={style.container}>
      {Loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h5>{error}</h5>
      ) : (
        <QuoteCard quote={quote} bookmark={false} />
      )}

      <select className={style.dropdwn} onChange={(e) => handleChange(e)}>
        <option>Random</option>
        <option value="Love">Love</option>
        <option value="History">History</option>
        <option value="Technology">Technology</option>
        <option value="Science">Science</option>
      </select>

      <button className={style.btn} onClick={getNewQuote}>
        Next Quote
      </button>
    </div>
  );
}

export default Home;
