// Render navbar

const logo = (<div className="nav__logo">
    <a href="" className="nav__logo-link">
        <svg className="nav__Music4U-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <g fill="white">
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path>
            </g>
        </svg>
    </a>
</div>)

const stream = (<a href="#" className="nav__link-item">Stream</a>)

const library = (<a href="#" className="nav__link-item">library</a>)

const search = (<div className="nav__search">
    <form action="" method="post" className="nav__search-form">
        <input className="nav__search-input" type="text" placeholder="Search"></input>
        <button className="nav__search-submit btn btn-primary">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
</div>)

const upload = (<a href="#" className="nav__link-item">Upload</a>)

const user = (<div className="nav__user">
    <a href="#" className="nav__user-link">
        <img className="user__avt" src="https://avatars.githubusercontent.com/u/88418718?v=4" alt="avatar"></img>
        <span className="user__name">Tran Duc Thang</span>
    </a>
</div>)

const notify = (<a href="#" className="nav__link-item">
    <i className="fa-solid fa-bell"></i>
</a>)

const message = (<a href="#" className="nav__link-item">
    <i className="fa-solid fa-message"></i>
</a>)

const more = (<a href="#" className="nav__link-item">
    <i className="fa-solid fa-ellipsis"></i>
</a>)

const container = (<div className="nav-container">
    <div className="grid wide">
        <div className="nav">
            {logo}
            {stream}
            {library}
            {search}
            {upload}
            {user}
            {notify}
            {message}
            {more}
        </div>
    </div>
</div>)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(container)