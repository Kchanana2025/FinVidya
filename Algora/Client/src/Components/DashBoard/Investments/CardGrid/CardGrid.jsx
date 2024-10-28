
import Card from '../Card/Card';
import mf_image from '../images/mf_image.jpg'


const LargeCapFunds = [
  {
    image: mf_image, 
    title: 'Motilal Oswal Large Cap Fund Direct',
    returnRate: '27.8',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/motilal-oswal-most-focused-midcap-30-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Parag Parikh Large Cap Fund Direct',
    returnRate: '21.8',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/parag-parikh-flexi-cap-fund-direct'
  },
  {
    image: mf_image, 
    title: 'Axis Small Cap Fund Direct Growth',
    returnRate: '25.8',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/axis-small-cap-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Nippon India Large Cap Fund Direct',
    returnRate: '25.9',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/nippon-india-large-cap-fund-direct'
  },
  // {
  //   image: mf_image, 
  //   title: 'Nippon India Large Cap Fund Direct',
  //   returnRate: '25.9',
  //   period: '(3Y)',
  //   link:'https://groww.in/mutual-funds/nippon-india-large-cap-fund-direct'
  // },
  // {
  //   image: mf_image, 
  //   title: 'UTI Nifty200 Momentum 30 Index Fund Direct Growth',
  //   returnRate: '25.9',
  //   period: '(3Y)',
  //   link:'https://groww.in/mutual-funds/uti-nifty200-momentum-30-index-fund-direct-growth'
  // },
  // {
  //   image: mf_image, 
  //   title: 'DSP Nifty Next 50 Index Fund Direct Growth',
  //   returnRate: '27.8',
  //   period: '(3Y)',
  //   link:'https://groww.in/mutual-funds/dsp-nifty-next-50-index-fund-direct-growth'
  // },
  // {
  //   image: mf_image, 
  //   title: 'ICICI Prudential Bluechip Fund Direct Growth',
  //   returnRate: '27.8',
  //   period: '(3Y)',
  //   link:'https://groww.in/mutual-funds/icici-prudential-focused-bluechip-equity-fund-direct-growth'
  // },
];

const MidCapFunds = [
  {
    image: mf_image, 
    title: 'Motilal Oswal Midcap Fund Direct Growth',
    returnRate: '41.5',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/motilal-oswal-most-focused-midcap-30-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Quant Mid Cap Fund Direct Growth',
    returnRate: '35.23',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/quant-mid-cap-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Nippon India Growth Fund Direct Growth',
    returnRate: '31.49',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/nippon-india-growth-fund-direct-growth' },
    {
      image: mf_image, 
      title: 'HDFC Mid Cap Opportunities Direct Plan Growth',
      returnRate: '30.8',
      period: '(3Y)',
      link:'https://groww.in/mutual-funds/hdfc-mid-cap-opportunities-fund-direct-growth'
    },
    // {
    //   image: mf_image, 
    //   title: 'Kotak Emerging Equity Fund Direct Growth',
    //   returnRate: '27.27',
    //   period: '(3Y)',
    //   link:'https://groww.in/mutual-funds/kotak-emerging-equity-scheme-direct-growth'
    // },
    // {
    //   image: mf_image, 
    //   title: 'ICICI Prudential Bluechip Fund Direct Growth',
    //   returnRate: '27.8',
    //   period: '(3Y)',
    //   link:'https://groww.in/mutual-funds/icici-prudential-focused-bluechip-equity-fund-direct-growth'
    // },
    // {
    //   image: mf_image, 
    //   title: 'Axis Midcap Direct Plan Growth',
    //   returnRate: '23.32',
    //   period: '(3Y)',
    //   link:'https://groww.in/mutual-funds/axis-midcap-fund-direct-growth'
    // },
]

const SmallCapFunds = [
  {
    image: mf_image, 
    title: 'Nippon India Small Cap Fund Direct Growth',
    returnRate: '34.7',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/nippon-india-small-cap-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Quant Small Cap Fund Direct Growth',
    returnRate: '33.6',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/quant-small-cap-fund-direct-plan-growth'
  },
  {
    image: mf_image, 
    title: 'Tata Small Cap Fund Direct Growth',
    returnRate: '30.04',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/tata-small-cap-fund-direct-growth'
  },
  {
    image: mf_image, 
    title: 'Axis Small Cap Fund Direct Growth',
    returnRate: '26.18',
    period: '(3Y)',
    link:'https://groww.in/mutual-funds/axis-small-cap-fund-direct-growth'}
]

const CardGrid = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-6 px-5 mt-5">Popular Large Cap Funds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {LargeCapFunds.map((fund, index) => (
            <Card
              key={index}
              image={fund.image}
              title={fund.title}
              returnRate={fund.returnRate}
              period={fund.period}
              link={fund.link}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6 px-5 mt-5">Popular Mid Cap Funds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MidCapFunds.map((fund, index) => (
            <Card
              key={index}
              image={fund.image}
              title={fund.title}
              returnRate={fund.returnRate}
              period={fund.period}
              link={fund.link}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6 px-5 mt-5">Popular Small Cap Funds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SmallCapFunds.map((fund, index) => (
            <Card
              key={index}
              image={fund.image}
              title={fund.title}
              returnRate={fund.returnRate}
              period={fund.period}
              link={fund.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default CardGrid;
