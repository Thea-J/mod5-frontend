const businessesURL = "http://localhost:3000/api/v1/businesses"; //rails
// const businessesURL = "http://localhost:3002/businesses"; //db.json json-server --watch db.json -p 3002


// GET request to 'localhost:3000/api/v1/businesses': Retrieves the businesses array & array of sectors OR error content 
const fetchBusinessesArray = () => {
return fetch(businessesURL)
  .then((resp) => resp.json() )
  .catch(() => alert("fetching businesses array from /businesses failed"));
}

function validate() {
  // debugger
  const configObject = { headers: { Authorization: localStorage.token } };
  return fetch("http://localhost:3000/api/v1/validate", configObject)
    .then((response) => response.json())
    .catch((error) => alert("Validating JWT token failed"));
}

export default {
  fetchBusinessesArray,
  validate,
};