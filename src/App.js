import Router from "./Components/Router";
import Loading from "./Screens/Loading";
import GlobalStyles from "./Components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <Loading />
    </>
  );
}

export default App;
