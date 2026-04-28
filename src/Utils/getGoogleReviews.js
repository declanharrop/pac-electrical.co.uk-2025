export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();

    if (data.result) {
      return {
        reviews: data.result.reviews || [],
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return null;
  }
}