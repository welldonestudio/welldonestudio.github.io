import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welldone Wallet',
    Img: require('@site/static/img/welldone-wallet.png').default,
    description: (
      <>
        Enabling new levels of performance with a single provider.
        A single wallet for all your assets. And develop, test, and deploy easily across multiple chains. 
      </>
    ),
  },
  {
    title: 'Welldone Code',
    Img: require('@site/static/img/welldone-code.png').default,
    description: (
      <>
        Versatile code for enhanced productivity. 
        Apply WELLDONE Code to Remix IDE and Visual Studio Code (development tools) to seamlessly use various languages and compilers when building smart contracts. 
      </>
    ),
  },
  {
    title: 'Welldone AddChain',
    Img: require('@site/static/img/welldone-addchain.png').default,
    description: (
      <>
        The most effortless way to add multi-chain networks. 
        AddChain provides a user-friendly, multi-chain index that allows users to smoothly add networks from a single interface.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} alt='welldone-docs'/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
