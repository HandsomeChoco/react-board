import Layout from '../components/Layout';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import GlobalContextProvider from '../reducer/GlobalContext';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <TopBar />
        <SideBar />
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  );
}

export default App;
