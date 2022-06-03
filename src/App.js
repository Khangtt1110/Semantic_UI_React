import HeaderHomepage from "./components/HeaderHomepage";
import Body from "./components/Body";
import Footer from "./components/Footer";
import styles from './style/App.module.scss'

function App() {
  return (
    <div className={styles.body}>
      <HeaderHomepage />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
