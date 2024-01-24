import s from './CartProducts.module.scss';

export const CartProducts = () => (
  <ul className={s.products}>
    <li className={s.product} key={1}>
      <img
        className={s.img}
        src='https://koff-api.vercel.app/img//1hb45pkld4nruu3t.jpg'
        alt='Диван-кровать Бристоль'
      />
      <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
      <p className={s.price}>{'133741'.toLocaleString()}&nbsp;₽</p>
      <p className={s.article}>арт. 16955135335</p>

      <div className={s.productControl}>
        <button className={s.productBtn}>-</button>
        <p className={s.productCount}>3</p>
        <button className={s.productBtn}>+</button>
      </div>
    </li>
    <li className={s.product}>
      <img
        className={s.img}
        src='https://koff-api.vercel.app/img//1hb45pkld4nruu3t.jpg'
        alt='Диван-кровать Бристоль'
      />
      <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
      <p className={s.price}>{'133742'.toLocaleString()}&nbsp;₽</p>
      <p className={s.article}>арт. 16955135335</p>

      <div className={s.productControl}>
        <button className={s.productBtn}>-</button>
        <p className={s.productCount}>3</p>
        <button className={s.productBtn}>+</button>
      </div>
    </li>
    <li className={s.product}>
      <img
        className={s.img}
        src='https://koff-api.vercel.app/img//1hb45pkld4nruu3t.jpg'
        alt='Диван-кровать Бристоль'
      />
      <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
      <p className={s.price}>{'133743'.toLocaleString()}&nbsp;₽</p>
      <p className={s.article}>арт. 16955135335</p>

      <div className={s.productControl}>
        <button className={s.productBtn}>-</button>
        <p className={s.productCount}>3</p>
        <button className={s.productBtn}>+</button>
      </div>
    </li>
  </ul>
);
