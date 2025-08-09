"use client";

import { useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      faqHeading: " How long does it take to see results from the Masterclass?",
      faqText: "Results can vary, but most participants start seeing leads and sales within the first 7 days of implementing our strategies. The key is to follow the steps and apply the techniques consistently."
    },
    {
      faqHeading: "Do I need any prior experience with paid advertising?",
      faqText: "No prior experience is necessary! Our Masterclass is designed to guide beginners through the entire process, from setting up ads to optimizing for maximum ROI. We also provide support for more advanced marketers looking to refine their strategies."
    },
    {
      faqHeading: "What types of businesses can benefit from this Masterclass?",
      faqText: "The strategies taught in the Masterclass are applicable to a wide range of businesses, including e-commerce, digital products, services, and more. If you want to drive leads and sales through paid advertising, this program is for you."
    },
    {
      faqHeading: "What kind of support is available during the Masterclass?",
      faqText: "You'll have access to weekly coaching calls, a private community of fellow marketers, and direct support from our team. We're here to help you every step of the way to ensure your success."
    },
    {
      faqHeading: "How is this Masterclass different from other advertising courses?",
      faqText: "Unlike traditional courses, our Masterclass provides hands-on, practical training with real-world applications. You'll not only learn the theory but also put it into practice with proven ad templates, swipe files, and step-by-step guidance."
    },
    {
      faqHeading: "What if I don't see any results after following the Masterclass?",
      faqText: "We stand by our 100% Money Back Guarantee. If you implement the strategies and don't see results within 30 days, you can request a full refund. We're committed to your success and confident in the effectiveness of our program."
    },
    {
      faqHeading: "Can I promote my own products using the strategies taught in the Masterclass?",
      faqText: "Absolutely! While we teach you how to promote our offers, the principles and techniques can be applied to any product or service you wish to advertise. You'll gain the skills to drive traffic and generate sales for your own business."
    },
    {
      faqHeading: "Is the Masterclass suitable for both beginners and advanced marketers?",
      faqText: "Yes, the Masterclass is designed to cater to all levels of experience. Beginners will find the step-by-step guidance easy to follow, while advanced marketers can benefit from the advanced strategies and optimization tips provided."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="hl-faq cfaq-7J4UTWjSHn noBorder radius0 none">
      {faqs.map((faq, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`faq-separated-child hl-faq-child ${isActive ? 'active' : ''}`}
          >
            <div
              className={`hl-faq-child-heading ${isActive ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="hl-faq-child-head">
                <span className="hl-faq-child-heading-text">
                  <h4>{index + 1}: {faq.faqHeading}</h4>
                </span>
              </div>
              <i className="hl-faq-child-heading-icon right fa"></i>
            </div>

            <div className="hl-faq-child-panel" style={isActive ? {} : {padding: '0', height: '0', opacity: '0'}}>
              <span className="hl-faq-child-item-text item-text">
                <p>{faq.faqText}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
