import React from 'react'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top bg-secondary text-light px-2">
            <p className="col-md-4 mb-0">© 2025 - Zannister Software Solutions. All Rights Reserved</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end px-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Privacy Policy</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Disclaimer</a></li>
            </ul>
        </footer>
    )
}

export default Footer
