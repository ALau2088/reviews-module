const faker = require('faker');
const db = require('./index.js');

function generateReviews() {

  let reviews = []
  //determine # of reviews to randomly generate (id)
  for (let id=1; id <= 1; id++) {

    let custName = faker.name.firstName();
    let custDate = faker.date.past();
    let custUrl = faker.image.imageUrl();
    let custReview = faker.lorem.paragraph();
    let overallRating = Math.floor(Math.random() * Math.floor(6));
    let accuracyRating = Math.floor(Math.random() * Math.floor(6));
    let commRating = Math.floor(Math.random() * Math.floor(6));
    let cleanRating = Math.floor(Math.random() * Math.floor(6));
    let locationRating = Math.floor(Math.random() * Math.floor(6));
    let checkinRating = Math.floor(Math.random() * Math.floor(6));
    let valueRating = Math.floor(Math.random() * Math.floor(6));
    let hostName = faker.name.firstName();
    let hostDate = faker.date.recent();
    let hostUrl = faker.image.imageUrl();
    let hostResponse = faker.lorem.paragraph();
    let listingId = Math.floor(Math.random() * Math.floor(101));

//need to account for smaller pool of hosts, customer names, and consistent name to url(picture)

    reviews.push({
        "id": id,
        "custName": custName,
        "custDate": custDate,
        "custUrl": custUrl,
        "custReview": custReview,
        "overallRating": overallRating,
        "accuracyRating": accuracyRating,
        "commRating": commRating,
        "cleanRating": cleanRating,
        "locationRating": locationRating,
        "checkinRating": checkinRating,
        "valueRating": valueRating,
        "hostName": hostName,
        "hostDate": hostDate,
        "hostUrl": hostUrl,
        "hostResponse": hostResponse,
        "listingId": listingId
    });
  }

  return reviews;
}

let reviewsData = generateReviews();

for (let i = 0; i < reviewsData.length; i++) {
  db.seedData(reviewsData[i], (err, succ) => {
    if (err) {
      console.log(err);
    } else {
      console.log('stored in database');
    }
  });
};

module.exports.reviewsData = reviewsData;