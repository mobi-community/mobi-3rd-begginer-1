import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
export const UseHandleUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrlValue = (key) => {
    return searchParams.get(key);
  };

  const setUrlValue = (key, value) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    setUrlValue('page', 1);
    setUrlValue('perPage', 20);
  }, []);

  return { getUrlValue, setUrlValue };
};
