import React from 'react';
import './Home.css';
import SearchIcon from '@mui/icons-material/Search';

const trendingMobiles = [
  {
    id: 'm1',
    name: 'Pixel 9 Pro',
    badge: 'Top Pick',
    price: 'From ₹94,999',
    chipset: 'Tensor G4',
    display: '6.7” LTPO OLED',
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'm2',
    name: 'Galaxy S24',
    badge: 'Trending',
    price: 'From ₹74,999',
    chipset: 'Snapdragon 8 Gen 3',
    display: '6.2” Dynamic AMOLED',
    image:
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'm3',
    name: 'iPhone 15',
    badge: 'Editor Choice',
    price: 'From ₹79,900',
    chipset: 'A16 Bionic',
    display: '6.1” Super Retina XDR',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
  }
];

const upcomingLaptops = [
  {
    id: 'l1',
    name: 'ASUS Zenbook 15 OLED',
    eta: 'Expected: Q3 2026',
    cpu: 'Intel Core Ultra 9',
    gpu: 'Intel Arc',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'l2',
    name: 'Lenovo Yoga Pro 9i',
    eta: 'Expected: Q2 2026',
    cpu: 'Intel Core Ultra 7',
    gpu: 'RTX 4060',
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'l3',
    name: 'MacBook Air M4',
    eta: 'Expected: Q1 2026',
    cpu: 'Apple M4',
    gpu: 'Integrated 10-core',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
  }
];

const comparisons = [
  {
    id: 'c1',
    title: 'iPhone 15 vs Galaxy S24',
    summary: 'Display brightness, battery endurance, and camera low-light performance compared.'
  },
  {
    id: 'c2',
    title: 'MacBook Air M4 vs XPS 13',
    summary: 'Performance-per-watt and portability showdown for productivity users.'
  },
  {
    id: 'c3',
    title: 'Nothing Phone vs Pixel A-Series',
    summary: 'Value-focused Android comparison with software support insights.'
  }
];

function Home() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-title">
        <p className="hero__eyebrow">ormobiles • Discover • Compare • Decide</p>
        <h1 id="hero-title">Find the best mobile or laptop at the best price.</h1>
        <p className="hero__description">
          Compare specifications, latest prices, and key differences across top tech products with
          a fast, structured, mobile-first experience.
        </p>
        <form className="hero__search" role="search" aria-label="Search mobiles and laptops">
          <SearchIcon className="hero__searchIcon" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search phones, laptops, chipsets, and comparisons…"
            aria-label="Search products"
          />
        </form>
      </section>

      <section className="category" aria-labelledby="trending-mobiles-title">
        <div className="category__header">
          <h2 id="trending-mobiles-title">Trending Mobiles</h2>
          <a href="/" aria-label="View all trending mobiles">
            View all
          </a>
        </div>
        <div className="grid">
          {trendingMobiles.map((mobile) => (
            <article className="card" key={mobile.id}>
              <div className="card__imageWrap">
                <img src={mobile.image} alt={mobile.name} loading="lazy" />
              </div>
              <div className="card__content">
                <h3>{mobile.name}</h3>
                <p className="card__badge">{mobile.badge}</p>
                <p className="card__price">{mobile.price}</p>
                <ul>
                  <li>{mobile.chipset}</li>
                  <li>{mobile.display}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="category" aria-labelledby="upcoming-laptops-title">
        <div className="category__header">
          <h2 id="upcoming-laptops-title">Upcoming Laptops</h2>
          <a href="/" aria-label="View all upcoming laptops">
            Product timeline
          </a>
        </div>
        <div className="grid">
          {upcomingLaptops.map((laptop) => (
            <article className="card" key={laptop.id}>
              <div className="card__imageWrap">
                <img src={laptop.image} alt={laptop.name} loading="lazy" />
              </div>
              <div className="card__content">
                <h3>{laptop.name}</h3>
                <p className="card__badge">{laptop.eta}</p>
                <ul>
                  <li>{laptop.cpu}</li>
                  <li>{laptop.gpu}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="category" aria-labelledby="latest-comparisons-title">
        <div className="category__header">
          <h2 id="latest-comparisons-title">Latest Comparisons</h2>
          <a href="/" aria-label="Open comparisons hub">
            Comparison hub
          </a>
        </div>
        <div className="comparisonGrid">
          {comparisons.map((item) => (
            <article className="comparisonCard" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <button type="button">Compare now</button>
            </article>
          ))}
        </div>
      </section>

      <section className="blog" aria-labelledby="buying-guides-title">
        <h2 id="buying-guides-title">Buying Guides & Tech Blog</h2>
        <p>
          Build confidence before you buy with in-depth guides on camera quality, battery health,
          thermals, and long-term software support.
        </p>
      </section>
    </main>
  );
}

export default Home;
