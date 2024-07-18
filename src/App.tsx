import './App.css'
import { AppProvider } from './modules/core/App/context/App.context';
import Index from './modules/Index';

function App() {

  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

export default App
