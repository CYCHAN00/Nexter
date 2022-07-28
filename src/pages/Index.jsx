import React from 'react';

import {
  RiGlobalLine,
  RiTrophyLine,
  RiMapPin2Line,
  RiKey2Line,
  RiBarChartGroupedLine,
  RiLockPasswordLine,
} from 'react-icons/ri';

const Index = () => {
  return (
    <div className='container'>
      <div className='sidebar'>
        <button className='nav-btn'></button>
      </div>
      <header className='header'>
        <img
          src={require('../img/logo.png')}
          alt='Nexter logo'
          class='header__logo'
        />
        <h3 class='heading-3'>Your own home:</h3>
        <h1 class='heading-1'>The ultimate personal freedom</h1>
        <button class='btn header__btn'>View our properties</button>
        <div class='header__seenon-text'>Seen on</div>
        <div class='header__seenon-logos'>
          <img src={require('../img/logo-bbc.png')} alt='Seen on logo 1' />
          <img src={require('../img/logo-forbes.png')} alt='Seen on logo 2' />
          <img
            src={require('../img/logo-techcrunch.png')}
            alt='Seen on logo 3'
          />
          <img src={require('../img/logo-bi.png')} alt='Seen on logo 4' />
        </div>
      </header>
      <div className='realtors'>
        <h3 class='heading-3'>Top 3 Realtors</h3>
        <div class='realtors__list'>
          <img
            src={require('../img/realtor-1.jpeg')}
            alt='Realtor 1'
            class='realtors__img'
          />
          <div class='realtors__details'>
            <h4 class='heading-4 heading-4--light'>Erik Feinman</h4>
            <p class='realtors__sold'>245 houses sold</p>
          </div>

          <img
            src={require('../img/realtor-2.jpeg')}
            alt='Realtor 2'
            class='realtors__img'
          />
          <div class='realtors__details'>
            <h4 class='heading-4 heading-4--light'>Kim Brown</h4>
            <p class='realtors__sold'>212 houses sold</p>
          </div>

          <img
            src={require('../img/realtor-3.jpeg')}
            alt='Realtor 3'
            class='realtors__img'
          />
          <div class='realtors__details'>
            <h4 class='heading-4 heading-4--light'>Toby Ramsey</h4>
            <p class='realtors__sold'>198 houses sold</p>
          </div>
        </div>
      </div>
      <section className='features'>
        <div className='feature'>
          <div className='feature__icon'>
            <RiGlobalLine size={'4.5rem'}></RiGlobalLine>
          </div>
          <h4 className='heading-4 heading-4--dark'>
            World's best luxury homes
          </h4>
          <p className='feature__text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className='feature'>
          <div className='feature__icon'>
            <RiTrophyLine size={'4.5rem'}></RiTrophyLine>
          </div>

          <h4 className='heading-4 heading-4--dark'>
            Only the best properties
          </h4>
          <p className='feature__text'>
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>
        <div className='feature'>
          <div className='feature__icon'>
            <RiMapPin2Line size={'4.5rem'}></RiMapPin2Line>
          </div>

          <h4 className='heading-4 heading-4--dark'>
            All home in top location
          </h4>
          <p className='feature__text'>
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>
        <div className='feature'>
          <div className='feature__icon'>
            <RiKey2Line size={'4.5rem'}></RiKey2Line>
          </div>

          <h4 className='heading-4 heading-4--dark'>New Home in one week</h4>
          <p className='feature__text'>
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='feature'>
          <div className='feature__icon'>
            <RiBarChartGroupedLine size={'4.5rem'}></RiBarChartGroupedLine>
          </div>

          <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
          <p className='feature__text'>
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className='feature'>
          <div className='feature__icon'>
            <RiLockPasswordLine size={'4.5rem'}></RiLockPasswordLine>
          </div>

          <h4 className='heading-4 heading-4--dark'>
            Secure payments on nexter
          </h4>
          <p className='feature__text'>
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
      <div className='story__pictures'>
        <img
          src={require('../img/story-1.jpeg')}
          alt='Couple with new house'
          className='story__img--1'
        />
        <img
          src={require('../img/story-2.jpeg')}
          alt='Now house'
          className='story__img--2'
        />
      </div>
      <div className='story__content'>
        <h3 className='heading-3 mb-sm '>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className='story__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className='btn'>Find your own home</button>
      </div>

      <section className='homes'>
        <div className='home'>
          <img
            src={require('../img/house-1.jpeg')}
            alt='House1'
            className='home__img'
          />

          <span class='material-symbols-outlined home__like'>favorite</span>

          <h5 className='home__name'>Beautiful Family House</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>USA</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              325 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$1,200,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>

        <div className='home'>
          <img
            src={require('../img/house-2.jpeg')}
            alt='House2'
            className='home__img'
          />
          <span class='material-symbols-outlined home__like'>favorite</span>
          <h5 className='home__name'>Modern Glass Villa</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>Canada</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>6 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              450 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$2,750,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>

        <div className='home'>
          <img
            src={require('../img/house-3.jpeg')}
            alt='House3'
            className='home__img'
          />
          <span class='material-symbols-outlined home__like'>favorite</span>
          <h5 className='home__name'>Cozy Country House</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>UK</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>4 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              250 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$850,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>
        <div className='home'>
          <img
            src={require('../img/house-4.jpeg')}
            alt='House4'
            className='home__img'
          />
          <span class='material-symbols-outlined home__like'>favorite</span>
          <h5 className='home__name'>Large Rustical Villa</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>Portugal</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>6 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              480 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$1,950,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>

        <div className='home'>
          <img
            src={require('../img/house-5.jpeg')}
            alt='House5'
            className='home__img'
          />
          <span class='material-symbols-outlined home__like'>favorite</span>
          <h5 className='home__name'>Majestic Palace House</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>Germany</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>18 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              4230 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$9,500,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>
        <div className='home'>
          <img
            src={require('../img/house-6.jpeg')}
            alt='House6'
            className='home__img'
          />
          <span class='material-symbols-outlined home__like'>favorite</span>
          <h5 className='home__name'>Modern Familiy Apartment</h5>
          <div className='home__location'>
            <span class='material-symbols-outlined'>location_on</span>
            <p>Italy</p>
          </div>
          <div className='home__rooms'>
            <span class='material-symbols-outlined'>nest_multi_room</span>
            <p>3 rooms</p>
          </div>
          <div className='home__area'>
            <span class='material-symbols-outlined'>crop</span>
            <p>
              180 m <sup>2</sup>
            </p>
          </div>
          <div className='home__price'>
            <span class='material-symbols-outlined'>sell</span>
            <p>$600,000</p>
          </div>
          <button className='btn home__btn'> Contact realtor</button>
        </div>
      </section>
      <section className='gallery'>
        <figure class='gallery__item gallery__item--1'>
          <img
            src={require('../img/gal-1.jpeg')}
            alt='GalleryImage1'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--2'>
          <img
            src={require('../img/gal-2.jpeg')}
            alt='GalleryImage2'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--3'>
          <img
            src={require('../img/gal-3.jpeg')}
            alt='GalleryImage3'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--4'>
          <img
            src={require('../img/gal-4.jpeg')}
            alt='GalleryImage4'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--5'>
          <img
            src={require('../img/gal-5.jpeg')}
            alt='GalleryImage5'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--6'>
          <img
            src={require('../img/gal-6.jpeg')}
            alt='GalleryImage6'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--7'>
          <img
            src={require('../img/gal-7.jpeg')}
            alt='GalleryImage7'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--8'>
          <img
            src={require('../img/gal-8.jpeg')}
            alt='GalleryImage8'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--9'>
          <img
            src={require('../img/gal-9.jpeg')}
            alt='GalleryImage9'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--10'>
          <img
            src={require('../img/gal-10.jpeg')}
            alt='GalleryImage10'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--11'>
          <img
            src={require('../img/gal-11.jpeg')}
            alt='GalleryImage11'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--12'>
          <img
            src={require('../img/gal-12.jpeg')}
            alt='GalleryImage12'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--13'>
          <img
            src={require('../img/gal-13.jpeg')}
            alt='GalleryImage13'
            className='gallery__img'
          />
        </figure>
        <figure class='gallery__item gallery__item--14'>
          <img
            src={require('../img/gal-14.jpeg')}
            alt='GalleryImage1'
            className='gallery__img'
          />
        </figure>
      </section>
      <footer className='footer'>
        <ul className='nav'>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Find your dream home
            </a>
          </li>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Request proposal
            </a>
          </li>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Download home planner
            </a>
          </li>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Contact us
            </a>
          </li>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Submit your property
            </a>
          </li>
          <li class='nav__item'>
            <a href='/#' class='nav__link'>
              Come work with us!
            </a>
          </li>
        </ul>
        <p class='copyright'>&copy; Copyright 2022 by Roy Chan.</p>
      </footer>
    </div>
  );
};

export default Index;
