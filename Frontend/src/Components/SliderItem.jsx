import React from 'react';
import styles from './SliderItem.module.css';
import { useNavigate } from "react-router-dom";

const SliderItem = ({id, image, brand, title, price}) => {
  const navigate = useNavigate();
  return (
    <div
      className="itemContainer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className={styles.itemImg}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>₹ {price}</p>
      </div>
    </div>
  );
}

export default SliderItem;