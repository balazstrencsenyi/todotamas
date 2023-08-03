import { createContext, useState } from "react";
import { PAINTINGS } from "../paintings";

export const GalleryContext = createContext(null);

/*const getDefaultPaintingList = ()=>{
  let gallery = [];
PAINTINGS.map((painting)=>{
  gallery.push(painting);
})
return gallery;
}*/

export const GalleryContextProvider = (props) => {
  const [products, setProducts] = useState(PAINTINGS);

  const searchProduct = (value) => {
    let searchedProds = [];
    PAINTINGS.map((painting) => {
      if (
        painting.name.toLowerCase().includes(value.toLowerCase()) ||
        painting.descr.toLocaleLowerCase().includes(value.toLowerCase())
      ) {
        searchedProds.push(painting);
      }
    });
    setProducts(searchedProds);
  };

  const contextValue = { products, searchProduct };

  return (
    <GalleryContext.Provider value={contextValue}>
      {props.children}
    </GalleryContext.Provider>
  );
};
