import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero heading={'Ultimas historias'} image={'/img/blog.jpg'} />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
