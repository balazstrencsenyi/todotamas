import { useContext } from "react";
import { GalleryContext } from "./gallery-context";



function SearchField(){
  const {searchProduct} = useContext(GalleryContext)

  return(
    <form id="searchForm">
    <input id="searchField" type="text" placeholder="Search for painting" onChange={(e)=>{e.preventDefault(); searchProduct(e.target.value)}} />
    <div><img id="searchIcon" src="src/images/icons/search.svg" alt="" /></div></form>

  )

}

export default SearchField