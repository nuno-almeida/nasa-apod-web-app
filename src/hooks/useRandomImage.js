import { useEffect, useRef, useState } from "react";

const getImages = async () => {
  try {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6"
    );

    const data = await response.json();

    if (response.ok) {
      return {
        images: data,
        error: null,
        loading: false,
      };
    }

    return {
      images: [],
      error: data?.error?.message || "An error has occurred",
      loading: false,
    };
  } catch (error) {
    return {
      images: [],
      error: error?.message || "An error has occurred",
      loading: false,
    };
  }
};

const useRandomImage = () => {
  const [data, setData] = useState({
    images: [],
    error: null,
    loading: true,
  });

  const [randomImage, setRandomImage] = useState(null);
  const index = useRef(0);

  useEffect(() => {
    const getData = async () => {
      const d = await getImages();
      d.images.length > 0 && setRandomImage(d.images[0]);
      setData(d);
    };

    getData();
  }, []);

  useEffect(() => {
    let intervalId;

    if (data.images.length > 1) {
      intervalId = setInterval(() => {
        setRandomImage(data.images[index.current]);

        if (index.current === data.images.length - 1) {
          index.current = 0;
        } else {
          index.current += 1;
        }
      }, 15000);
    }

    return () => !!intervalId && clearInterval(intervalId);
  }, [data.isLoading, data.images]);

  return {
    isLoading: data.loading,
    error: data.error,
    image: randomImage,
  };
};

export default useRandomImage;
