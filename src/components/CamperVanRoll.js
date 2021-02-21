import React from 'react';
import { Link } from 'gatsby';
import UseCamperVanPosts from '../hooks/UseCamperVanPosts';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const CamperVanRolls = () => {
  const camperVans = UseCamperVanPosts();

  console.log('camper-vans', camperVans);
  return (
    <div className="columns">
      {camperVans &&
        camperVans.length > 0 &&
        camperVans.map((camperVan) => {
          return (
            <Link className="column" key={camperVan.id} to={camperVan.slug}>
              <div className="card">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: camperVan.avatar[0],
                    alt: `Camper-van-avatar`,
                  }}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default CamperVanRolls;
