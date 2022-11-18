import React, {useState, useEffect} from 'react'
import {NewsItem} from './NewsItem'
import {Spinner} from "./Spinner";
import {Error} from "./Error";

export default function News(props) {
    const countryNameArr = [
        { value : 'ae', lable :  'United Arab Emirates' },
        { value : 'ar', lable :  'Argentina' },
        { value : 'at', lable :  'Austria' },
        { value : 'au', lable :  'Australia' },
        { value : 'be', lable :  'Belgium' },
        { value : 'bg', lable :  'Bulgaria' },
        { value : 'br', lable :  'Brazil' },
        { value : 'ca', lable :  'Canada' },
        { value : 'ch', lable :  'Switzerland' },
        { value : 'cn', lable :  'China' },
        { value : 'co', lable :  'Colombia' },
        { value : 'cu', lable :  'Cuba' },
        { value : 'cz', lable :  'Czechia' },
        { value : 'de', lable :  'Germany' },
        { value : 'eg', lable :  'Egypt' },
        { value : 'fr', lable :  'France' },
        { value : 'gb', lable :  'United Kingdom' },
        { value : 'gr', lable :  'Greece' },
        { value : 'hk', lable :  'Hong Kong' },
        { value : 'hu', lable :  'Hungary' },
        { value : 'id', lable :  'Indonesia' },
        { value : 'ie', lable :  'Ireland' },
        { value : 'il', lable :  'Israel' },
        { value : 'in', lable :  'India' },
        { value : 'it', lable :  'Italy' },
        { value : 'jp', lable :  'Japan' },
        { value : 'kr', lable :  'Korea' },
        { value : 'lt', lable :  'Lithuania' },
        { value : 'lv', lable :  'Latvia' },
        { value : 'ma', lable :  'Morocco' },
        { value : 'mx', lable :  'Mexico' },
        { value : 'my', lable :  'Malaysia' },
        { value : 'ng', lable :  'Nigeria' },
        { value : 'nl', lable :  'Netherlands' },
        { value : 'no', lable :  'Norway' },
        { value : 'nz', lable :  'New Zealand' },
        { value : 'ph', lable :  'Philippines' },
        { value : 'pl', lable :  'Poland' },
        { value : 'pt', lable :  'Portugal' },
        { value : 'ro', lable :  'Romania' },
        { value : 'rs', lable :  'Serbia' },
        { value : 'ru', lable :  'Russia' },
        { value : 'sa', lable :  'Saudi Arabia' },
        { value : 'se', lable :  'Sweden' },
        { value : 'sg', lable :  'Singapore' },
        { value : 'si', lable :  'Slovenia' },
        { value : 'sk', lable :  'Slovakia' },
        { value : 'th', lable :  'Thailand' },
        { value : 'tr', lable :  'Turkey' },
        { value : 'tw', lable :  'Taiwan' },
        { value : 'ua', lable :  'Ukraine' },
        { value : 'us', lable :  'United States of America' },
        { value : 've', lable :  'Venezuela' },
        { value : 'za', lable :  'South Africa' }
    ]
    const newsCategoryArr = [
        { value : 'general', lable :  'All' },
        { value : 'business', lable :  'Business' },
        { value : 'entertainment', lable :  'Entertainment' },
        { value : 'health', lable :  'Health' },
        { value : 'science', lable :  'Science' },
        { value : 'sports', lable :  'Sports' },
        { value : 'technology', lable :  'Technology' }
    ]
    const pageSizeArr = [
        // { value : 6, lable :  6 },
        { value : 9, lable :  9 },
        { value : 12, lable :  12 },
        { value : 15, lable :  15 },
        { value : 18, lable :  18 }
    ]
    // const [newsData, setNewsData] = useState()
    const [pageSize, setPageSize] = useState(9);  // No. of news items rendered on one page
    const [pageNo, setPageNo] = useState(1) // Set the page number
    const [totalPages, setTotalPages] = useState(1) // Sets total pages based on results
    const [article , setArticle] = useState([]) // sets article array of news
    const [countryName, setCountryName] = useState('in'); // for sorting country name wise
    const [newsCategory, setNewsCategory] = useState('general'); // for sorting category wise
    const [responseStatus, setResponseStatus] = useState('loading'); // response status
    const [errorCode, setErrorCode] = useState('Hey there! Something went wrong.');

    const scrollToTop = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    useEffect(() => {
        scrollToTop();
        props.setProgressBar(20);
        const fetchData = async () =>{
            const url=`https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${countryName}&category=${newsCategory}&pageSize=${pageSize}&page=${pageNo}`;
            let data = await fetch(url)
            props.setProgressBar(40);
            let parseData = await data.json()
            props.setProgressBar(60);
            setResponseStatus(parseData.status);
            setArticle(parseData.articles);
            props.setProgressBar(80);
            setTotalPages(parseInt(Math.ceil((parseData.totalResults / pageSize))));
            responseStatus === 'error' && setErrorCode(parseData.code);
            props.setProgressBar(100);
        }
        fetchData();
        // eslint-disable-next-line
    },[pageNo, countryName, newsCategory, pageSize])

    const handlePrevious = async () =>{
        if(pageNo > 1){
            setPageNo(pageNo-1)
            setResponseStatus('loading')
        } else {
            setPageNo(pageNo)
        }
    }
    const handleNext = async () =>{
        if(pageNo < totalPages){
            setPageNo(pageNo+1)
            setResponseStatus('loading')
        } else {
            setPageNo(pageNo)
        }
    }
    const onchangeOfCountryName = ()=>{
        let selectedCountryName = document.getElementById('selectCountryName').value;
        setCountryName(selectedCountryName);
        setResponseStatus('loading');
        setPageNo(1);
    }
    const onchangeOfNewsCategory = ()=>{
        let selectedNewsCategory = document.getElementById('selectNewsCategory').value;
        setNewsCategory(selectedNewsCategory);
        setResponseStatus('loading');
        setPageNo(1);
    }
    const onchangeOfPageSize = ()=>{
        let selectedPageSize = document.getElementById('selectPageSize').value;
        setPageSize(selectedPageSize);
        setResponseStatus('loading');
        setPageNo(1);
    }

    return (
        <>
            <div className="container" style={{marginTop : '90px'}}>
                {responseStatus === 'loading' &&
                    <Spinner></Spinner>
                }
                {responseStatus === 'ok' &&
                    <div className="statusOk" >
                        <div className="justify-content-end my-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <label htmlFor="selectCountryName" className="form-label">Country</label>
                                        <select value={countryName} onChange={onchangeOfCountryName}
                                                id='selectCountryName'
                                                className="form-select" aria-label="selectCountryName">
                                            {countryNameArr.map((option) => (
                                                <option key={option.value}
                                                        value={option.value}>{option.lable}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label htmlFor="selectNewsCategory" className="form-label">Category</label>
                                        <select value={newsCategory} onChange={onchangeOfNewsCategory}
                                                id='selectNewsCategory' className="form-select"
                                                aria-label="selectNewsCategory">
                                            {newsCategoryArr.map((option) => (
                                                <option key={option.value}
                                                        value={option.value}>{option.lable}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-6"></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 mb-5'>
                            <h2 className='text-capitalize'>Top {newsCategory !== 'general' && newsCategory} Headlines</h2>
                            <div className="scrollableDiv" id='scrollableDiv'>
                                    <div className="row mb-5">
                                        {article.map((element) => {
                                            return (
                                                <div className="col-lg-4 col-md-1 col-sm-1" key={element.url}>
                                                    <NewsItem title={element.title} description={element.description}
                                                              imageUrl={element.urlToImage} newsUrl={element.url}
                                                              source={element.source.name}
                                                              publishedAt={element.publishedAt} author={element.author}></NewsItem>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>

                            <nav aria-label="Page navigation example mt-5">
                                <div className="d-flex justify-content-between">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><span
                                            className="page-link">Items per page</span></li>
                                        <li className="page-item">
                                            <select value={pageSize} onChange={onchangeOfPageSize}
                                                    id='selectPageSize'
                                                    className="form-select selectItemsPerPage"
                                                    aria-label="selectPageSize">
                                                {pageSizeArr.map((option) => (
                                                    <option key={option.value}
                                                            value={option.value}>{option.lable}</option>
                                                ))}
                                            </select>
                                        </li>
                                    </ul>
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item">
                                            <button disabled={pageNo <= 1} className="page-link px-4"
                                                    onClick={handlePrevious} aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </button>
                                        </li>
                                        <li className="page-item"><span className="page-link">{pageNo}</span>
                                        </li>
                                        <li className="page-item">
                                            <button disabled={pageNo >= totalPages}
                                                    className="page-link px-4" onClick={handleNext}
                                                    aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                }
                {responseStatus === 'error' &&
                    <Error errorCode={errorCode}></Error>
                }
            </div>
        </>
    )
}