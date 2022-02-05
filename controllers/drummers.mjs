export default function initDrummersController(db) {
  const findOne = (request, response) => {
    db.Drummer.findOne()
      .then((drummers) => {
        response.render('drummer/show', { drummers });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    findOne,
  };
}
