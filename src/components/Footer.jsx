function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-slate-200 p-5 text-sm">
      <small className="md-text-sm flex flex-col text-xs text-slate-700 md:flex-row">
        <span>©2024 - Developed and Designed with 🙂 by </span>
        <a
          className="flex pl-0 font-semibold text-slate-700 hover:text-slate-900 md:pl-1"
          href="https://milanzivanov.com/"
          target="_blank"
          rel="noreferrer"
        >
          milanzivanov.com
        </a>
      </small>
    </footer>
  );
}
export default Footer;
