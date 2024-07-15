export const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 sm:px-8 px-16 py-10 border-t border-neutral-600">
      <p className="md:text-xl text-base font-semibold">MovieApp</p>
      <p className="md:text-sm text-xs my-3">© Christina Schöffmann | {new Date().getFullYear()}</p>
      <p className="md:text-sm text-xs md:w-1/2 w-full">
        Created with OMDb API. The OMDb API is a RESTful web service to obtain movie
        information. All content and images on the site are contributed and
        maintained by their users. More infos: <a href="https://www.omdbapi.com/" target="_blank" className="footer-link">www.omdbapi.com</a>
      </p>
    </footer>
  );
};
