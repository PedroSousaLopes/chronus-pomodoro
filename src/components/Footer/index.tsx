import styles from './Footer.module.css';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href=' '>Entenda como funciona a tecnica Pomodoro</a>
        <a href=' '>
          Chronos Pomodo &copy;{new Date().getFullYear()} - feito com ❤️
        </a>
      </footer>
    </>
  );
}
