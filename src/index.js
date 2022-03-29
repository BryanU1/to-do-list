import './style.css';
import { createSideNav, createContent } from './domStuff';

const runApp = (() => {
  const sideNav = createSideNav();
  document.body.append(sideNav);

  const content = createContent();
  document.body.append(content);
})();