import React from 'react'

const news = (props) => {
    let {title, description, NewsUrl, Content, imgUrl} = props
  return (
    <>
    <div className='card'>
    <img src={!imgUrl?"https://th.bing.com/th/id/OIP.YePVzjkjsadOqzQ03wl5kAHaEO?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7":imgUrl} className='card-img-top' alt='...' />
      
        <div className='card-body'>
            <h5 className='card-title'> {title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>{Content}</p>
            <a href={NewsUrl} className='btn btn-primary'>Read more</a>
        </div>
    </div>
    
    </>
  )
}

export default news