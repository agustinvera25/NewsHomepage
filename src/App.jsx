import Listcards from "./components/Listcards";
import ListNew from "./components/ListNew";
import MainInformation from "./components/MainInformation";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <MainInformation />
      <ListNew/>
      <Listcards/>
    </>
  );
}

export default App;
