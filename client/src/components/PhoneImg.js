import React, { useState, useEffect  } from 'react';

const PhoneImg = () => {
  const images = [
    'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
    'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg'
  ];

  const [ image, setIgame ] = useState(images[1]);
  let count = 0;
  let cleanUp;

  useEffect(() => {
    cleanUp = setInterval(() => {
      if (count === 4) {
        count = 0;
      } else {
        count += 1;
      }
      setIgame(images[count])
    }, 3000);
    return () => clearInterval(cleanUp)
  }, [])




  return (
    <div className='phone-img'>
      <img src={image} alt="phone-images" />
    </div>
  )
};

export default PhoneImg;
















// import React, { useState } from 'react';
//
// const PhoneImg = () => {
//   const images = [
//     'https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg',
//     'https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg',
//     'https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg',
//     'https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg',
//     'https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg'
//   ];
//
//   const [ image, setIgame ] = useState(images[1]);
//   const [ count, setCount ] = useState(0);
//   // setInterval(() => {
//   //   console.log(image)
//   //   if (count === 3) {
//   //     setCount(0)
//   //   } else {
//   //     setCount(n => { return n + 1 })
//   //   }
//   //   setIgame(images[count])
//   // }, 2000);
//
//   return (
//     <div className='phone-img'>
//       <img src={image} alt="ooooo" />
//     </div>
//   )
// };
//
// export default PhoneImg;
