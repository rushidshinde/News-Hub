import React from 'react'
// import loading from '../loading.gif';

export const Spinner = (props) => {
    return (
        <div className="statusLoading my-5">
            <div className="text-center">
                {/*<img src={loading} alt="Loading..."/><br/>*/}
                <div className="spinner-border text-dark" role="status"></div><br/>
                <p className="fs-2 mx-2">Loading please wait..</p>
            </div>
        </div>
    )
}
