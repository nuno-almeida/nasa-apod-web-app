import { useEffect, useRef, useState } from "react";

export const QueryType = {
  Random: "Random",
  ByDate: "ByDate",
};

const cache = {};

const getUrl = ({ type, date }) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  if (type === QueryType.Random) {
    return `${url}&count=6`;
  }

  return `${url}&date=${date}`;
};

const getImages = async ({ type, date }) => {
  try {
    let data;

    if (!!date && cache[date]) {
      data = cache[date];

      return {
        images: Array.isArray(data) ? data : [data],
        error: null,
        loading: false,
      };
    }

    const response = await fetch(getUrl({ type, date }));
    data = await response.json();

    if (response.ok) {
      if (!!date) {
        cache[date] = data;
      }

      return {
        images: Array.isArray(data) ? data : [data],
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

const useQuery = ({ type, date }) => {
  const [data, setData] = useState({
    images: [],
    error: null,
    loading: true,
  });

  const [image, setImage] = useState(null);
  const index = useRef(0);

  useEffect(() => {
    const getData = async () => {
      const d = await getImages({ type, date });
      d.images.length > 0 && setImage(d.images[0]);
      setData(d);
    };

    getData();
  }, [type, date]);

  useEffect(() => {
    let intervalId;

    if (data.images.length > 1) {
      intervalId = setInterval(() => {
        setImage(data.images[index.current]);

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
    image,
  };
};

export default useQuery;
