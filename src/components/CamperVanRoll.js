import React from 'react';
import { Link } from 'gatsby';
import UseCamperVanPosts from '../hooks/UseCamperVanPosts';

const CamperVanRolls = () => {
  const camperVans = UseCamperVanPosts();

  console.log('camper-vans', camperVans);
  return 'null';
};

export default CamperVanRolls;
