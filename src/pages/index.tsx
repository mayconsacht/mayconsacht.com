import { App } from '../../app';
import { Inconsolata } from '@next/font/google';
import 'styles/global.css';

// Defina as opções da fonte
const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'], // Adicione os pesos que deseja usar
});

export default function MyApp() {
  return (
    <div className={inconsolata.className}>
      <App />
    </div>
  );
}
