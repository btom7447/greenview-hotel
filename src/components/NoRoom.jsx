import React from 'react'

const NoRoom = () => {
    return (
        <div>
            <h1>No Room Found</h1>
            <p>We couldn't find any rooms matching your search criteria. Please try adjusting your search or explore other options.</p>
            <a href="/" aria-label="Go back to the homepage" style={{ textDecoration: 'none', color: '#007BFF' }}>
                Go back to Homepage
            </a>
        </div>
    )
}

export default NoRoom