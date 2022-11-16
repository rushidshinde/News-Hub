import React from 'react'
// import NewsItemDetail from './NewsItemDetail'

export const NewsItem = (props) => {
    const defaultImgUrl = 'https://mazzei.net/wp-content/uploads/2020/06/HOME_News_iStock-1064809816-1.jpg'
    const cardBody = {
        height: '16em'
    }

    let publishedAT = new Date(props.publishedAt)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let fullDay = weekday[publishedAT.getDay()]
    let date = publishedAT.getDate()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[publishedAT.getMonth()]
    let year = publishedAT.getFullYear();
    let fullDate = ''+month+' '+date+', '+year+''
    let fullTime = new Date(props.publishedAt).toLocaleTimeString();

    return (
        <>
            <div className="my-2">
                <div className="card position-relative">
                    <img src={props.imageUrl ? props.imageUrl : defaultImgUrl} className="card-img-top" height='250px' alt={props.title}/>
                    <div className="card-body overflow-hidden my-2" style={cardBody}>
                        <div className="position-absolute top-0 end-0">
                            <span className="badge text-bg-dark me-1">{props.source}</span>
                        </div>
                        <p className="card-text"><small className="text-muted">By {props.author ? props.author : 'Unknown'} <br/> {fullDay} {fullDate} {fullTime}</small></p>
                        <h5 className="card-title">{props.title.slice(0, 60)}{props.title.length > 60 ? '...' : ''}</h5>
                        <p className="card-text pb-3" >{props.description ? props.description.slice(0, 120)  : props.description}{props.description ? (props.description.length > 120 ? '...' : '') : ''}</p>
                    </div>
                    <div className="card-footer">
                        <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
                    </div>
                </div>
            </div>
            {/* <NewsItemDetail></NewsItemDetail> */}
        </>
    )
}

