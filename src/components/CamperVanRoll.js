import React from 'react';
import { Link } from 'gatsby';
import UseCamperVanPosts from '../hooks/UseCamperVanPosts';

const CamperVanRolls = () => {
  const camperVans = UseCamperVanPosts();

  console.log('camper-vans', camperVans);
  return (
    <div className="columns">
      {camperVans.map((camperVan) => {
        return (
          <Link className="column" key={camperVan.id} to={camperVan.slug}>
            <div className="card">
              <div className="card-content">
                <p className="title">Camper van</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CamperVanRolls;
