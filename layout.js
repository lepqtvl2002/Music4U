// Active link
function activeLink(event) {
    let element;

    function getElementParent(element, className) {
        while (!element.parentElement.classList.contains(className) && element) {
            element = element.parentElement
        }
        return element.parentElement
    }

    if (event.target.classList.contains('nav__link-item')) {
        element = event.target
    }
    else {
        element = getElementParent(event.target, 'nav__link-item')
    }

    if (element.classList.contains('active')) {
        // Do nothing
    }
    else {
        const links = document.querySelectorAll('.nav__link-item')
        links.forEach(link => link.classList.remove('active'))
        element.classList.add('active')
    }
}

// Render navbar
function Logo() {
    return (
        <div className="nav__logo">
            <a href="#" className="nav__logo-link">
                <svg className="nav__Music4U-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <g fill="white">
                        <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path>
                    </g>
                </svg>
            </a>
            <NavLinkItem name="Home"/>
        </div>
    )
}

function NavLinkItem(props) {
    return (<a href="#" onClick={activeLink} className="nav__link-item">{props.name}</a>)
}

function Search() {
    return (
        <div className="nav__search">
            <form action="" method="post" className="nav__search-form">
                <input className="nav__search-input" type="text" placeholder="Search"></input>
                <button className="nav__search-submit btn btn-primary">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

function User() {
    return (<div className="nav__user">
        <a href="#" className="nav__user-link">
            <img className="user__avt" src="https://avatars.githubusercontent.com/u/88418718?v=4" alt="avatar"></img>
            <span className="user__name">Tran Duc Thang</span>
        </a>
    </div>)
}

function NavLinkIcon(props) {
    return (
        <a href="#" className="nav__link-item" onClick={activeLink}> 
            <i className={props.iconClass}></i>
        </a>
    )
}

function Navbar() {
    return (
        <div className="nav-container">
            <div className="grid wide">
                <div className="nav">
                    <Logo />
                    <NavLinkItem name="Stream" />
                    <NavLinkItem name="Library" />
                    <Search />
                    <NavLinkItem name="Uploader" />
                    <User />
                    <NavLinkIcon iconClass="fa-solid fa-bell"/>
                    <NavLinkIcon iconClass="fa-solid fa-message"/>
                    <NavLinkIcon iconClass="fa-solid fa-ellipsis"/>
                </div>
            </div>
        </div>
    )
}

// Play controller
function Play({audio, isPlaying}) {
    if (audio) {
        if (isPlaying) {
            audio.pause()
            return <i className="fas fa-play icon-play"></i>
        }
        else {
            audio.play()
            return <i className="fas fa-pause icon-pause"></i> 
        }
    }
    else {
        return <i className="fas fa-play icon-play"></i>
    }
}
class PlayButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying : false,
            audio : props.audio
        }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState(prevState => ({ isPlaying : !prevState.isPlaying }))
    }

    render() {
        return (
            <div className="btn btn-toggle-play" onClick={this.handleToggleClick}>
                <Play audio={this.state.audio} isPlaying={this.state.isPlaying}/>
            </div>
        )
    }
}

function Buttons({audio}) {
    return (
        <React.Fragment>
            <div className="btn btn-prev">
                <i className="fas fa-step-backward"></i>
            </div>
            <PlayButton audio={audio}/>
            <div className="btn btn-next">
                <i className="fas fa-step-forward"></i>
            </div>
            <div className="btn btn-random">
                <i className="fas fa-random"></i>
            </div>
            <div className="btn btn-repeat">
                <i className="fas fa-redo"></i>
            </div>
        </React.Fragment>
    )
}

function Timeline({audio}) {
    return (
        <div className="playback-timeline">
            <span className="playback-timeline__current-time">{audio.currentTime}</span>
            <input id="progress" className="progress" type="range" defaultValue="0" step="1" min="0" max="100"></input>
            <span className="playback-timeline__duration">{audio.duration}</span>
        </div>
    )
}

function Volume() {
    return (<div className="play-control__volume"></div>)
}

function SoundBadge() {
    return (
        <div className="play-control__sound-badge">
            <div className="playback-sound-badge">
                <img src="https://i1.sndcdn.com/artworks-8CzPmXqse76iBhpz-Gr4y6g-t500x500.jpg" alt="playbackSoundBadge" className="playback-sound-badge__avt"></img>
                <a href="#" className="playback-sound-badge__title-container">
                    <p className="playback-sound-badge__heading">Yeah1</p>
                    <span aria-hidden="true">Vì anh đâu có biết - Madihu (Feat. Vũ.s)</span>
                </a>
            </div>
        </div>
    )
}

class PlayController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Vi Anh Dau Co Biet", 
            src : "/assets/music/Vì Anh Đâu Có Biết - Madihu ( Feat. Vũ. ).mp3", 
            isPlaying: false
        }
        this.audio = new Audio(this.state.src)
    };

    render() {
        return (
            <div className="play-control">
                <div className="grid wide">
                    <div className="play-control__inner">
                        <Buttons audio={this.audio} />
                        <Timeline audio={this.audio}/>
                        <Volume />
                        <SoundBadge />
                    </div>
                </div>
            </div>
        )
    }
}

function Main() {
    return (
        <React.Fragment>
            <Navbar />
            <PlayController />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Main />)
