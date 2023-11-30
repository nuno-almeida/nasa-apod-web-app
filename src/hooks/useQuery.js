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

const getAPOD = async ({ type, date }) => {
  try {
    let data;

    if (!!date && cache[date]) {
      data = cache[date];

      return {
        data: Array.isArray(data) ? data : [data],
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
        data: Array.isArray(data) ? data : [data],
        error: null,
        loading: false,
      };
    }

    return {
      data: [],
      error: data?.error?.message || "An error has occurred",
      loading: false,
    };
  } catch (error) {
    return {
      data: [],
      error: error?.message || "An error has occurred",
      loading: false,
    };
  }
};

const useQuery = ({ type, date }) => {
  const [result, setResult] = useState({
    data: [],
    error: null,
    loading: true,
  });

  const [data, setData] = useState(null);
  const index = useRef(0);

  useEffect(() => {
    const getData = async () => {
      if (type === QueryType.ByDate && !date) {
        return;
      }

      const res = await getAPOD({ type, date });
      res.data.length > 0 && setData(res.data[0]);
      setResult(res);
    };

    getData();
  }, [type, date]);

  useEffect(() => {
    let intervalId;

    if (result.data.length > 1) {
      intervalId = setInterval(() => {
        setData(result.data[index.current]);

        if (index.current === result.data.length - 1) {
          index.current = 0;
        } else {
          index.current += 1;
        }
      }, 15000);
    }

    return () => !!intervalId && clearInterval(intervalId);
  }, [result.isLoading, result.data]);

  return {
    isLoading: result.loading,
    error: result.error,
    data,
  };
};

export default useQuery;
