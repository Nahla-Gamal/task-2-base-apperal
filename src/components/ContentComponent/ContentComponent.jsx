import "./ContentComponent.css";
import arrow from "../../assets/arrow.svg";
import Logo from "../Logo/Logo";

function ContentComponent() {
  return (
    <div id="contentDiv">
      <div className="desktop">
        <Logo></Logo>
      </div>
      <div id="content-input">
        <div id="content">
          <label className="uppercase">
            <span className="text-secondary light">we're</span> coming soon
          </label>
          <p className="text-secondary">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div id="input-button">
          <input type="email" required placeholder="Email Address"></input>
          <button id="mybtn">
            <img src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContentComponent;
