// --- Sample News Data ---
const trendingNews = [
    {
        title: "Cyber Odyssey Breaks Sales Records",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=600&q=80",
        date: "May 21, 2025",
        author: "Alex Mercer",
        desc: "The much-anticipated RPG 'Cyber Odyssey' has shattered launch sales records, setting a new benchmark for the genre.",
        link: "#"
    },
    {
        title: "Esports World Cup 2025 Announced",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=600&q=80",
        date: "May 20, 2025",
        author: "Samira Chen",
        desc: "The global esports community is buzzing as the Esports World Cup 2025 is officially announced, promising the largest prize pool in history.",
        link: "#"
    },
    {
        title: "Pixel Racer: New Update Adds Night Mode",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=600&q=80",
        date: "May 19, 2025",
        author: "Jordan Lee",
        desc: "Pixel Racer’s latest update introduces a stunning night mode and new cars to rev up the competition.",
        link: "#"
    }
];

const featuredNews = [
    {
        title: "Top 10 Indie Games to Watch in 2025",
        date: "May 18, 2025",
        author: "Dana Knight",
        desc: "Discover the most promising indie titles that are set to take the gaming world by storm this year.",
        link: "#"
    },
    {
        title: "Inside the Dev Studio: QuantumForge",
        date: "May 17, 2025",
        author: "Leo Tran",
        desc: "We sit down with the creators of QuantumForge to discuss the challenges and triumphs of building AAA titles.",
        link: "#"
    }
];

// --- Function to Load Trending News ---
function loadTrendingNews() {
    const container = document.getElementById('trendingContainer');
    trendingNews.forEach(news => {
        const card = document.createElement('div');
        card.className = 'trending-card';
        card.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="trending-image">
            <div class="trending-content">
                <h3 class="trending-title">${news.title}</h3>
                <div class="trending-meta">${news.date} | By ${news.author}</div>
                <p class="trending-desc">${news.desc}</p>
                <a href="${news.link}" class="read-more">Read More</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Function to Load Featured News ---
function loadFeaturedNews() {
    const container = document.getElementById('featuredContainer');
    featuredNews.forEach(news => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.innerHTML = `
            <h3 class="featured-title">${news.title}</h3>
            <div class="featured-meta">${news.date} | By ${news.author}</div>
            <p class="featured-desc">${news.desc}</p>
            <a href="${news.link}" class="featured-link">Read Full Article</a>
        `;
        container.appendChild(card);
    });
}

// --- Dark Mode Toggle ---
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// --- Load on Page Ready ---
document.addEventListener('DOMContentLoaded', () => {
    loadTrendingNews();
    loadFeaturedNews();
});
