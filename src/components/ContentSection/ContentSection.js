// src/components/ContentSection/ContentSection.js
import React from 'react';
import styles from './ContentSection.module.css';
import denimJacket from '../assets/denimjacket.jpg';
import summerDress from '../assets/summerdress.jpg';
import shoes from '../assets/shoes.jpg';
import leatherBag from '../assets/leatherBag.jpg'; 
import sunglasses from '../assets/sunglasses.jpg'; 
import cargopants from '../assets/cargopants.jpg';
import ethinicwear from '../assets/ethinicwear.jpg';
import watch from '../assets/watch.jpg';
import perfumes from '../assets/perfumes.jpg';
import womenethinic from '../assets/womenethinic.jpg';
import kidsshirts from '../assets/kidsshirt.jpg';
import kidslower from '../assets/kidslower.jpg';
import kidspants from '../assets/kidspants.jpg';
import dropshoulder from '../assets/dropshoulder.jpg';
import {useNavigate} from 'react-router-dom';



const products = [
  { id: 1, name: 'Classic Denim Jacket', price: '$49.99', image: denimJacket },
  { id: 2, name: 'Summer Floral Dress', price: '$39.99', image: summerDress },
  { id: 3, name: 'Casual Sneakers', price: '$59.99', image: shoes },
  { id: 4, name: 'Cargo Pants', price: '$79.99', image: cargopants },
  { id: 5, name: 'Ethinic wear', price: '$179.99', image: ethinicwear },
  { id: 6, name: 'Dropshoulder', price: '$19.99', image: dropshoulder },
];

const newArrivals = [
  { id: 7, name: 'Leather Handbag', price: '$79.99', image: leatherBag },
  { id: 8, name: 'Stylish Sunglasses', price: '$19.99', image: sunglasses },
  { id: 9, name: 'Mens Watches', price: '$119.99', image: watch },
  { id: 10, name: 'Perfumes for Mens', price: '$123.23', image: perfumes },
];

const trendingforwomens = [
  { id: 11, name: "Ethinic wear", price: "$49.54", image: womenethinic },
];

const kidssection = [
  { id: 12, name: "Lower", price: "$4.54", image: kidslower },
  { id: 13, name: "Pants", price: "$24.54", image: kidspants },
  { id: 14, name: "Shirts", price: "$41.54", image: kidsshirts },
];

function ContentSection() {
  const navigate = useNavigate();

  const goToProductPage = () => {
    navigate('/productpage');
  }

  return (
    <>
      <section className={styles.contentSection}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.productList}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button onClick={goToProductPage} className={styles.buyNowButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.title}>New Arrivals</h2>
        <div className={styles.productList}>
          {newArrivals.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button onClick={goToProductPage} className={styles.buyNowButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.title}>Trending for Womens</h2>
        <div className={styles.productList}>
          {trendingforwomens.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button  onClick={goToProductPage} className={styles.buyNowButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <h2 className={styles.title}>Kids Section</h2>
        <div className={styles.productList}>
          {kidssection.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button  onClick={goToProductPage} className={styles.buyNowButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


export default ContentSection;


