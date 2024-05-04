import "./assets/styles/index.css";
import suv from "./assets/svg/hatchback.svg";


function App() {
  const styles = {
    backgroundColor:'var(--orange)',
    padding:'10px 20px'
  }


  return (
    <>
      <img style={styles} src={suv} alt="" width={60} height={30} />
    </>
  );
}

export default App;
