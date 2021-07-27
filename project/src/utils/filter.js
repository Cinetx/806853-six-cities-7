export const filterOffers = (city, offersArray) => offersArray.filter((offer) => city.toLowerCase() === offer.city.name.toLowerCase());

