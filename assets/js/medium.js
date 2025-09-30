
// Fetch Medium posts
async function getMediumPosts() {
  try {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@firmanabdulhakim');
    const data = await response.json();

    const blogContainer = document.getElementById('blog-posts');

    data.items.slice(0, 6).forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'bg-white border rounded-lg p-4 shadow-sm';

      // Get description and limit to 150 chars
      const description = post.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

      // Get categories/tags
      const categories = post.categories.map(cat =>
        `<span class="bg-gray-100 px-2 py-0.5 rounded mr-1">${cat}</span>`
      ).join('');

      postElement.innerHTML = `
        <h3 class="font-semibold text-sm">${post.title}</h3>
        <p class="text-xs text-gray-600 mt-1">${post.pubDate.split(' ')[0]}</p>
        <p class="text-xs text-gray-600 mt-2">${description}</p>
        <div class="flex flex-wrap gap-1 mt-2 text-xs">
          ${categories}
        </div>
        <a href="${post.link}" target="_blank" class="text-xs text-blue-600 hover:underline mt-3 inline-block">Read more</a>
      `;
      blogContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
  }
}

// Load posts when page loads
window.addEventListener('load', getMediumPosts);