export default function initDrummersController(db) {
  const findOne = (request, response) => {
    const { id } = request.params;
    console.log('checking id', id);
    db.Drummer.findOne({
      where: {
        id: `${id}`,
      },
    })
      .then((drummers) => {
        response.render('drummer/showOne', { drummers });
      })
      .catch((error) => console.log(error));
  };

  const index = (request, response) => {
    db.Drummer.findAll().then((drummers) => {
      console.log(drummers);
      response.render('drummer/showAll', { drummers });
    }).catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    findOne,
    index,
  };
}
