import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchAsync } from "./productSlice";
import "./Product.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching the products list from the reducer product
  const products = useSelector((state) => state.product.products);

  //fetching category ---
  const isCategory = useSelector((state) => state.search.isCategory);

  //fetching the value of search from search slice in navbar to perform search function
  const search = useSelector((state) => state.search.searchData);

  //gettting the status for skeleton loading
  const isLoading = useSelector((state) => state.product.status);

  //empty array to map the skeleton loader
  const emptyArray = ["", "", "", "", "", "", "", "", "", ""];

  //for filtering the product
  function setSearchProduct(search) {
    if (isCategory) {
      return products.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.category.name.toLowerCase().includes(search);
      });
    } else {
      return products.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.title.toLowerCase().includes(search);
      });
    }
  }

  // Intersection observer

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    if (loading) {
      dispatch(fetchAsync(offset - 1));
    }
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("intersecting....");
          setOffset((prev) => prev + 1);
          setLoading(true);
        }
      },
      {
        threshold: .5,
      }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    console.log("observer ref : ", observerRef.current);
    return () => {
      if (observerRef.current) observer.disconnect(observerRef.current);
    };
  }, []);

  // onclick img navigate .....
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
                        {
                          <img
                            src={product.category.image}
                            alt={product.image}
                          />
                        }
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
                          {
                            <img
                              src={product.category.image}
                              alt={product.image}
                            />
                          }
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
          <span  ref={observerRef}>{"loading more products..... "}</span>
        </div>
      </div>
    </SkeletonTheme>
  );
}
