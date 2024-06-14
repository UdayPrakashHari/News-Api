import React, { useState, useEffect, useRef } from 'react';
import NewsItem from './news';
import Spin from './spinner';
import TopLoadingBar from './topLoadingBar';

const Data = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [page, setPage] = useState(1); 
    const [fetching, setFetching] = useState(false); 
    const containerRef = useRef(null); 
    
    useEffect(() => {
        fetchData();
    }, [props.category]); 

    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                window.innerHeight + window.scrollY >= containerRef.current.offsetTop + containerRef.current.clientHeight &&
                !fetching
            ) {
                setFetching(true);
                fetchData(); 
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetching]); 

    const fetchData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${page}&apiKey=fd01a7ecaec743ef85e202632315a77f`);
            const json = await response.json();
            setArticles((prevArticles) => [...prevArticles, ...json.articles]); 
            setPage((prevPage) => prevPage + 1); 
            setLoading(false);
            setFetching(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setFetching(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prevProgress) => (prevProgress >= 50 ? 100 : prevProgress + 10));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container' ref={containerRef}>
            {loading && <Spin/>}
            <TopLoadingBar progress={loadingProgress} />
            <h2 className='text-center my-3'>My articles ({props.category})</h2>
            <div className='container'>
                <div className='row'>
                    {articles.map((article, index) => (
                        <div className='col-md-3' key={index}>
                            <NewsItem
                                title={article.title.slice(0, 60)}
                                description={article.description ? article.description.slice(0, 65) : ' '}
                                NewsUrl={article.url}
                                content={article.content}
                                imgUrl={article.urlToImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Data;



// import React, { useState, useEffect } from 'react';
// import NewsItem from './newsContent';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Spinner from "./spinner.gif"

// function Data(props) {
//     const { category } = props;
//     const [news, setNews] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(true);
//     const [hasMore, setHasMore] = useState(true);

//     // Function to fetch news
//     const fetchNews = async (pageNumber) => {
//         const url = https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ee4123e6693f41ffbc4d63638352ae32&page=${pageNumber};
//         try {
//             setLoading(true); // Set loading to true when fetching new data
//             // Simulate a delay for 2 seconds to show the loader
//             setTimeout(async () => {
//                 const result = await fetch(url);
//                 const json = await result.json();
//                 if (json.articles.length === 0) {
//                     setHasMore(false); // No more articles available
//                 } else {
//                     setNews(prevNews => [...prevNews, ...json.articles]);
//                     setPage(pageNumber + 1); // Increment page number for next fetch
//                 }
//                 setLoading(false); // Set loading to false after news is loaded
//             }, 2000); // 2 seconds delay
//         } catch (error) {
//             console.error('Error fetching the data:', error);
//         }
//     };


//     return (
//         <div className='container'>
//             <h1 className='text-center my-4'>Top headlines in {category}</h1>
//             <InfiniteScroll
//                 dataLength={news.length}
//                 next={loadMore}
//                 hasMore={hasMore}
//                 loader={<img src={Spinner} alt="loading"/>}
//             >
//                 <div className='container'>
//                     <div className='row'>
//                         {news.map((element, index) => (
//                             <div className='col-md-4' key={index}>
//                                 <NewsItem
//                                     title={element.title.slice(0, 57)}
//                                     description={element.description ? element.description.slice(0, 65) : ' '}
//                                     imgURL={element.urlToImage}
//                                     newsURL={element.url}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </InfiniteScroll>
//             {loading && <div className="text-center"><img src={Spinner} alt="loading"/></div>}
//         </div>
//     );
// }

// export default Data;



