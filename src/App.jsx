import "./App.css";
import ContentComponent from "./components/ContentComponent/ContentComponent";
import PhotoComponent from "./components/PhotoComponent/PhotoComponent";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div id="main">
      <div className=" mobile">
        <Logo></Logo>
      </div>
      <div className="section-content">
        <ContentComponent></ContentComponent>
        <PhotoComponent></PhotoComponent>
      </div>
    </div>
  );
}

export default App;
