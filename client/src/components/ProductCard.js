import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
// import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;

  let location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const addToWishlistFunc = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data?.map((item) => (
        <div
          key={item._id}
          className={` ${
            location.pathname == "/product" ? `gr-${grid}` : "col-3"
          } `}
        >
          <div
            // to={`${
            //   location.pathname == "/"
            //     ? "/product/:id"
            //     : location.pathname == "/product/:id"
            //     ? "/product/:id"
            //     : ":id"
            // }`}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
              <button
                className="border-0 bg-transparent"
                onClick={() => addToWishlistFunc(item._id)}
              >
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image">
              <img
                src={item?.images[0].url}
                className="img-fluid mx-auto"
                width={160}
                alt="product image"
              />

              <img
                src={watch2}
                className="img-fluid mx-auto "
                width={160}
                alt="product image"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">{item?.title}</h5>
              <ReactStars
                count={5}
                size={24}
                value={Number(item?.totalrating)}
                edit={false}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
              <p className="price">$ {item?.price}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img  src={prodcompare} alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img onClick={() => navigate(`/product/${item._id}`)} src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
