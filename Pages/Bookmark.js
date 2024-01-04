import { useEffect, useState } from "react";
import QuoteCard from "../Components/QuoteCard";
import style from "../Styles/Bookmark.module.css";

function BookMark() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
    console.log(arr);
    setQuotes(arr);
  }, []);
  return (
    <div className={style.container}>
      {quotes.map((quote, index) => (
        <QuoteCard key={index} quote={[quote]} bookmark={true} />
      ))}
    </div>
  );
}

export default BookMark;
