import { multiply } from './math';

const rootEl = document.getElementById('root');
const name = 'hassan';

rootEl.innerHTML = `hi my name is ${name} ${multiply(2, 5)}`;

if (module.hot) {
  module.hot.accept();
}
