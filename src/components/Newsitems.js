import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
// import news from './news.txt'

export default class Newsitems extends Component {

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&language=${this.state.language}&apiKey=${this.props.var.apikey}&pageSize=${this.state.postperpage}&page=${this.state.page}`;
        let data = await fetch(url);
        // let data = await fetch(news)
        let parseddata = await data.json();
        this.setState({ articles3: parseddata.articles, totalpages: parseddata.totalResults, loading: false })
    }
    constructor(props) {
        super();
        this.state = {
            articles3: [''],
            page: 1,
            country: props.var.country,
            language: props.var.language,
            postperpage: props.var.postperpage,
            category: props.category,
            loading: true,
            mode: props.var.mode
        }
        document.title = `${this.uppercase(this.state.category)} | Daily-Fresh-News`
    }

    uppercase = a => a.charAt(0).toUpperCase() + a.slice(1, a.length);

    changevalue = async (object) => {
        this.state.loading = true;
        await this.setState({ [object.value]: object.key });
        this.componentDidMount();
        this.props.changevar(object)
    };

    prevpage = async () => {
        this.state.loading = true;
        await this.setState({
            page: this.state.page - 1
        })
        this.componentDidMount();
        this.scrollup();
    }

    nextpage = async () => {
        this.state.loading = true;
        await this.setState({
            page: this.state.page + 1
        })
        this.componentDidMount();
        this.scrollup();
    }

    scrollup = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <div className={`d-flex align-items-center mt-4`}>
                    <h2 className={`text-center flex-fill text-${this.props.var.mode === 'light' ? 'dark' : 'light'}`}>Daily-Fresh-News | {this.uppercase(this.state.category)}</h2>
                    <select className={`form-select-sm me-1 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.country}`} onChange={(event) => {
                        this.changevalue({value:'country',key:event.target.value})
                    }}>
                        <option value="in">India</option>
                        <option value="us">US</option>
                    </select>
                    <select className={`form-select-sm me-3 `} style={{ position: 'sticky', top: '0' }} aria-label="Default select example" defaultValue={`${this.state.postperpage}`} onChange={(event) => { this.changevalue({value:'postperpage',key:event.target.value}) }}>
                        <option value="9">10</option>
                        <option value="15">15</option>
                        <option value="21">20</option>
                    </select>
                </div>
                {this.state.loading && <Loading />}
                {!this.state.loading && <div className="container my-3">
                    <div className='row '>
                        {this.state.articles3.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <Newsitem title={element.title ? element.title : 'Unknown'} disc={element.description ? element.description : 'Unknown'} img_url={element.urlToImage ? element.urlToImage : 'Unknown'} source={element.source.name ? element.source.name : 'Unknown'} news_url={element.url} author={element.author ? element.author : 'Unknown'} publishedAt={element.publishedAt ? element.publishedAt : 'Unkown'} mode={this.props.var.mode} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page === 1}
                            onClick={this.prevpage}> &larr; Previous</button>

                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page === Math.ceil(this.state.totalpages / this.state.postperpage)}
                            onClick={this.nextpage}>Next &rarr;</button>
                    </div>
                </div>}
                {!this.state.loading && <button type="button" className="btn btn-outline-secondary" style={{  position: 'fixed', bottom: '20px', right: '30px', zIndex: '99', fontSize: '18px', border: 'none', outline: 'none', backgroundColor: 'red', color: 'white', cursor: 'pointer', padding: '15px', borderRadius: '4px',display:'block' }} onClick={this.scrollup}>&#8679;</button>}
            </>
                
        )   
    }
}
