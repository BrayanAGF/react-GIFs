import { GifItem } from "./GifItem";
import { Loading } from "./Loading";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    
    const { images , isLoading } = useFetchGifs( category );

    return (
    <>
    <h3 className="text-center mt-3">{category}</h3>
      {
        isLoading && (<Loading></Loading>)
      }


      <div className="card-grid">
        {
          images.map( ( image ) => (
           <GifItem 
              key={image.id}
              { ...image }
              />
          ))
        }
      </div>
    </>
  )
}
