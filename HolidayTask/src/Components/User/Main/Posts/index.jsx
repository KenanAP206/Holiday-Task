import React from 'react';
import './Posts.css';

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: '8 Romantic Gifts to Celebrate Your Wedding Anniversary',
      description: 'Flowers have a language all their own. In Victorian times, receiving a...',
      date: 'May 22, 2020',
      category: 'TREND NEWS',
      image: 'https://preview.colorlib.com/theme/florist/img/blog/blog-1.jpg',
    },
    {
      id: 2,
      title: 'Red Rose - Flower of love of Greek Mythology',
      description: 'Flowers have a language all their own. In Victorian times, receiving a...',
      date: 'May 22, 2020',
      category: 'TIPS & IDEA',
      image: 'https://preview.colorlib.com/theme/florist/img/blog/blog-2.jpg',
    },
    {
      id: 3,
      title: 'Beautiful Mandalas Made From Flowers by Kathy Klein',
      description: 'Flowers have a language all their own. In Victorian times, receiving a...',
      date: 'May 22, 2020',
      category: 'DIY & CRAFTS',
      image: 'https://preview.colorlib.com/theme/florist/img/blog/blog-3.jpg',
    },
  ];

  return (
    <section id='posts'>
            <div className="latest-posts">
      <div className="header">
        <h2>
            <h3>LATEST POSTS</h3>
            <p>Florist tricks</p>
        </h2>
        <button className="view-all">VIEW ALL POSTS</button>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="category">{post.category}</div>
            <div className="post-card-text">
                  <a className="post-title">{post.title}</a>
            <p className="post-description">{post.description}</p>
            <p className="post-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default LatestPosts;
