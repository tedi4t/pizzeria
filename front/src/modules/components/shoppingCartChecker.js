import { useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { shoppingCartContext } from '../contexts/shoppingCart';

export default ({ children }) => {
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [cookies] = useCookies(['order']);

  useEffect(() => {
    const shoppingCart = cookies['shoppingCart'] || [];
    dispatch({ type: 'addGood', payload: shoppingCart });
  }, []);

  return children;
};
