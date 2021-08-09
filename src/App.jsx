import "./global-styles.scss";
import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Layout />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;