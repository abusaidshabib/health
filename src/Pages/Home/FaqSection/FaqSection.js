import React, { useContext, useState } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import "./FaqSection.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqSection = () => {

  const [icons, setIcons] = useState(false);

  const { faq } = useContext(ApiDataContext);
  console.log(faq)

  return (
    <div className='faq_section'>
      <div className='faq_align'>
        <h1 className='title_2'>Frequently Ask Questions?</h1>
          {
            faq.slice(0, 3).map(fa => (
              <div className='faq_row_sec' key={fa._id}>
                <h2 className="border_radius_active" >{fa.question}
                </h2>
                <p className="display_show para_3">{fa.answer}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default FaqSection;