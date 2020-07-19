const businessesURL = "http://localhost:3000/api/v1/businesses"; //rails
// const businessesURL = "http://localhost:3002/businesses"; //db.json json-server --watch db.json -p 3002


// GET request to 'localhost:3000/api/v1/businesses': Retrieves the businesses array OR error content 
const fetchBusinessesArray = () => {
return fetch(businessesURL)
  .then((resp) => resp.json() )
  .catch(() => alert("fetching businesses array from /businesses failed"));
}

export default {
  fetchBusinessesArray,
};