import React from 'react';
import { Link } from 'gatsby';
import UseBlogPosts from '../hooks/UseBlogPosts';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const BlogRoll = () => {
  const posts = UseBlogPosts();

  console.log('posts', posts);

  return posts ? (
    <div className="columns is-multiline">
      {posts.map((post) => (
        <div className="is-parent column is-6" key={post.id}>
          <article
            className={`blog-list-item tile is-child box notification ${
              post.featuredpost ? 'is-featured' : ''
            }`}
          >
            <header>
              {post.image ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.image,
                      alt: `featured image thumbnail for post ${post.title}`,
                    }}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.slug}
                >
                  {post.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">{post.date}</span>
              </p>
            </header>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button" to={post.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        </div>
      ))}
    </div>
  ) : null;
};

export default BlogRoll;
