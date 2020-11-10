import React from 'react';

import { data, data2, data3 } from './HeadersPage.data';

import { SimpleHeader } from '../../layout/Header';
import { GridList } from '../../components/FeatureSections';
import { CenteredAccordion } from '../../components/FAQs';
import { C4WithCompanyMission } from '../../layout/Footer';
import { ContactSplitWithImage } from '../../components/ContactSections';
import { LargeImages } from '../../components/TeamSections';
import { ComparsionTable } from '../../components/PricingSections';
import TestComponent from '../../components/TestComponent';

const HeadersPage = () => {
  return (
    <div className="headers">
      <SimpleHeader />
      <GridList
        title="Autoplow"
        description="New description"
        color="gray"
        data={data}
      />
      <CenteredAccordion
        title="Frequently asked questions"
        data={data2}
        color="gray"
      />
      <ContactSplitWithImage
        description="
            We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us."
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
      />
      <div className="u-margin-top-medium" />
      <LargeImages
        title="Our Team"
        description="Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et."
        color="indigo"
        data={data3}
      />
      <div className="u-margin-top-medium" />
      <ComparsionTable />
      <C4WithCompanyMission />
      <TestComponent />
      <TestComponent />
      <TestComponent />
      <TestComponent />
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </div>
  );
};

export default HeadersPage;
