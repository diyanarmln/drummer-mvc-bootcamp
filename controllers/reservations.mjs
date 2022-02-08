export default function initReservationsController(db) {
  const create = (request, response) => {
    const bookingDate = request.body.inputReservationDate;
    const { drummer_id } = request.params;

    db.Reservation.create({
      date: bookingDate,
      drummer_id,
      created_at: Date.now(),
      updated_at: Date.now(),
    }).then(() => {
      response.redirect(`/drummer/${drummer_id}`);
    }).catch((error) => console.log(error));
  };

  const index = (request, response) => {
    const { drummer_id } = request.params;

    db.Drummer.findOne({
      where: {
        id: drummer_id,
      },
    }).then((drummer) => {
      const drummerName = drummer.name;
      return db.Reservation.findAll({
        where: {
          drummer_id,
        },
      }).then((reservations) => {
        // console.log(reservations[0].drummer);
        response.render('reservations/drummer-reservations', { reservations, drummerName });
      }).catch((error) => console.log(error)); });
  };

  return {
    create,
    index,
  };
}
