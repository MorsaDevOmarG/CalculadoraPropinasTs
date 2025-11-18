import type{ MenuItem } from '../types/index';

// Declaramos el TYPE aquí porque solo se usará en este componente
type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItems({item} : MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between cursor-pointer hover:bg-teal-200'
    >
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
};
