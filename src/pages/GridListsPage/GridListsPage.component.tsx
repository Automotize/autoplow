import React from 'react';

import {
  SmallContactCards,
  ContactCards,
  SimpleCards,
} from '../../components/GridLists';

import { data, data2 } from './GridListsPage.data';

const GridLists = () => {
  return (
    <div className="grid-lists">
      <SmallContactCards data={data} />
      <div className="u-margin-bottom-big"></div>
      <ContactCards data={data} />
      <div className="u-margin-bottom-big"></div>
      <SimpleCards data={data2} />
    </div>
  );
};

export default GridLists;
