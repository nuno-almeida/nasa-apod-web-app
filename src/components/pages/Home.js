import { useEffect, useState } from "react";
import NavBar from "../NavBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([{
    "date": "2019-08-13",
    "explanation": "What could shoot out a neutron star like a cannon ball? A supernova.  About 10,000 years ago, the supernova that created the nebular remnant CTB 1 not only destroyed a massive star but blasted its newly formed neutron star core -- a pulsar -- out into the Milky Way Galaxy.  The pulsar, spinning 8.7 times a second, was discovered using downloadable software Einstein@Home searching through data taken by NASA's orbiting Fermi Gamma-Ray Observatory.  Traveling over 1,000 kilometers per second, the pulsar PSR J0002+6216 (J0002 for short) has already left the supernova remnant CTB 1, and is even fast enough to leave our Galaxy. Pictured, the trail of the pulsar is visible extending to the lower left of the supernova remnant.  The featured image is a combination of radio images from the VLA and DRAO radio observatories, as well as data archived from NASA's orbiting IRAS infrared observatory. It is well known that supernovas can act as cannons, and even that pulsars can act as cannonballs -- what is not known is how supernovas do it.",
    "hdurl": "https://apod.nasa.gov/apod/image/1908/CannonSupernova_English_8404.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Supernova Cannon Expels Pulsar J0002",
    "url": "https://apod.nasa.gov/apod/image/1908/CannonSupernova_English_960.jpg"
    }]);

  useEffect(() => {
    // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setImages(data);
    //     setError(null);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setImages([]);
    //     setError(error.message);
    //     setIsLoading(false);
    //   });
  }, []);

  if (isLoading) {
    return <div className="spinner-border" role="status"></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="m-4">

      <div className="row d-flex justify-content-evenly">
        {images.map((image) => (
          <div key={image.title} className="card col-12 col-md-6 col-lg-3 m-2">
            <img className="card-img-top" src={image.url} alt="" />
            <div className="card-body">
              <h5 className="card-title">{image.title}</h5>
              <p className="card-text">Date: {image.date}</p>
              <p className="card-text">{image.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
