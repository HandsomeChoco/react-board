import Container from '../components/Container';
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
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </GlobalContextProvider>
  );
}

export default App;
