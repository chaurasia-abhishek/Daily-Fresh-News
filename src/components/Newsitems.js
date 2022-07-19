import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
// import PropTypes from 'prop-types'

export default class Newsitems extends Component {

    static defaultProps = {
        country: 'in',
        language: 'en',
        category: 'general',
        postperpage: '20'
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=${this.props.language}&apiKey=${this.props.apikey}&pageSize=${this.props.postperpage}&page=${this.state.page}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ articles3: parseddata.articles, totalpages: parseddata.totalResults, loading: false })
    }
    uppercase=a=>a.charAt(0).toUpperCase()+a.slice(1,a.length);

    constructor(props) {    
        super();
        this.state = {
            articles3: [],
            page: 1,
            loading: true
        }
        document.title=`${this.uppercase(props.category)} | Daily-Fresh-News`
    }
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
                <h2 className='text-center mt-4'>Daily-Fresh-News || Headlins</h2>
                {this.state.loading && <Loading />}
                {!this.state.loading && <div className="container my-3">
                    <div className='row '>
                        {this.state.articles3.map((element) => {

                            return <div className='col-md-4 my-3' key={element.url}>
                                <Newsitem title={element.title} disc={element.description} img_url={element.urlToImage} source={element.source.name} news_url={element.url} author={element.author} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page === 1}
                            onClick={this.prevpage}> &larr; Previous</button>

                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page === Math.ceil(this.state.totalpages / this.props.postperpage)}
                            onClick={this.nextpage}>Next &rarr;</button>
                    </div>
                </div>}
                <button type="button" className="btn btn-outline-dark" style={{ margin: '30px', fontSize: '50px', padding: '0px', height: '65px', textAlign: 'start', border: 'none', float: 'right' }} onClick={this.scrollup}>&#8679;</button>
            </>
        )
    }
}
