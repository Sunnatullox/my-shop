import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getCartProducts,
  updateCartProduct,
} from "../features/user/userSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.auth?.cartProducts);
  const [productUpdateDetails, setProductUpdateDetails] = useState(null);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  useEffect(() => {
    hendelUpdateCartProduct();
  }, [productUpdateDetails]);

  const hendelDeleteCartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getCartProducts());
    }, 200);
  };

  const hendelUpdateCartProduct = () => {
    if (productUpdateDetails?.id && productUpdateDetails?.newQuantity) {
      dispatch(updateCartProduct(productUpdateDetails));
      setTimeout(() => {
        dispatch(getCartProducts());
      }, 200);
    }
  };

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {cartProducts?.map((product, i) => (
              <div
                key={i}
                className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
              >
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product image"
                    />
                  </div>
                  <div className="w-75">
                    <p>{product.productId.title}</p>
                    {/* <p>Size: hgf</p> */}
                    <span className="d-flex gap-2">
                      Color:
                      <ul className="colors ps-0">
                        <li
                          className=""
                          style={{ backgroundColor: product.productId.title }}
                        ></li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ {product.price}</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={product?.productId?.quantity}
                      defaultValue={
                        productUpdateDetails
                          ? productUpdateDetails
                          : product.quantity
                      }
                      onChange={(e) => {
                        if (e.target.value > product?.productId?.quantity)
                          toast.info(
                            "Sorry, we don't have that many products"
                          );
                        setProductUpdateDetails({
                          id: product?._id,
                          newQuantity:
                            e.target.value <= product?.productId?.quantity
                              ? e.target.value
                              : product?.productId?.quantity,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <AiFillDelete
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => hendelDeleteCartProduct(product?._id)}
                    />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    $ {product.price * product.quantity}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
