const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';

const getData = async () => {
  const response = await fetch(`${api}`);
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(response.status);
  }
};