import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { fetchAsync } from "./productSlice";

import "./Product.css";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching the products list from the reducer product
  const products = useSelector((state) => state.product.products);
  console.log("products fetched ...   :", products);

  //fetching the value of search from search slice in navbar to perform search function
  const search = useSelector((state) => state.search.searchData);

  //gettting the status for skeleton loading
  const isLoading = useSelector((state) => state.product.status);

  //fetching the filter data from search slice
  // const filter = useSelector((state)=>state.search.filterData)

  //empty array to map the skeleton loader
  const emptyArray = ["", "", "", "", "", "", "", "", "", ""];

  //...............................infinite scrolling functions here ...........................

  //for infinite scrolling --
  const [page, setPage] = useState(1);

  //everytime page dependent changes this useeffect will run and add new item to the product list in redux .....
  useEffect(() => {
    console.log("page increase and render .... ")
    dispatch(fetchAsync());
  }, [page]);

  //fucntion to handle the infinite search

  const handleInfiniteHandler = async () => {
    try {
      console.log("innerhieght : ", window.innerHeight);
      if (
        window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        console.log("page increased ... ");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("1st useeffect .... ")
    window.addEventListener("scroll", handleInfiniteHandler);
    return ()=>window.removeEventListener("scroll", handleInfiniteHandler);
  }, []);

  //onclick img navigate .....
  const imgClickHandler = (id) => {
    //setting the value of the id in product slice to be the id of the image clicked
    navigate(`/productProfile/${id}`);
  };

  return (
    <SkeletonTheme baseColor="grey" highlightColor="#444" duration={1}>
      <div className="product">
        <div className="product-container">
          {isLoading == "loading" ? (
            <>
              {emptyArray.map((item, index) => {
                return (
                  <div className="product-item">
                    <Skeleton height="7rem" />

                    <p className="name uppercase">
                      <Skeleton width="70%" />
                    </p>
                    <h3 className="title ">
                      <Skeleton width="70%" />
                    </h3>
                    <h3 className="price">
                      <Skeleton width="40%" />
                    </h3>
                    <p className="rating">
                      <Skeleton width="30%" />
                    </p>
                  </div>
                );
              })}
            </>
          ) : (
            <>
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
                        {
                          <img
                            src={product.category.image}
                            alt={product.image}
                          />
                        }
                      </button>
                      <p className="name uppercase">{product.category.name}</p>
                      <h3 className="title ">{product.title}</h3>
                      <h3 className="price">Rs. {product.price}</h3>
                      <p className="rating">Rating ****</p>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
}
