import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import {useDispatch, useSelector} from 'react-redux'
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProductWishlist())
  }, [])
  const wishlistState = useSelector(state => state.auth.wishlist)

  const removeWishlist = (id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
      dispatch(getUserProductWishlist())
    },1000)
  }

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.length > 0 ? wishlistState?.map((wishlist) => (
          <div className="col-3" key={wishlist._id}>
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                onClick={() => removeWishlist(wishlist._id)}
              />
              <div className="wishlist-card-image bg-white">
                <img
                  src={wishlist.images[0].url}
                  className="img-fluid d-block mx-auto"
                  width={160}
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  {wishlist?.title}
                </h5>
                <h6 className="price">$ {wishlist?.price}</h6>
              </div>
            </div>
          </div>
          )) : (
            <div className="text-center fs-3">
              No Product
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
