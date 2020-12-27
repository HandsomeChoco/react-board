import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <SideBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
