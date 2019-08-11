const fetch = require('node-fetch');
const ServiceEndpoints = require('./service_endpoints.json');

module.exports.fetchLocations = async (name, type = 'all') => {
  return await fetch(`${ServiceEndpoints.opendata}?query=${name}&type=${type}`);
};