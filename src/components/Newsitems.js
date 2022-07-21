import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'
// import news from './news.txt'

export default class Newsitems extends Component {

    async componentDidMount() {
        this.setState({progress:'30'});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&language=${this.state.language}&apiKey=${this.props.var.apikey}&pageSize=${this.state.postperpage}&page=${this.state.page}`;
        this.setState({progress:'50'});
        let data = await fetch(url);
        this.setState({progress:'70'});
        // let data = await fetch(news)
        let parseddata = await data.json();
        this.setState({progress:'90'});
        this.setState({ articles3: parseddata.articles, totalpages: parseddata.totalResults, loaded:true })
        this.setState({progress:'100'});
    }
    constructor(props) {
        super();
        this.state = {
            articles3: [],
            page: 1,
            country: props.var.country,
            language: props.var.language,
            postperpage: props.var.postperpage,
            category: props.category,
            progress: 0,
            mode: props.var.mode,
            loaded: false

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&language=${this.state.language}&apiKey=${this.props.var.apikey}&pageSize=${this.state.postperpage}&page=${this.state.page + 1}`;
        await this.setState({
            page: this.state.page + 1
        })
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ articles3: this.state.articles3.concat(parseddata.articles), totalpages: parseddata.totalResults })
    }

    render() {
        return (
            <>
                <LoadingBar
                    color='red'
                    progress={this.state.progress}
                    onLoaderFinished={() => this.setState({progress:'0'}) }
                />
                <div className={`d-flex align-items-center mt-4`}>
                    <h2 className={`text-center flex-fill text-${this.props.var.mode === 'light' ? 'dark' : 'light'}`}>Daily-Fresh-News | {this.uppercase(this.state.category)}</h2>
                    <select className={`form-select-sm me-1 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.country}`} onChange={(event) => {
                        this.changevalue({ value: 'country', key: event.target.value })
                    }}>
                        <option value="in">India</option>
                        <option value="us">US</option>
                    </select>
                    <select className={`form-select-sm me-3 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.postperpage}`} onChange={(event) => { this.changevalue({ value: 'postperpage', key: event.target.value }) }}>
                        <option value="9">10</option>
                        <option value="15">15</option>
                        <option value="21">20</option>
                    </select>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles3.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles3.length + 1 < this.state.totalpages}
                    loader={<Loading />}
                >
                    <div className="container my-3">
                        <div className='row '>
                            {this.state.articles3.map((element) => {
                                return <div className='col-md-4 my-3' key={element.url ? element.url : 'unknow'}>
                                    <Newsitem title={element.title ? element.title : 'Unknown'} disc={element.description ? element.description : 'Unknown'} img_url={element.urlToImage ? element.urlToImage : 'Unknown'} source={element.source.name ? element.source.name : 'Unknown'} news_url={element.url ? element.url : 'unkown'} author={element.author ? element.author : 'Unknown'} publishedAt={element.publishedAt ? element.publishedAt : 'Unkown'} mode={this.props.var.mode} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll    >
            </>
        )
    }
}
