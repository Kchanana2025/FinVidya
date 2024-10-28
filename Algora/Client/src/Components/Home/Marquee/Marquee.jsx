
import Marquee from "react-fast-marquee";
import Card from './Card';
import growwImage from './images/groww-logo.jpg';
import zerodhaImage from './images/zerodha-logo.jpg';
import angelOneImage from './images/AngelOne-logo.png';
import upstoxImage from './images/upstox-logo.png';
import motilalOswalImage from './images/motilalOswal-logo.png';
import dhanImage from './images/dhan-logo.jpg';
import fyersImage from './images/fyers-logo.png';

function MarqueeEffect() {
  const data = [
    {
      name: "Groww",
      image: growwImage,
    },
    {
      name: "Zerodha",
      image: zerodhaImage,
    },
    {
      name: "Angel One",
      image: angelOneImage,
    },
    {
      name: "Upstox",
      image: upstoxImage,
    },
    {
        name: "Motilal Oswal",
        image: motilalOswalImage,
      },
      {
        name: "Dhan",
        image: dhanImage,
      },
      {
        name: "Fyers",
        image: fyersImage,
      }
  ];

  return (
    <>
      <Marquee>
        {data.map((item, index) => {
            return <>
                <Card key={index} name={item.name} image={item.image} />
            </>
        })}
      </Marquee>
    </>
  )
}

export default MarqueeEffect;
