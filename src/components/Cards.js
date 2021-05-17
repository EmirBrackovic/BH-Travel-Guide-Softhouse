import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-kravice.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              label='Kravice'
              path='/destination/kravice'
            />
            <CardItem
              src='images/img-sarajevo.jpg'
              text='Donec gravida turpis felis, ullamcorper tempus eros pulvinar vel'
              label='Sarajevo'
              path='/destination/sarajevo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-mostar.jpg'
              text='Phasellus a risus consectetur, convallis sem nec, varius nibh'
              label='Mostar'
              path='/destination/mostar'
            />
            <CardItem
              src='images/img-banjaluka.jpg'
              text='Praesent aliquam sem scelerisque dui mollis pellentesque'
              label='Banja Luka'
              path='/destination/banjaluka'
            />
            <CardItem
              src='images/img-jajce.jpg'
              text='Sed quis pharetra nunc, quis dapibus massa'
              label='Jajce'
              path='/destination/jajce'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
