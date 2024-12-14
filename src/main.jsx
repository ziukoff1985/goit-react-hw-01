// Імпортує StrictMode для забезпечення додаткових перевірок коду та createRoot для створення кореневого елемента React.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Підключає стилі для глобального застосування в додатку.
import './index.css';
// Імпортує основний компонент додатка.
import App from './App.jsx';
// Підключає "normalize.css", щоб забезпечити однаковий вигляд елементів у різних браузерах.
import 'modern-normalize';

// Створює кореневий елемент React, який буде "монтуватися" в DOM-елемент з ID `root`.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
