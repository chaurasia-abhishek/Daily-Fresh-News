import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, disc, img_url, news_url, author, publishedAt, source, mode } = this.props
        return (
            <>
                <div className={`card text-center text-${mode==='light'?'dark':'light'}`} style={{backgroundColor : `${mode === 'dark' ? 'rgb(64 46 46)' : 'rgb(240 233 255)'}`}}>
                    <span className="position-absolute top-0 end-0 badge rounded-pill bg-dark " style={{cursor : 'context-menu'}}>
                        {source}
                    </span>
                    <img src={img_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <footer className="blockquote-footer mt-1">Author : {author ? author : 'Unkown'}</footer>
                        <footer className="blockquote-footer mb-1">Dated : <cite>{new Date(publishedAt).toGMTString()}</cite></footer>
                        <p className="card-text">{disc}</p>
                        <a href={news_url} target="blank" className={`btn btn-primary bg-dark border-${mode==='dark'?'success':'primary'}`}>Read News</a>
                    </div>
                </div>
            </>
        )
    }
}
