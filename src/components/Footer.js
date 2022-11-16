import React from 'react'

export const Footer = (props) => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container">
                <footer className='py-3' >
                    <ul className="nav justify-content-center border-bottom ">
                        <li className="nav-item"><code className="nav-link px-2 text-muted">made with <span className="text-danger fs-6">&#10084;</span> by Rushi</code></li>
                    </ul>
                    <p className="text-center text-muted">© 2022 {props.appName}</p>
                </footer>
            </div>
        </div>
    )
}
