import { useEffect } from 'react';
import { Goods } from '../../components/Goods/Goods.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories/categories.slice.js';
import { Catalog } from '../../components/Catalog/Catalog.jsx';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
};
