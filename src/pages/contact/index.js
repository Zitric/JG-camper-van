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
              <p>
                Estamos en Sevilla capital. Desde aquí es donde alquilamos
                nuestras Camper-van.
              </p>
              <p>
                Para reservar, preguntar o consultar no dudes en ponerte en
                contact o nosotros. Estaremos encantados de echarte una mano
                para que puedas disfrutar lo antes posible
              </p>
            </div>
          </div>
          <div className="columns is-4 content">
            <div className="price column">
              <h3>Jerónimo</h3>
              <ul
                className="contact"
                style={{ textAlign: 'center', marginLeft: '0' }}
              >
                <li>
                  <span>jalarconlastra@gmail.com</span>
                </li>
                <li>
                  <span>634 84 49 43</span>
                </li>
                <li>
                  <a href="https://wa.me/34634844943" target="blank">
                    <button className="button is-success">Whatsapp</button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="price column">
              <h3>Gonzalo</h3>
              <ul style={{ textAlign: 'center', marginLeft: '0' }}>
                <li>
                  <span>g.alarconruiz@gmail.com</span>
                </li>
                <li>
                  <span>617 83 73 05 </span>
                </li>
                <li>
                  <a href="https://wa.me/34617837305" target="blank">
                    <button className="button is-success">Whatsapp</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns is-4 content">
            <div className="price column">
              <p>
                Sígenos en nuestras{' '}
                <a
                  title="facebook"
                  href="https://www.facebook.com/jgcamper"
                  target="blank"
                >
                  Facebook
                </a>{' '}
                e{' '}
                <a
                  title="instagram"
                  href="https://www.instagram.com/jgcamper"
                  target="blank"
                >
                  Instagram
                </a>{' '}
                para conocernos mejor!{' '}
              </p>
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
