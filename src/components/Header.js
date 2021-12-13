import React from 'react'; 

function Header({logout, loggedIn}) {
    return <header className="Header">
        <h2> Gif Grinners</h2>
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
                <button onClick={() => logout()}> Log Out </button>
                </>
            )}
        </nav>
    </header>; 
}

export default Header; 

