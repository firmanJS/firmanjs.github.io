const MEDIUM_USERNAME = 'firmanabdulhakim';
const MEDIUM_RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

export async function fetchMediumPosts() {
  try {
    const response = await fetch(MEDIUM_RSS_URL);
    const data = await response.json();
    if (data.status !== 'ok') return [];
    return data.items.slice(0, 6).map(item => ({
      title: item.title,
      link: item.link,
      thumbnail: item.thumbnail || '',
      description: item.description.replace(/<[^>]*>/g, '').slice(0, 200) + '...',
      pubDate: new Date(item.pubDate).toLocaleDateString('id-ID', {
        year: 'numeric', month: 'long', day: 'numeric'
      }),
      categories: item.categories || [],
    }));
  } catch {
    return [];
  }
}
