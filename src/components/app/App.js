import './App.scss';
import Header from "../header/header";
import ShortenerForm from "../shortener-form/shortener-form";
import UrlList from "../url-list/url-list";

function App() {
  return (
    <div className="app container">

      <Header />

      <main className="main">
        <div className="main__column main__column--left">

          <ShortenerForm />

          <h2 className="main__title">Мои ссылки</h2>
          <UrlList />

        </div>

        <div className="main__column main__column--right">
          <h2 className="main__title">Список ссылок</h2>
          <UrlList />

        </div>


      </main>


    </div>
  );
}

export default App;
