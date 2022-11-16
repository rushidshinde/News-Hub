import React from 'react'

export const Error = (props) => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="statusError my-5 py-5">
                    <div className="text-center">
                        <h3 className='text-capitalize'>{props.errorCode}</h3>
                        <h1>Sorry for inconvenience try after some time..!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
