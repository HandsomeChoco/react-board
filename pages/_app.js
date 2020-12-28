import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <TopBar />
      <SideBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
