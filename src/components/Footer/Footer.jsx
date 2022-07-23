import "./footer.scss";
export const Footer = () => {
  const personalData = [
    {
      link: "https://github.com/deekshithmd",
      icon: "fa-github",
    },
    {
      link: "https://in.linkedin.com/in/deekshith-m-d-42a306154",
      icon: "fa-linkedin",
    },
    {
      link: "http://twitter.com/deekshith_md",
      icon: "fa-twitter",
    },
  ];
  return (
    <footer className="footer">
      <span className="text-md footer-text text-center">
        {" "}
        <span className="brand-style">FreshPost</span> developed and maintained
        by Deekshith M D
      </span>
      <ul className="footer-social-icons">
        {personalData.map((data,index) => {
          return (
            <li className="list-inline-item"key={index}>
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="nav-icon-link link-style-none"
              >
                <i className={`fab ${data.icon} nav-icon`}></i>{" "}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
