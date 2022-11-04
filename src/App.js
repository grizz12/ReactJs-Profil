import ContentName from './components/ContentName'
import AnimAbout from './components/AnimAbout'

function App() {
  return (
    <div className="App">
      <div className="container">
  <h1>Yang Tau Tau Aja</h1>
  <h2>React JS Only</h2>
  <div className="service-details">
    <img src="https://i.imgur.com/SkFZNy4.jpg" alt="realm" />
    <AnimAbout>
    <h3>Raka Rmp</h3>
      <h4>Fe Dev </h4>
      <p>Sedikit Aja Ye Gaes Untuk Fotonya Random Bisa Diganti Sendiri</p>
    </AnimAbout>
    <ContentName />
  </div>
</div>
    </div>
  );
}

export default App;
