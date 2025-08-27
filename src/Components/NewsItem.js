import React,{Component} from 'react'

class NewsItem extends Component{
  render(){
    let { title,description, imageurl,newid,author,date} = this.props;
     console.log('Image URL in NewsItem:', imageurl);
    return (
      <div className='my-3'>
        <div className='card' /*style={{ width: '18rem' }}*/>
          <img src={imageurl} className='card-img-top' alt="..." />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className="card-text"><small className='text-muted'>By {author} on {date}</small></p>
            <a href='/newsUrl' className='btn btn-sm btn-primary'>Read More</a>
          </div>
        </div>
      </div>
    )
}
}
export default NewsItem
