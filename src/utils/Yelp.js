const apiKey = "<YOUR_API_KEY_HERE>";

const Yelp = {
  search(term, location, sortBy) {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${corsProxy}https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${sortBy}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.businesses) {
          return [];
        }

        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url || "https://via.placeholder.com/150",
          name: business.name || "No Name",
          address: business.location?.address1 || "No Address",
          city: business.location?.city || "No City",
          state: business.location?.state || "No State",
          zipCode: business.location?.zip_code || "00000",
          category: business.categories?.[0]?.title || "Unknown",
          rating: business.rating || 0,
          reviewCount: business.review_count || 0,
        }));
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        return [];
      });
  },
};

export default Yelp;
