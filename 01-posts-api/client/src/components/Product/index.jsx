import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import parse from 'html-react-parser';
const Product = ({ title, image, description, price }) => {
  return (
    <div className={`row mx-auto col-md-12 gap-3 ${styles.product} mb-3`}>    
      <img className={`col-md-2 d-flex ${styles.product__image}`} src={image}></img>

      <div className={`col`}>
        <h2 className={styles.product__title}>{title}</h2>
        <div className={styles.product__description}>{parse(description)}</div>
        {price && <h4 className={styles.product__price}>${price}</h4>}
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string
};

Product.defaultProps = {
  price: undefined
}

export default Product;
