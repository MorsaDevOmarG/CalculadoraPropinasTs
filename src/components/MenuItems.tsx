import type { Dispatch } from 'react';
import type{ MenuItem } from '../types/index';
import type { OrderActions } from '../reducers/order-reducer';

// Declaramos el TYPE aquí porque solo se usará en este componente
type MenuItemProps = {
  item: MenuItem,
  // addItem: (item: MenuItem) => void
  dispatch: Dispatch<OrderActions>
};

// export default function MenuItems({item, addItem} : MenuItemProps) {
export default function MenuItems({item, dispatch} : MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between cursor-pointer hover:bg-teal-200'
      // onClick={() => addItem(item)}
      onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
};
