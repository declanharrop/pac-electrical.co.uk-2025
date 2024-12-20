import Styles from './Blocks.module.css';

export default function BrandsBlock() {
  return (
    <div className={Styles.BrandsBlock}>
      <div className={Styles.BrandsBlock_Container}>
        <h2>We install all your favourite brands</h2>
        <div className={Styles.BrandsBlock_Container_Brands}>
          <h3>Item</h3>
          <h3>Item</h3>
          <h3>Item</h3>
          <h3>Item</h3>
          <h3>Item</h3>
          <h3>Item</h3>
          <h3>Item</h3>
        </div>
      </div>
    </div>
  );
}
