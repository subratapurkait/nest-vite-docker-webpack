import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content py-4">
    <div className="w-full">
      <p className="text-center">
        <Translate contentKey="footer">Your footer</Translate>
      </p>
    </div>
  </div>
);

export default Footer;
