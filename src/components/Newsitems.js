import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

export default class Newsitems extends Component {

    async componentDidMount() {
        this.setState({ progress: '30' });
        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${this.state.country}&topic=${this.state.category}&lang=${this.state.language}&page=${this.state.page}&page_size=${this.state.postperpage}`
        this.setState({ progress: '50' });
        (this.setState({ progress: '70' }))
        let data = await fetch(url, { method: 'get', headers: { 'x-api-key': `${this.props.var.apikey}` } })
        let parseddata = await data.json();
        this.setState({ progress: '90' });
        this.setState({ articles3: parseddata.articles, totalpages: parseddata.total_pages})
        this.setState({ progress: '100' });
    }
    constructor(props) {
        super();
        this.state = {
            articles3: [{
                "title": "Fall in value of rupee, high inflation could hit festive season demand for smartphones",
                "author": "Subhrojit Mallick",
                "published_date": "2022-07-22 04:45:00",
                "published_date_precision": "timezone unknown",
                "link": "https://economictimes.indiatimes.com/industry/cons-products/electronics/fall-in-value-of-rupee-high-inflation-could-hit-festive-season-demand-for-smartphones/articleshow/93043245.cms",
                "clean_url": "indiatimes.com",
                "excerpt": "Counterpoint Research is now estimating its annual forecast to be 175-177 million units from its initial 181 million estimate. IDC India is also considering a downward revision from its initial 5%…",
                "summary": "The sharp rise in the value of the rupee against the dollar and high inflation could hit festive season demand for smartphone makers. Market trackers are already cutting annual shipment estimates for smartphones, fearing a weaker-than-usual festive season, which accounts for a third of annual sales. Counterpoint Research is now estimating its annual forecast to be 175-177 million units from its initial 181 million estimate. IDC India is also considering a downward revision from its initial 5% annual growth estimates.",
                "rights": "indiatimes.com",
                "rank": '296',
                "topic": "economics",
                "country": "IN",
                "language": "en",
                "authors": "Eswar Prasad,Subhrojit Mallick,Vidit Aatrey",
                "media": "https://img.etimg.com/thumb/msid-93043284,width-1070,height-580,imgsize-24880,overlay-economictimes/photo.jpg",
                "is_opinion": false,
                "twitter_account": "@EconomicTimes",
                "_score": null,
                "_id": "70100839d62703fe68b515beabfac0b8"
            }],
            page: 1,
            country: props.var.country,
            language: props.var.language,
            postperpage: props.var.postperpage,
            category: props.category,
            progress: 0,
            mode: props.var.mode
        }

        document.title = `${this.uppercase(this.state.category)} | Daily-Fresh-News`
    }

    uppercase = a => a.charAt(0).toUpperCase() + a.slice(1, a.length);

    changevalue = async (object) => {
        await this.setState({ [object.value]: object.key, page: 1 });
        this.componentDidMount();
        this.props.changevar(object)

    };

    fetchMoreData = async () => {

        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${this.state.country}&topic=${this.state.category}&lang=${this.state.language}&page=${this.state.page + 1}&page_size=${this.state.postperpage}`
        let data = await fetch(url, { method: 'get', headers: { 'x-api-key': `${this.props.var.apikey}` } });
        await this.setState({
            page: this.state.page + 1
        })
        let parseddata = await data.json();
        this.setState({ articles3: this.state.articles3.concat(parseddata.articles), totalpages: parseddata.total_pages })
    }

    render() {
        return (
            <>
                <LoadingBar
                    color='red'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({ progress: '0' })}
                />
                <div className={`d-flex align-items-center mt-4`}>
                    <h2 className={`text-center flex-fill text-${this.props.var.mode === 'light' ? 'dark' : 'light'}`}>Daily-Fresh-News | {this.uppercase(this.state.category)}</h2>
                    <select className={`form-select-sm me-1 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.country}`} onChange={(event) => {
                        this.changevalue({ value: 'country', key: event.target.value })
                    }}>
                        <option value="in">India</option>
                        <option value="us">US</option>
                    </select>
                    <select className={`form-select-sm me-3 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.language}`} onChange={(event) => { this.changevalue({ value: 'language', key: event.target.value }) }}>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles3.length ? this.state.articles3.length : 1}
                    next={this.fetchMoreData}
                    hasMore={this.state.page + 1 < this.state.totalpages}
                    loader={<Loading />}
                >
                    <div className="container my-3">
                        <div className='row '>
                            {this.state.articles3.map((element) => {
                                return <div className='col-md-4 my-3' key={element.title ? element.title : 'unknow'}>
                                    <Newsitem title={element.title ? element.title : 'Unknown'} disc={element.summary ? element.summary : 'Unknown'} img_url={element.media ? element.media : 'Unknown'} source={element.clean_url ? element.clean_url : 'Unknown'} news_url={element.link ? element.link : 'unkown'} author={element.author ? element.author : 'Unknown'} publishedAt={element.published_date ? element.published_date : 'Unkown'} mode={this.props.var.mode} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll    >
            </>
        )
    }
}
