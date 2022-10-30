import './app.scss';
import Header from '../header/header';
import ShortenerForm from '../shortener-form/shortener-form';
import UrlList from '../url-list/url-list';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main container">
        <ShortenerForm />
        <UrlList />
      </main>

    </div>
  );
}

export default App;
