import React from 'react'; 

function Header({logout, loggedIn}) {
    return <header className="Header">
        <a href="/" className="HeaderTitle"> GIF Grinners</a>
        <div className="Logo"></div>
        <nav >
            {!loggedIn && (
                <>
                <a href="/login">New Post</a>
                <a href="/login">Login</a>
                <a href="/create">Sign Up</a>
                </>
            )}
            {loggedIn && (
                <>
                <a href="/createPost">New Post</a>
                <a href="/profile/id">User Profile</a>
                <a href="/" onClick={() => logout()}> Log Out </a>
                </>
            )}
        </nav>
    </header>; 
}

export default Header; 

