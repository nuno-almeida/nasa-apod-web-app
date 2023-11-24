import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setError(null);
        setIsLoading(false);
      })
      .catch(error => {
        setImages([]);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (<div className="spinner-border" role="status">
    </div>)
  }

  if (error) {
    return (<div className="alert alert-danger">{error}
    </div>)
  }

  return (
    <div className='m-4'>
      <div className="row d-flex justify-content-evenly">
      {images.map(image => (<div key={image.title} className="card col-12 col-md-6 col-lg-3 m-2">
        <img className="card-img-top" src={image.url} alt='' />
        <div className="card-body">
          <h5 className="card-title">{image.title}</h5>
          <p className="card-text">Date: {image.date}</p>
          <p className="card-text">{image.explanation}</p>
        </div>
      </div>))
      }</div>
    </div>

  );
}

export default App;
