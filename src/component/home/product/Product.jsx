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

  //fetching the value of search from search slice in navbar to perform search function
  const search = useSelector((state) => state.search.searchData);
  console.log("search value in global context : ", search);

  //gettting the status for skeleton loading
  const isLoading = useSelector((state) => state.product.status);

  //empty array to map the skeleton loader
  const emptyArray = ["", "", "", "", "", "", "", "", "", ""];

  //
  function setSearchProduct(search) {
    return products.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search);
    });
  }

  //...............................infinite scrolling functions here ...........................

  //for infinite scrolling --
  const [page, setPage] = useState(0);

  //everytime page dependent changes this useeffect will run and add new item to the product list in redux  will fetch the product according to the offset defined by page.....
  useEffect(() => {
    dispatch(fetchAsync(page));
  }, [page]);

  //fucntion to handle the infinite search
  const handleInfiniteHandler = async () => {
    try {
      if (
        window.innerHeight + window.document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!search) {
      console.log("search value : ", search);
      window.addEventListener("scroll", handleInfiniteHandler);
      return () => window.removeEventListener("scroll", handleInfiniteHandler);
    }
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
              <>
                {setSearchProduct(search).map((product, index) => {
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

              {search ? (
                ""
              ) : (
                <>
                  {emptyArray.map((item, index) => {
                    return (
                      <div className="product-item" key={index}>
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
                  X
                </>
              )}
            </>
          ) : (
            <>
              {products ? (
                <>
                  {setSearchProduct(search).map((product, index) => {
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
                        <p className="name uppercase">
                          {product.category.name}
                        </p>
                        <h3 className="title ">{product.title}</h3>
                        <h3 className="price">Rs. {product.price}</h3>
                        <p className="rating">Rating ****</p>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>{navigate("/noProductFound")}</>
              )}
            </>
          )}
        </div>
      </div>
    </SkeletonTheme>
  );
}

//product.isloading != loading -> render the product fetched from the api ----we can get product from filter,search,product result
// product.isloading ==loading - > skeleton loading --- first show the available product fetched then after that render the skeleton loader
