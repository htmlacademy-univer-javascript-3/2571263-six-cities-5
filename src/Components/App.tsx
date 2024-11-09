import MainPage from './MainPage.tsx';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps) {
  return <MainPage offersCount={offersCount} />;
}
