import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchAsync } from "./productSlice";

import "./Product.css";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching the products list from the reducer product
  const products = useSelector((state) => state.product.products);

  //fetching the value of search from search slice in navbar to perform search function
  const search = useSelector((state) => state.search.searchData);

  //fetching the filter data from search slice
  // const filter = useSelector((state)=>state.search.filterData)

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const imgClickHandler = (id) => {
    //setting the value of the id in product slice to be the id of the image clicked
    navigate(`/productProfile/${id}`);
  };

  return (
    <div className="product">
      <div className="product-container">
        {products
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.category.name.toLowerCase().includes(search);
          })
          .map((product, index) => {
            return (
              <div
                key={index}
                className="product-item"
                onClick={() => {
                  imgClickHandler(product.id);
                }}
              >
                <button>
                  <img src={product.category.image} alt={product.image} />
                </button>
                <p className="name uppercase">{product.category.name}</p>
                <h3 className="title ">{product.title}</h3>

                <h3 className="price">Rs. {product.price}</h3>
                <p className="rating">Rating ****</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
