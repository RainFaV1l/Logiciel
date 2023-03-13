import { NavLink } from "react-router-dom";

const Header = ({ setModal }) => {
  const handleSetModal = () => {
    setModal(true);
  };
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink to={"/"}>
          <div className="header__logo">
            <svg
              width={122}
              height={65}
              viewBox="0 0 122 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7_72"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width={29}
                height={50}
              >
                <path d="M29 0H0V50H29V0Z" fill="white" />
              </mask>
              <g>
                <mask
                  id="mask1_7_72"
                  maskUnits="userSpaceOnUse"
                  width={51}
                  height={50}
                >
                  <path
                    d="M4.11079 50C17.9179 50 29.1108 38.8071 29.1108 25C29.1108 11.1929 17.9179 0 4.11079 0C-9.69633 0 -20.8892 11.1929 -20.8892 25C-20.8892 38.8071 -9.69633 50 4.11079 50Z"
                    fill="#18181A"
                  />
                </mask>
                <g>
                  <path
                    d="M29.8472 8.61252C26.8601 6.8879 4.04886 -5.0137 0.599661 -4.99999C-2.84954 -4.98628 13.1867 6.94224 10.2133 8.69055C7.23996 10.4388 4.78356 12.9445 3.09466 15.952C1.40576 18.9595 0.544861 22.3611 0.599661 25.8099C0.654461 29.2587 1.62306 32.6313 3.40676 35.5836C5.19036 38.5359 7.72516 40.9622 10.7526 42.6151C13.78 44.2681 9.78326 52.596 13.2312 52.5C16.6791 52.4041 27.4482 43.8878 30.3791 42.0691L24.3269 32.3161C23.1212 33.0643 21.7387 33.4793 20.3203 33.5187C18.9019 33.5582 17.4985 33.2207 16.2531 32.5407C15.0077 31.8608 13.9649 30.8626 13.2312 29.6481C12.4974 28.4336 12.099 27.0463 12.0764 25.6275C12.0539 24.2087 12.408 22.8094 13.1028 21.5722C13.7976 20.335 14.8081 19.3042 16.0312 18.585C17.2544 17.8658 18.6464 17.4839 20.0653 17.4783C21.4843 17.4726 22.8793 17.8434 24.1081 18.5529L29.8472 8.61252Z"
                    fill="#8774EA"
                  />
                </g>
              </g>
              <path
                d="M37.6 31.632H43.624V33H35.92V16.224H37.6V31.632ZM51.7576 33.192C50.5256 33.192 49.4136 32.92 48.4216 32.376C47.4456 31.816 46.6696 31.032 46.0936 30.024C45.5336 29 45.2536 27.808 45.2536 26.448C45.2536 25.088 45.5416 23.904 46.1176 22.896C46.6936 21.872 47.4776 21.088 48.4696 20.544C49.4616 19.984 50.5736 19.704 51.8056 19.704C53.0376 19.704 54.1496 19.984 55.1416 20.544C56.1496 21.088 56.9336 21.872 57.4936 22.896C58.0696 23.904 58.3576 25.088 58.3576 26.448C58.3576 27.792 58.0696 28.976 57.4936 30C56.9176 31.024 56.1256 31.816 55.1176 32.376C54.1096 32.92 52.9896 33.192 51.7576 33.192ZM51.7576 31.728C52.6216 31.728 53.4216 31.536 54.1576 31.152C54.8936 30.752 55.4856 30.16 55.9336 29.376C56.3976 28.576 56.6296 27.6 56.6296 26.448C56.6296 25.296 56.4056 24.328 55.9576 23.544C55.5096 22.744 54.9176 22.152 54.1816 21.768C53.4456 21.368 52.6456 21.168 51.7816 21.168C50.9176 21.168 50.1176 21.368 49.3816 21.768C48.6456 22.152 48.0536 22.744 47.6056 23.544C47.1736 24.328 46.9576 25.296 46.9576 26.448C46.9576 27.6 47.1736 28.576 47.6056 29.376C48.0536 30.16 48.6376 30.752 49.3576 31.152C50.0936 31.536 50.8936 31.728 51.7576 31.728ZM66.916 19.704C68.148 19.704 69.22 19.992 70.132 20.568C71.044 21.144 71.7 21.872 72.1 22.752V19.896H73.78V33.336C73.78 34.536 73.516 35.6 72.988 36.528C72.476 37.456 71.756 38.168 70.828 38.664C69.9 39.176 68.844 39.432 67.66 39.432C65.98 39.432 64.58 39.032 63.46 38.232C62.356 37.432 61.668 36.344 61.396 34.968H63.052C63.34 35.88 63.884 36.608 64.684 37.152C65.5 37.696 66.492 37.968 67.66 37.968C68.508 37.968 69.268 37.784 69.94 37.416C70.612 37.064 71.14 36.536 71.524 35.832C71.908 35.128 72.1 34.296 72.1 33.336V30.096C71.684 30.992 71.02 31.736 70.108 32.328C69.212 32.904 68.148 33.192 66.916 33.192C65.716 33.192 64.636 32.912 63.676 32.352C62.732 31.792 61.988 31 61.444 29.976C60.916 28.952 60.652 27.768 60.652 26.424C60.652 25.08 60.916 23.904 61.444 22.896C61.988 21.872 62.732 21.088 63.676 20.544C64.636 19.984 65.716 19.704 66.916 19.704ZM72.1 26.448C72.1 25.392 71.884 24.464 71.452 23.664C71.02 22.864 70.428 22.248 69.676 21.816C68.94 21.384 68.124 21.168 67.228 21.168C66.3 21.168 65.468 21.376 64.732 21.792C63.996 22.208 63.412 22.816 62.98 23.616C62.564 24.4 62.356 25.336 62.356 26.424C62.356 27.496 62.564 28.44 62.98 29.256C63.412 30.056 63.996 30.672 64.732 31.104C65.468 31.52 66.3 31.728 67.228 31.728C68.124 31.728 68.94 31.512 69.676 31.08C70.428 30.648 71.02 30.032 71.452 29.232C71.884 28.432 72.1 27.504 72.1 26.448ZM78.4553 17.424C78.1193 17.424 77.8313 17.304 77.5913 17.064C77.3513 16.824 77.2313 16.528 77.2313 16.176C77.2313 15.824 77.3513 15.536 77.5913 15.312C77.8313 15.072 78.1193 14.952 78.4553 14.952C78.7913 14.952 79.0793 15.072 79.3193 15.312C79.5593 15.536 79.6793 15.824 79.6793 16.176C79.6793 16.528 79.5593 16.824 79.3193 17.064C79.0793 17.304 78.7913 17.424 78.4553 17.424ZM79.2953 19.896V33H77.6153V19.896H79.2953ZM82.3317 26.448C82.3317 25.088 82.6037 23.904 83.1477 22.896C83.6917 21.872 84.4437 21.088 85.4037 20.544C86.3637 19.984 87.4597 19.704 88.6917 19.704C90.3077 19.704 91.6357 20.104 92.6757 20.904C93.7317 21.704 94.4117 22.792 94.7157 24.168H92.9157C92.6917 23.224 92.2037 22.488 91.4517 21.96C90.7157 21.416 89.7957 21.144 88.6917 21.144C87.8117 21.144 87.0197 21.344 86.3157 21.744C85.6117 22.144 85.0517 22.744 84.6357 23.544C84.2357 24.328 84.0357 25.296 84.0357 26.448C84.0357 27.6 84.2357 28.576 84.6357 29.376C85.0517 30.176 85.6117 30.776 86.3157 31.176C87.0197 31.576 87.8117 31.776 88.6917 31.776C89.7957 31.776 90.7157 31.512 91.4517 30.984C92.2037 30.44 92.6917 29.688 92.9157 28.728H94.7157C94.4117 30.072 93.7317 31.152 92.6757 31.968C91.6197 32.784 90.2917 33.192 88.6917 33.192C87.4597 33.192 86.3637 32.92 85.4037 32.376C84.4437 31.816 83.6917 31.032 83.1477 30.024C82.6037 29 82.3317 27.808 82.3317 26.448ZM98.6584 17.424C98.3224 17.424 98.0344 17.304 97.7944 17.064C97.5544 16.824 97.4344 16.528 97.4344 16.176C97.4344 15.824 97.5544 15.536 97.7944 15.312C98.0344 15.072 98.3224 14.952 98.6584 14.952C98.9944 14.952 99.2824 15.072 99.5224 15.312C99.7624 15.536 99.8824 15.824 99.8824 16.176C99.8824 16.528 99.7624 16.824 99.5224 17.064C99.2824 17.304 98.9944 17.424 98.6584 17.424ZM99.4984 19.896V33H97.8184V19.896H99.4984ZM115.159 25.776C115.159 26.352 115.143 26.792 115.111 27.096H104.239C104.287 28.088 104.527 28.936 104.959 29.64C105.391 30.344 105.959 30.88 106.663 31.248C107.367 31.6 108.135 31.776 108.967 31.776C110.055 31.776 110.967 31.512 111.703 30.984C112.455 30.456 112.951 29.744 113.191 28.848H114.967C114.647 30.128 113.959 31.176 112.903 31.992C111.863 32.792 110.551 33.192 108.967 33.192C107.735 33.192 106.631 32.92 105.655 32.376C104.679 31.816 103.911 31.032 103.351 30.024C102.807 29 102.535 27.808 102.535 26.448C102.535 25.088 102.807 23.896 103.351 22.872C103.895 21.848 104.655 21.064 105.631 20.52C106.607 19.976 107.719 19.704 108.967 19.704C110.215 19.704 111.303 19.976 112.231 20.52C113.175 21.064 113.895 21.8 114.391 22.728C114.903 23.64 115.159 24.656 115.159 25.776ZM113.455 25.728C113.471 24.752 113.271 23.92 112.855 23.232C112.455 22.544 111.903 22.024 111.199 21.672C110.495 21.32 109.727 21.144 108.895 21.144C107.647 21.144 106.583 21.544 105.703 22.344C104.823 23.144 104.335 24.272 104.239 25.728H113.455ZM119.913 15.24V33H118.233V15.24H119.913Z"
                fill="#18181A"
              />
            </svg>
          </div>
        </NavLink>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__item">
              <NavLink to={"/"}>Главная</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/#catalog"}>Каталог</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/#about"}>О нас</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/user/5"}>Пользователь</NavLink>
            </li>
            <li className="header__item">
              <div onClick={() => handleSetModal()} className="cart__button">
                Корзина
              </div>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <input type="search" placeholder="Поиск" />
        </div>
      </div>
    </header>
  );
};

export default Header;