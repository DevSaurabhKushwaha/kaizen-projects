import React, { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Why was Kai-Zen® Developed?", answer: "Research tells us that 74% of how much you receive in retirement is based on how much cash (capital) you have set aside, and only 26% is a result of investment return. Put another way, the retirement concern is not about how your investments are doing, it is not having enough money to invest. This underfunding for retirement income is the issue Kai-Zen® is helping to resolve and Kai-Zen® is currently the only plan on the market where you can obtain leverage to this degree, without having to qualify for the loan and make interest payments." },
        { question: "What are the Qualification Requirements?", answer: "NULL" },
        { question: "It Sounds Too Good to be True. What's the Catch?", answer: "NULL." },
        { question: "How Kai-Zen® works ?", answer: "NULL." },

    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="max-w-6xl mx-auto p-4 my-12 ">
                <h2 className="text-2xl font-bold mb-16  font-outfit text-center">Frequently Asked Questions</h2>

                <dl className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg">
                            <dt>
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)} >
                                    <span className="font-medium font-outfit">{faq.question}</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                            </dt>

                            {openIndex === index && (
                                <dd className="p-4 bg-gray-50 text-gray-700 font-cabin">{faq.answer}</dd>
                            )}
                        </div>

                    ))}
                </dl>
                <div className="text-center mt-6">

                <h2 className="font-bold text-2xl font-poppins ">Still have Any Questions ?</h2>

                <button className="bg-blue-700 p-3 px-6  font-inter rounded-[50px] text-white  my-6">Contact Us</button>

                </div>
            </div>
        </>
    );
};

export default FAQ;
