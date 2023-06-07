import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Grand Theft Auto' ]);

    const onAddCategory = ( newCategory ) => {
      if( categories.includes( newCategory )) return;
      setCategories([ newCategory, ...categories]);
    }

  return (
    <>
    <div className='text-center navbarBack'>
      <h1> GifExpertApp </h1>
    <AddCategory 
      onNewCategory={ (value) => onAddCategory(value) } 
    />
    </div>
        {
        categories.map( (category) => (
          <GifGrid 
          key={ category } 
          category={ category } />
          ))
        }
    

    </>
  );
}
