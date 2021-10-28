/* eslint-disable no-undef */
// All frontend ajax requests

const getCurrentUser = () => {
  return $.ajax({
    url: "/api/currentUser"
  });
};

const getAllMaps = () => {
  return $.ajax({
    url: "/api/maps"
  });
};

const contributedMapsByUserId = (userId) => {
  return $.ajax({
    url: `/api/maps/${userId}`
  });
};

const favoriteMapsByUserId = (userId) => {
  return $.ajax({
    url: `/api/maps/favorites/${userId}`
  });
};

const pointsByMapId = (mapId) => {
  return $.ajax({
    url: `/api/maps/points/${mapId}`
  });
};