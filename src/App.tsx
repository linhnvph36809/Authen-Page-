import { BrowserRouter } from 'react-router-dom'
import './App.css'
import './i18n'
import Routes from './routes'
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
    <BrowserRouter>
    <div className='flex gap-x-2'>
      <button className='text-sm' onClick={() => changeLanguage('en')}>English</button>
      <button className='text-sm' onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>
      <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
