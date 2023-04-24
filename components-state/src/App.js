import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="container">
      <div>
        <Title title="rodas esportivas" /* alterando dados */>
          Rodas personalizadas para performance
        </Title>
        <div>
        <Cards/>
        </div>
      </div>
      </main>
      <Footer/>    
    </div>
  );
}

export default App;
