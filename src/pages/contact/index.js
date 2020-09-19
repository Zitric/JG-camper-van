import React from 'react';
import { navigate } from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class ContactPage extends React.Component {
  state = { isValidated: false };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Hero heading={'Contacto'} image={this.props.data.heroImage} />
        <section className="section grid">
          <div className="columns">
            <div className="column">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
                Contacto
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const ContactPageQuery = graphql`
  query ContactPage {
    heroImage: file(relativePath: { eq: "contact.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
