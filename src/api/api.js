export const moviesAPI = (setData, setTotalCount, search, page, details) => {
  const url = `http://www.omdbapi.com/?s=${
    search ? search : "Batman"
  }?&page=${page}&apikey=d381a153`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(page === 1 ? data.Search : [...details, ...data.Search]);
      setTotalCount(data.totalResults);
    });
};
