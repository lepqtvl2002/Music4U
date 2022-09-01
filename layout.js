// Navbar
const nav_container = document.querySelector('.nav-container');
nav_container.innerHTML = `<div class="grid wide">
<!-- Navigation -->
<nav class="nav">
    <!-- Logo -->
    <div class="nav__logo">
        <a href="/" class="nav__logo-link">
            <svg class="nav__Music4U-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <g fill="white">
                    <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/>
                </g>
            </svg>
        </a>
        <!-- Home-->
        <a href="/index.html" class="nav__link-item">Home</a>
    </div>

    <!-- Stream -->
    <a class="nav__link-item" href="/stream.html">Stream</a>
    <!-- Library -->
    <a class="nav__link-item" href="/library/index.html">Library</a>
    
    <!-- Search -->
    <div class="nav__search">
        <form action="" method="post" class="nav__search-form">
            <input class="nav__search-input" type="text" placeholder="Search">    
            <button class="nav__search-submit btn btn-primary" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>                
        </form>
    </div>

    <!-- Upload -->
    <a class="nav__link-item" href="/upload.html" class="nav__upload-link">Upload</a>

    <!-- User -->
    <div class="nav__user">
        <a href="/profile.html" class="nav__user-link">
            <img class="user__avt" src="https://avatars.githubusercontent.com/u/88418718?v=4" alt="avatar">
            <span class="user__name">Tran Duc Thang</span>
        </a>
    </div>
    
    <!-- Notify -->
    <a href="#" class="nav__notify nav__link-item">
        <i class="fa-solid fa-bell"></i>
    </a>

    <!-- Message -->
    <a href="#" class="nav__message nav__link-item">
        <i class="fa-solid fa-message"></i>
    </a>

    <!-- More -->
    <a href="#" class="nav__more nav__link-item">
        <i class="fa-solid fa-ellipsis"></i>
    </a>
</nav>

</div>`

// Play control


// Location
const pathname = this.location.pathname;

// Collection navigation of library & active nav-link-library
if (pathname.includes('library')) {
    const library_link = document.querySelector(`[href="/library/index.html"]`);
    library_link.classList.add(`${library_link.classList[0]}--active`);

    const collection_nav = document.querySelector('ul.collection-nav');
    collection_nav.innerHTML=`<li class="collection-nav-item"><a href="/library/index.html" class="collection-link">Overview</a></li>
    <li class="collection-nav-item"><a href="/library/like.html" class="collection-link">Likes</a></li>
    <li class="collection-nav-item"><a href="/library/playlist.html" class="collection-link">Playlists</a></li>
    <li class="collection-nav-item"><a href="/library/following.html" class="collection-link">Following</a></li>
    <li class="collection-nav-item"><a href="/library/history.html" class="collection-link">History</a></li>`
}

// Active link
const link_items = document.querySelectorAll(`[href="${this.location.pathname}"]`);
for (let link_item of link_items) {
    link_item.classList.add(`${link_item.classList[0]}--active`);
}



