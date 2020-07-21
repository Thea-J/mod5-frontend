const businessesURL = "http://localhost:3000/api/v1/businesses"; //rails
// const businessesURL = "http://localhost:3002/businesses"; //db.json json-server --watch db.json -p 3002
const ownerURL = "http://localhost:3000/api/v1/business_owners"; //rails


// GET request to 'localhost:3000/api/v1/businesses': Retrieves the businesses array & array of sectors OR error content 
const fetchBusinessesArray = () => {
  return fetch(businessesURL)
  .then((resp) => resp.json() )
  .catch(() => alert("fetching businesses array from /businesses failed"));
}

// GET request to 'localhost:3000/api/v1/businesses/:id': Retrieves the business object with the specified id OR error content 
const fetchBusiness = (businessId) => {
  return fetch(`${businessesURL}/${businessId}`)
  .then((response) => response.json())
  .catch((error) => alert(`fetching data for business ${businessId} didn't work"`));
}

// GET request to 'localhost:3000/api/v1/business_owners/:id': Retrieves the business owner object with the specified id OR error content 
const fetchOwner = (ownerId) => {
  return fetch(`${ownerURL}/${ownerId}`)
  .then((response) => response.json())
  .catch((error) => alert(`fetching data for owner ${ownerId} didn't work"`));
}

const validate = () => {
  // debugger
  const configObject = { headers: { Authorization: localStorage.token } };
  return fetch("http://localhost:3000/api/v1/validate", configObject)
  .then((response) => response.json())
  .catch((error) => alert("Validating JWT token failed"));
}

export default {
  fetchBusinessesArray,
  fetchBusiness,
  fetchOwner,
  validate,
};