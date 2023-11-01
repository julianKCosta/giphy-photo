// Setup the URL with
const url_root = `https://api.giphy.com/v1/gifs/`;
const api_key = "uHodbMV176hx1GkTR1FroMX29GMrtQQB";
const search_term = `reza`;
const url = `${url_root}search?q=${search_term}&api_key=${api_key}&limit=5`;
// Get the GIFs
async function getGIFs() {
  // Wait for the data
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  // Log the data object inside the data object!
  console.log(data.data);
  // Create markup for each GIF
  let markup = ``;
  data.data.map((gif) => {
    markup += `<img src="${gif.images.original.url}" alt="${gif.title}" />`;
    // markup=`"<img src=https://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6" alt="hack coding GIF by Matthew Butler" />`;
  });
  console.log(markup);
  // Add the GIF markup to the page
  document.querySelector(`#app`).insertAdjacentHTML(`beforeend`, markup);
}

getGIFs();