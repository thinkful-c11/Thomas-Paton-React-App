import React from 'react';

export default function CardDisplay(props) {
  const cardImgs = props.cardImgs.map((cardImg, index) => {
    return <img key={index} src={cardImg} />;
  });
  return (
    <div>
      {cardImgs}
    </div>
  );
}
