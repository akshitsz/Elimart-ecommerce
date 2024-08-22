import React, { useState } from 'react';
import './Questions.css';

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Elitemart?",
      answer: "Elitemar is a platform that provides you the best quality clothes as well as trending collection at affordable price one of the largest selling website which gives you a loat of trust and value."
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, go to the login page and fill out your details and if you don't have a account so make register you and lets shop."
    },
    {
      question: "Is Elitemart free to use?",
      answer: "Yes, Elitemart offers a free plan with the option to upgrade your plan for excited deals and also prior notification of sales."
    },
    {
      questions: "is your company Indian?",
      answer: " yes 100% indian company with indian brands."
    },
  ];

  return (
    <div className="faq-container">
    <h1 className="faq-title">Frequently Asked Questions</h1> {/* Added className for custom styling */}
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item"> {/* Added className for custom styling */}
          <h2 
            className={`faq-question ${selectedQuestion === index ? 'active' : ''}`} 
            onClick={() => toggleQuestion(index)}
          >
            {faq.question}
          </h2>
          {selectedQuestion === index && (
            <p className="faq-answer">{faq.answer}</p>) 
          }
        </div>
      ))}
    </div>
  </div>
  );
};

export default Questions;
