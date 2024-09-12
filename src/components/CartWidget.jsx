import '../stylesheets/CartWidget.css';

const CartWidget = () => {
  const cartItemCount = 0;

  return (
    <div className='cart-widget'>
      <ion-icon name="cart-outline"></ion-icon>
      <span className='cart-notification'>{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
