// Render navbar
const logo = React.createElement(
    'div',
    {
        className : 'nav__logo',
    },
    React.createElement(
        'a',
        {
            href : '/',
            className: 'nav__logo-link',
        },
        React.createElement(
            'svg',
            {
                className : 'nav__Music4U-logo',
                xmlns : 'http://www.w3.org/2000/svg',
                viewBox : '0 0 384 512',
            },
            React.createElement(
                'g',
                {
                    fill : 'white',
                },
                React.createElement(
                    'path',
                    {
                        d : 'M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z',
                    },
                )
            )
        )
    )
)

const stream = React.createElement(
    'a',
    {
        className : 'nav__link-item',
        href : '#'
    },
    'Stream'
)

const library = React.createElement(
    'a',
    {
        className : 'nav__link-item',
        href : '#'
    },
    'Library'
)

const search = React.createElement(
    'div',
    {
        className : 'nav__search'
    },
    React.createElement(
        'form',
        {
            action : '',
            method : 'post',
            className : 'nav__search-form'
        },
        React.createElement(
            'input',
            {
                className : 'nav__search-input',
                type : 'text',
                placeholder : 'Search'
            }
        ),
        React.createElement(
            'button',
            {
                className : 'nav__search-submit btn btn-primary',
            },
            React.createElement(
                'i',
                {
                    className : 'fa-solid fa-magnifying-glass'
                },
            )
        )
    )
)

const upload = React.createElement(
    'a',
    {
        className : 'nav__link-item nav__upload-link',
        href : '#'
    },
    'Upload'
)

const user = React.createElement(
    'div',
    {
        className : 'nav__user',
    },
    React.createElement(
        'a',
        {
            href : '#',
            className : 'nav__user-link'
        },
        React.createElement(
            'img',
            {
                className : 'user__avt',
                src : 'https://avatars.githubusercontent.com/u/88418718?v=4',
                alt : 'avatar'
            },
        ),
        React.createElement(
            'span',
            {
                className : 'user__name'
            },
            'Tran Duc Thang'
        )
    )
)

const notify = React.createElement(
    'a', {
        href : '#',
        className : 'nav__link-item nav__notify'
    },
    React.createElement(
        'i',
        {
            className : 'fa-solid fa-bell'
        }
    ),
)

const message = React.createElement(
    'a', {
        href : '#',
        className : 'nav__link-item nav__notify'
    },
    React.createElement(
        'i',
        {
            className : 'fa-solid fa-message'
        }
    ),
)

const more = React.createElement(
    'a', {
        href : '#',
        className : 'nav__link-item nav__notify'
    },
    React.createElement(
        'i',
        {
            className : 'fa-solid fa-ellipsis'
        }
    ),
)

const container = React.createElement(
    'div',
    {
        className : 'nav-container'
    },
    React.createElement(
        'div',
        {
            className : 'grid wide'
        },
        React.createElement(
            'div',
            {
                className : 'nav'
            },
            logo,
            stream,
            library,
            search,
            upload,
            user,
            notify,
            message,
            more
        )
    )
)

const root = document.querySelector('#root');
const rootElement = ReactDOM.createRoot(root)
rootElement.render(container)