import './App.css';
import Echange from './components/Echange';

function App() {
  return (
    <div className="App">
      <Echange defaultAmount={19500} defaultPeriod={16} unit="$" />
    </div>
  );
}

export default App;
