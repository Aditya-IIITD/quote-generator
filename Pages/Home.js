import QuoteCard from "../Components/QuoteCard";
import style from "../Styles/Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <QuoteCard />
      <select>
        <option>Random</option>
        <option>Love</option>
        <option>History</option>
        <option>Technology</option>
        <option>Science</option>
        <option>Social</option>
      </select>

      <button>Next Quote</button>
    </div>
  );
}

export default Home;
