import { BasePage } from 'components/BasePage/BasePage';
import { Home } from 'pages/home/Home';
import { Menu } from '../components/Menu/Menu';
import styles from './App.module.css';

export const App = () => (
  <div className={styles.container}>
    <Menu />
    <BasePage>
      <Home />
    </BasePage>
  </div>
);
