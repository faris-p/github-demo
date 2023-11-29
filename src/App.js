import NavBar from "./componets/NavBar/NavBar";
import "./App.css"
import Banner from "./componets/Banner/Banner";
import RowPost from "./componets/RowPost/RowPost"; 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
      <RowPost />
    </div>
  );
}

export default App;
