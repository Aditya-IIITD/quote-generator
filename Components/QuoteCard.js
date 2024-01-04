import style from "../Styles/quoteCard.module.css";
import { toast } from "react-toastify";

function QuoteCard({ quote, bookmark }) {
  if (!quote || quote.length === 0) return <></>;
  const q = quote[0];

  const addToBookmark = (q) => {
    const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
    arr.push(q);
    localStorage.setItem("bookmarks", JSON.stringify(arr));
    toast.success("Added To Bookmarks");
  };

  const removeBookmark = (q) => {
    //working on it
    /*const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const newArr = arr.filter((item) => item.id === q.id);
    console.log(arr.length, newArr.length);
    localStorage.setItem("bookmarks", JSON.stringify(newArr));
    toast.success("Bookmark Removed");*/
  };

  return (
    <div className={style.container}>
      <div className={style.quote}>{q.content}</div>
      <div className={style.bottom}>
        <h5 className={style.author}>~ {q.author}</h5>
        <img
          src={
            bookmark
              ? "https://cdn-icons-png.flaticon.com/128/9153/9153963.png"
              : "https://cdn-icons-png.flaticon.com/128/6924/6924811.png"
          }
          alt="bookmark"
          onClick={bookmark ? () => removeBookmark(q) : () => addToBookmark(q)}
        />
      </div>
    </div>
  );
}

export default QuoteCard;
