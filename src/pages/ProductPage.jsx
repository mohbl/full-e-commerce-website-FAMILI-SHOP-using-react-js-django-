import React, { use, useContext } from "react";
import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import image from "../component/assets/Rectangle 71.png";
import { BsChatSquareText } from "react-icons/bs";
import axios from "axios";
import { Await, useParams } from "react-router-dom/dist";
import AuthContext from "../context/AuthContext";
import Signup from "../pages/Signup";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const ProductPage = () => {
  const [productData, setProductData] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [color, setColor] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [postComment, setPostComment] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const colors = ["red", "green", "blue", "yellow", "beige"]; // get clors from the db it's just test
  const availableSizes = ["s", "m", "l", "xl", "xxl"];
  const { user, authTokens } = useContext(AuthContext);

  // handle changing comment

  const handleInputChange = (e) => {
    setPostComment(e.target.value);
  };

  // add to cart

  const handleAddToCart = async () => {
    try {
      if (user) {
        // User is authenticated, make a POST request to the Django API
        productData.inCart = !productData.inCart;
        setProductData({ ...productData });
        if (productData.inCart) {
          const response = await axios.post(
            "https://familishop.onrender.com/panier_add/",
            {
              product_id: productData.id, // Adjust the payload based on your API requirements
              userId: user.id, // Adjust the payload based on your API requirements
              quantity: quantity,
            },
            {
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          toast.success("Produit ajouté aux panier !", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          const response = await axios.delete(
            "https://familishop.onrender.com/panier_remove/" + productData.id,
            {
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          toast.error("Produit supprimé de panier!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        // User is not authenticated, store the favorite in session storage
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex(
          (pan) => pan.id === productData.id
        );

        if (existingIndex !== -1) {
          // Product already exists in favorites, remove it
          cart.splice(existingIndex, 1);
          // setIsFavorited(false);
          // productData.inCart = false;
          setProductData((prev) => {
            return {
              ...prev,
              inCart: false,
            };
          });
          toast.error("Produit supprimé de panier!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // Product does not exist in favorites, add it
          cart.push(productData);
          setProductData((prev) => {
            return {
              ...prev,
              inCart: true,
            };
          });
          toast.success("Produit ajouté aux panier !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
      productData.inCart = true;
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // persontage remaining products bar

  const quantityDispo = 1;
  useEffect(() => {
    if (quantityDispo <= 3) {
      setColor("bg-[#E50014]");
      setPercentage(30);
    } else if (quantityDispo <= 9) {
      setColor("bg-blue-500");
      setPercentage(80);
    } else {
      setColor("bg-green-500");
      setPercentage(100);
    }
  }, [quantityDispo]); // productdata

  // handle the add/delete to/from favorite list function

  const handleAddToFavorites = async () => {
    try {
      if (user) {
        // User is authenticated, make a POST request to the Django API
        const headers = {
          Authorization: `Bearer ${authTokens}`,
          "Content-Type": "application/json",
        };

        const requestData = {
          product: productData.id,
          user: user.id,
        };

        let response = null;
        console.log(productData);
        if (!productData.isFavorited) {
          console.log("not in favorites");
          response = await axios.post(
            "https://familishop.onrender.com/favorites/",
            requestData,
            { headers }
          );
          console.log(response);
        } else {
          console.log("in favorites");
          response = await axios.delete(
            "https://familishop.onrender.com/favorites_remove/" +
              productData.id,
            { headers }
          );
          console.log(response);
        }

        // const newProducts = [...productData];
        // newProducts.isFavorited = !newProducts.isFavorited;
        setProductData((prev) => ({
          ...prev,
          isFavorited: !prev.isFavorited,
        }));
      } else {
        // User is not authenticated, store the favorite in session storage
        const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
        const existingIndex = favorites.findIndex(
          (fav) => fav.id === productData.id
        );

        if (existingIndex !== -1) {
          // Product already exists in favorites, remove it
          favorites.splice(existingIndex, 1);
          setIsFavorited(false);
          alert("Product removed from favorites!");
        } else {
          // Product does not exist in favorites, add it
          favorites.push(productData);
          setIsFavorited(true);
          alert("Product added to favorites!");
        }

        sessionStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // fetch the product api
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "https://familishop.onrender.com/products/" + id
        );
        const data = response.data;



        if(user) {

          const cart = await axios
          .get("https://familishop.onrender.com/panier/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authTokens"),
            },
          })
          .then((res) => res.data);
          
          
          
          
        const fav = await axios
        .get("https://familishop.onrender.com/favorites/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authTokens"),
            },
          })
          .then((res) => res.data);

        // console.log(data)
        data.inCart = cart.findIndex((v) => v.product === data.id) !== -1;
        data.isFavorited = fav.findIndex((v) => v.product === data.id) !== -1;
        setProductData(data);
      } else {
        setProductData(data)
        
      }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProductData();
    console.log(id);
  }, []);

  // handle comment submit

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user) {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("authTokens")}`,
          "Content-Type": "application/json",
        };

        const formData = new FormData();
        formData.append("product", productData.id);
        formData.append("text", postComment);

        const response = await axios.post(
          "https://familishop.onrender.com/comments/create/",
          formData,
          { headers }
        );

        console.log(response);

        // Display alert based on the response status
        toast.success("Commentaire envoyé avec succès !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // User is not authenticated, show login page
        gotologin();
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const [login, setlogin] = useState(false);
  const gotologin = () => {
    setlogin(true);
  };
  const closelogin = () => {
    setlogin(false);
  };

  //handle the quantity change
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= productData.quantity) {
      setQuantity(newQuantity);
    }
  };

  //handle the increment and the decrement function
  const handleIncrement = () => {
    if (quantity < productData.quantity) {
      handleQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="PageContainer pt-[28px] flex justify-between pb-[32px] ">
        <div className="first section">
          <div className="h-[427px]  w-[849px]  bg-white border">
            <div className="">
              {/* product section */}
              {productData ? (
                <div className="flex mx-[43px] relative">
                  <div className="w-[297px] h-[347px] my-[40px] relative ">
                    <div className="absolute top-2 left-56"></div>
                    <div className=" mr-[33px] flex justify-center pt-2 ">
                      <img src={productData.alt_image} alt="/" />
                    </div>
                  </div>

                  <div className="mt-[52px] ml-[7px]">
                    <div className=" text-[18px] font-medium">
                      <h1>{productData?.title} –</h1>
                    </div>
                    <div className="text-sm text-left h-[58px] mt-2">
                      <p>{productData?.description}</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-[10px]">
                      <h2 className="text-[#E50014] line-through text-[12px]">
                        {productData.discount_percentage !== '0' &&(
                          (productData.price * 100) /
                          productData.discount_percentage
                        ).toFixed(2)}
                        DA
                      </h2>
                      <h2 className="text-lg font-bold">
                        {productData?.price} DA
                      </h2>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium mt-2">
                        {productData?.quantity} articles restants
                      </p>
                    </div>
                    <div className="w-full h-4 bg-gray-100 rounded-full mt-[20px]">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    {productData.colors && (
  <div className="flex items-center">
    {productData.colors.split(',').map((color, i) => (
      <div
        key={color}
        className="w-6 h-6 mt-5 mr-4 border-4 border-gray-100 rounded-full shadow-sm hover:border-none"
        style={{ backgroundColor: color.trim() }}
      />
    ))}
  </div>
)}


                    {productData.taille && (
                      <div className="flex justify-between mt-2">
                        <div className="">
                          <h1 className="text-sm font-medium">
                            OPTIONS DISPONIBLES
                          </h1>
                          <div className="flex items-center mt-3 text-center">
                            {availableSizes.map((size) => (
                              <div
                                key={size}
                                className={`w-8 h-8 relative mr-4 shadow font-normal text-base transition-all duration-300 ease-in-out ${
                                  productData.taille.includes(size)
                                    ? "text-black hover:scale-110"
                                    : "text-[#D9D9D9]"
                                }`}
                              >
                                <div className="relative flex items-center justify-center">
                                  {!productData.taille.includes(size) && (
                                    <div className="absolute h-[1px] w-10 bg-[#D9D9D9] top-3 transform rotate-45" />
                                  )}
                                  <span className="">{size}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-center mt-2">
                      <button
                        className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <span className="px-[25px] font-bold text-xl ">
                        {quantity}
                      </span>
                      <button
                        className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded  hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-[55px] w-[180px] ">
                    <div className="flex justify-end">
                      {productData.isFavorited ? (
                        <FaHeart
                          className="text-red-500 cursor-pointer hover:text-[#E50014]"
                          onClick={handleAddToFavorites}
                          size={25}
                        />
                      ) : (
                        <FaRegHeart
                          className="text-gray-900 cursor-pointer hover:text-[#E50014]"
                          onClick={handleAddToFavorites}
                          size={25}
                        />
                      )}
                    </div>
                  </div>
                  <div></div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#800B8D] h-[46px]  flex justify-center items-center hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold text-[13px] absolute bottom-[60px] right-3 w-[165px] "
                  >
                    <span className="text-white">
                      {!productData.inCart ? (
                        <p>AJOUTER AU PANIER</p>
                      ) : (
                        <p>SUPPRIMER AU PANIER</p>
                      )}
                    </span>
                    <FiShoppingCart size={20} className="text-white" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full mt-[210px]">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
                    <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
                    <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*generte laisse une commentaire*/}

          <div className="bg-white border h-[393px] mt-[18px]">
            <div className="border-b border-gray-300  h-[75px]">
              <h2 className="py-[20px] px-[30px] text-2xl font-bold ">
                Laissez un commentaire
              </h2>
            </div>
            <div>
              <h1 className="py-[20px] px-[30px] text-xl font-semibold">
                Décrivez votre experience
              </h1>
              <form onSubmit={handleCommentSubmit}>
                <div className="relative ml-9">
                  <textarea
                    className="px-3 py-2 border border-gray-300 rounded-lg resize-none w-[750px] focus:outline-none focus:ring focus:border-[#800B8D] "
                    rows="4"
                    placeholder="Leave a comment..."
                    value={postComment}
                    onChange={handleInputChange}
                  ></textarea>
                  <div
                    className={`h-1 bg-[#800B8D] absolute bottom-0 left-0 right-0 transition-width duration-1000 ${
                      postComment ? "w-[750px]" : "w-0"
                    }`}
                  ></div>
                </div>
                <button
                  className={`mt-3 px-4 py-2 ml-[700px] bg-[#800B8D] text-white rounded-md hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] font-medium ${
                    postComment ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                  type="submit"
                >
                  envoyer
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* comments section*/}

        <div className="ml-[24px] shadow bg-white border">
          <div className="border-b border-gray-300 w-[328px] h-[61px]">
            <h2 className="py-[20px] px-[30px] text-xl font-semibold ">
              commentaires sur ce produit
            </h2>
          </div>

          {productData && productData.comments.length > 0 ? productData.comments.map((comment) => (
                <div className="border-b" key={comment.id}>
                  <div className="px-[35px] pt-[19px] ">
                    <div className="border-gray-300 borbder-b">
                      <div className="flex justify-between mb-[8px] ">
                        <div className="font-medium text-[14px] flex items-center ">
                          <h1>{comment.user}</h1>
                          <BsChatSquareText
                            size={15}
                            className="text-[#800B8D] ml-[105px] "
                          />
                        </div>
                      </div>

                      <div className="text-[12px] mb-[6px]">
                        <p>{comment.text}</p>
                      </div>

                      <div className=" text-[#8A8888] text-[10px] pb-[9px] ">
                        <h2>{comment.created_at}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : 
          <div className="flex items-center justify-center h-64 rounded-lg">
            <h1 className="text-lg font-semibold text-gray-500">No comments yet</h1>
          </div>}
        </div>
      </div>

      {login ? (
        <div className="fixed top-0 left-0 z-10 w-full h-full overflow-y-auto bg-gray-900/90 ">
          <div className=" relative  m-auto top-0 left-0  w-[60%] h-full z-10">
            <AiOutlineClose
              className="absolute cursor-pointer top-8 right-20 "
              onClick={closelogin}
            />
            <Signup />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductPage;
