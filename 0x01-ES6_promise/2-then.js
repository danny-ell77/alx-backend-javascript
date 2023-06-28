export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => { //eslint-disable-line
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => { //eslint-disable-line
      console.log('Got a response from the API');
      return new Error();
    });
}
