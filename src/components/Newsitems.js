import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

export default function Newsitems(props) {
    const [articles3, setarticle3] = useState([]);
    const [country, setcountry] = useState(props.var.country);
    const [postperpage, setpostperpage] = useState(props.var.postperpage);
    const [totalpages, settotalpages] = useState();
    const [page, setpage] = useState(1);
    const [progress, setprogress] = useState(0);

    const uppercase = a => a.charAt(0).toUpperCase() + a.slice(1, a.length);
    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&language=${props.var.language}&apiKey=${props.var.apikey}&pageSize=${postperpage}&page=${page + 1}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticle3(articles3.concat(parseddata.articles))
        settotalpages(parseddata.totalResults)
    }
    const refresh = async () => {
        document.title = `${uppercase(props.category)} | Daily-Fresh-News`
        setprogress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&language=${props.var.language}&apiKey=${props.var.apikey}&pageSize=${postperpage}&page=${page}`;
        setprogress(50);
        let data = await fetch(url);
        setprogress(70);
        let parseddata = await data.json();
        setprogress(90);
        setarticle3(parseddata.articles)
        settotalpages(parseddata.totalResults)
        setprogress(100);
    }

    const changevalue = (object) => {
        eval(`${object.key}('${object.value}')`)
        setpage(1);
        props.var.changevar(object)
    };
    useEffect(() => {
        refresh();
    }, [country, postperpage])



    //jsfortoggle--mediaquery
    let navitems1234 = document.querySelectorAll('#navbarSupportedContent>ul>li,#navbarSupportedContent>div input,label')
    let navbartoggle1234 = document.getElementById('navbarSupportedContent')
    if (window.matchMedia("(max-width: 991px)").matches) {
        navitems1234.forEach((Element) => {
            Element.addEventListener('click', () => {
                navbartoggle1234.classList.remove('show')
            })
        })
    }


    return (
        <>
            <LoadingBar
                color='red'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <div className={`d-flex align-items-center mt-4`}>
                <h2 className={`text-center flex-fill text-${props.var.mode === 'light' ? 'dark' : 'light'}`}>Daily-Fresh-News | {props.category}</h2>

                <select className={`form-select-sm me-1 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${props.var.country}`} onChange={(event) => {
                    changevalue({ key: 'setcountry', value: event.target.value })
                }}>
                    <option value="in">India</option>
                    <option value="us">US</option>
                </select>
                <select className={`form-select-sm me-3 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${postperpage}`} onChange={(event) => { changevalue({ key: 'setpostperpage', value: event.target.value }) }}>
                    <option value="9">10</option>
                    <option value="15">15</option>
                    <option value="21">20</option>
                </select>
            </div>
            <InfiniteScroll
                dataLength={articles3.length}
                next={fetchMoreData}
                hasMore={articles3.length + 1 < totalpages}
                loader={<Loading />}
            >
                <div className="container my-3">
                    <div className='row '>
                        {articles3.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url ? element.url : 'unknow'}>
                                <Newsitem title={element.title ? element.title : 'Unknown'} disc={element.description ? element.description : 'Unknown'} img_url={element.urlToImage ? element.urlToImage : 'Unknown'} source={element.source.name ? element.source.name : 'Unknown'} news_url={element.url ? element.url : 'unkown'} author={element.author ? element.author : 'Unknown'} publishedAt={element.publishedAt ? element.publishedAt : 'Unkown'} mode={props.var.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll    >
        </>
    )

}
