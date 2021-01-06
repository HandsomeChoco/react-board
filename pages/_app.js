import Container from '../src/components/Container';
import Layout from '../src/components/Layout';
import SideBar from '../src/components/SideBar';
import TopBar from '../src/components/TopBar';
import GlobalContextProvider from '../src/reducer/GlobalContext';
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
