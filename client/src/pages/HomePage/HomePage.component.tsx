import React from 'react';

import image1 from '../../assets/Slider/image1.jpg';
import image2 from '../../assets/Slider/image2.jpg';
import image3 from '../../assets/Slider/image3.jpg';

import { data, data2, data3, data6 } from './HomePage.data';

import { GridList } from '../../components/FeatureSections';
import { CenteredAccordion } from '../../components/FAQs';
import { LargeImages } from '../../components/TeamSections';
import { Split } from '../../components/HeroSections';
import { BrandCard } from '../../components/NewsletterSections';
import { SimpleCard } from '../../components/Stats';

const HomePage = () => {
  return (
    <div className="headers">
      <Split
        color="blue"
        images={[
          {
            id: '1',
            image: image1,
          },
          {
            id: '2',
            image: image2,
          },
          {
            id: '3',
            image: image3,
          },
        ]}
        title1={'Data to enrich your'}
        title2={'online business'}
        description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        button1="Get started"
        button2="Live demo"
      />
      <GridList
        title="Autoplow"
        description="The new revolutionary machine that will change your life!"
        color="gray"
        data={data}
      />
      <CenteredAccordion
        title="Frequently Asked Questions"
        data={data2}
        color="gray"
      />
      <LargeImages
        title="Our Team"
        description="Meet the people behind Autoplow!"
        color="blue"
        data={data3}
      />

      <SimpleCard
        title="Needed by thousands of local Canadians"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
        stat1={{ title: '100%', description: 'Satisfaction guarantee' }}
        stat2={{ title: '24/7', description: 'Support' }}
        stat3={{ title: '90 day', description: 'Warranty' }}
        color="blue"
      />
      <BrandCard />
    </div>
  );
};

export default HomePage;
