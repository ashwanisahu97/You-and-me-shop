import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Home.module.css";
import SliderItem from "./SliderItem";
import Data from "../slider.json";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F16E49",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F16E49",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Home = () => {
 

  const caraouselOne = () =>
    Data.sliderData.map((item) => (
      <SliderItem
        {...item}
        key={item.id}
        
      />
    ));
  const caraouselTwo = () =>
    Data.blackLedData.map((item) => <SliderItem {...item} key={item.id} />);
  const caraouselThree = () =>
    Data.bestSellerData.map((item) => <SliderItem {...item} key={item.id} />);

  return (
    <>
      <div className={styles.smalltronThree}>
        <div className={styles.smalltronInfo}>
          <p className={styles.smalltronInfo_heading}>Perfect Match</p>
          <p>
            Bright, cheery&oh-so easy... set your sights on our breezy
            two-pieces.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className={styles.caraousel}>
        <div className={styles.caraouselInfo}>
          <p>SEE THE LATEST</p>
          <p>What's New</p>
        </div>
        <Slider
          dots={false}
          slidesToShow={5}
          slidesToScroll={5}
          autoplay={true}
          autoplaySpeed={3000}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: 480,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 5, slidesToScroll: 5 },
            },
          ]}
        >
          {caraouselOne()}
        </Slider>
      </div>

      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>
          <p>GET SOME INSPIRATION</p>
          <p>What Are You Looking For?</p>
        </div>
        <div className={styles.galleryItems}>
          <div className={styles.galleryItem}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_vacation._QL90_UX746_.jpg"
              alt=""
            />
            <a href="/">Vacation Wardrobe</a>
          </div>
          <div className={styles.galleryItem}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_dressshop._QL90_UX746_.jpg"
              alt=""
            />
            <a href="/">The Dress Shop</a>
          </div>
          <div className={styles.galleryItem}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_bestdressed._QL90_UX746_.jpg"
              alt=""
            />
            <a href="/">Best-Dressed Guest</a>
          </div>
          <div className={styles.galleryItem}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_daytime._QL90_UX746_.jpg"
              alt=""
            />
            <a href="/">Daytime Drama</a>
          </div>
          <div className={styles.galleryItem}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220502_hp_card_visnav_9to5._QL90_UX746_.jpg"
              alt=""
            />
            <a href="/">New 9-To-5</a>
          </div>
        </div>
      </div>

      <div className={styles.jumbotron}>
        <div className={styles.jumbotronInfo}>
          <p className={styles.jumbotronInfo_heading}>Top Sellers</p>
          <p>
            Breezy silhouettes, dreamy pastel hues, woven accents: presenting
            our most sought-after styles.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220501_hp_card_2up_eventdressing._QL90_UX800_.jpg"
              alt=""
            />

            <div className={styles.cardOverlay}>
              <p>PARTY PERFECT</p>
              <hr />
              <p>Your best-dressed event season yet.</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img
              src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220501_hp_card_2up_mothersday._QL90_UX800_.jpg"
              alt=""
            />
            <div className={styles.cardOverlay}>
              <p>MOTHER'S DAY EDIT</p>
              <hr />
              <p>Must-have gifts for every mom in your life.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.smalltronOne}>
        <div className={styles.smalltronInfo}>
          <p className={styles.smalltronInfo_heading}>Catch A Wave</p>
          <p>
            From unique one-pieces to high-style rashguards: it's our latest
            swim (dive on in!)
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className={styles.bannerOne}>
        <div className={styles.bannerImg}>
          <img
            src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_05/sb_20220501_desktop_miniM1_backinstock._QL90_.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.smalltronTwo}>
        <div className={styles.smalltronInfo}>
          <p className={styles.smalltronInfo_heading}>Editors' Picks</p>
          <p>
            Ring in warmer days with skin-baring silhouettes, sparks of neon &
            more pieces that pop.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <div style={{ background: "#FFF7F3", padding: "1.5vh 0" }}>
        <div className={styles.caraousel}>
          <div className={styles.caraouselInfo}>
            <p>SPOTLIGHT ON</p>
            <p>Black-Led Brands</p>
          </div>
          <Slider
            dots={false}
            slidesToShow={5}
            slidesToScroll={5}
            autoplay={true}
            autoplaySpeed={3000}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              {
                breakpoint: 480,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
              },
              {
                breakpoint: 1024,
                settings: { slidesToShow: 5, slidesToScroll: 5 },
              },
            ]}
          >
            {caraouselTwo()}
          </Slider>
        </div>
      </div>

      <div className={styles.caraousel} style={{ padding: "1.5vh 0" }}>
        <div className={styles.caraouselInfo}>
          <p>DONT MISS OUR</p>
          <p>Recent Best Sellers</p>
        </div>
        <Slider
          dots={false}
          slidesToShow={5}
          slidesToScroll={5}
          autoplay={true}
          autoplaySpeed={3000}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: 480,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 5, slidesToScroll: 5 },
            },
          ]}
        >
          {caraouselThree()}
        </Slider>
      </div>

      <div className={styles.bannerTwo}>
        <div className={styles.bannerImg}>
          <img
            src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_desktop_M1_evergreen._FMwebp_UX2400_.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.payPartners}>
        <img
          src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_hp_card_visnav_evergreen_01noprime._QL90_UX452_.jpg"
          alt="Amazon Prime Offer"
        />
        <img
          src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_hp_card_visnav_evergreen_02app._CB1647958748_._QL90_UX452_.jpg"
          alt="First Order Offer"
        />
        <img
          src="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_03/sb_20220309_hp_card_visnav_evergreen_03nonloyalty._QL90_UX452_.jpg"
          alt="Members Reward"
        />
      </div>
    </>
  );
};

export default Home;