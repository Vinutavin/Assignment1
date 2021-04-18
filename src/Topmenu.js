// import "./styles.css";

export default function App(props) {
  return (
    <div classname="Topmenu">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header navbar-header navbar-expand-lg ">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Sports</a>
            </li>
            <li>
              <a href="/">Politics</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
