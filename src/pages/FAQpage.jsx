
import React, { useState } from "react";
import Header from '../component/Header'
import {FaChevronDown} from "react-icons/fa"
import {FaChevronUp} from "react-icons/fa"

const FAQpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      title: "What payment methods do you accept?",
      content:
        "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
    },
    {
      title: "What is your return policy?",
      content:
        "We have a 30-day return policy for all items. If you are not satisfied with your purchase, please contact us and we will be happy to assist you.",
    },
    {
      title: "How long does shipping take?",
      content:
        "Shipping times vary depending on your location and the shipping method you choose. Standard shipping usually takes 3-5 business days within the US, and 7-14 business days for international orders.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Yes, we ship to most countries worldwide. Shipping rates and delivery times may vary depending on your location.",
    },
    {
      title: "What is your customer service phone number?",
      content: "Our customer service phone number is 1-800-555-1234.",
    },
    {
      title: "How can I track my order?",
      content:
        "Once your order has shipped, we will send you a tracking number by email. You can use this tracking number to track your package online.",
    },
    {
      title: "Do you offer gift wrapping?",
      content:
        "Yes, we offer gift wrapping for an additional fee. During checkout, you will have the option to select gift wrapping and add a personalized message.",
    },
    {
      title: "What is your privacy policy?",
      content:
        "We take your privacy seriously and will never share your personal information with third parties. For more information, please read our privacy policy.",
    },
    {
      title: "How do I cancel my order?",
      content:
        "If you need to cancel your order, please contact us as soon as possible. If your order has not yet shipped, we will be able to cancel it and issue a refund.",
    },
    {
      title: "What is your email address?",
      content: "You can email us at support@example.com.",
    },
    {
      title: "Do you have a physical store?",
      content:
        "No, we are an online-only store. This allows us to offer competitive prices and a wider selection of products.",
    },
    {
      title: "Can I change my shipping address?",
      content:
        "If your order has not yet shipped, we may be able to change the shipping address. Please contact us as soon as possible to request a change.",
    },
    {
      title: "What is your warranty policy?",
      content:
        "We offer a one-year warranty on all products. If you experience any issues with your product, please contact us and we will be happy to assist you.",
    },
  ];

  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
    <div className=' PageContainer pt-[32px] pb-[32px]  '>
     <div className=" shadow py-[88px] mx-[43px] max-w-7xl sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-2xl font-semibold text-center text-gray-900 sm:text-4xl ">FAQ</h2>
        <div className="mt-6">
          {questions.map((question, index) => (
            <div key={index} className="">
              <button
                className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggleActive(index)}
              >
                <span className="text-lg text-gray-900">
                  {question.title}
                </span>
                <span className="flex-shrink-0 ml-6">
                  {activeIndex === index ? (
                   <FaChevronUp/>
                  ) : (
                     <FaChevronDown/>
                  )}
                </span>
              </button>
              <div
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } mt-2 pb-4 prose text-[#727272] prose-sm sm:prose`}
              >
                {question.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    </div>
   
  );
};

export default FAQpage;

