import { useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import "./TrustComapnies.css";

const data =
  [{
    "name": "Kirstin Quartley",
    "comment": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    "img": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Selby Binner",
    "comment": "Morbi a ipsum. Integer a nibh.",
    "img": "https://images.unsplash.com/photo-1609048647061-76d541aba9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Barron Fardy",
    "comment": "Proin eu mi. Nulla ac enim.",
    "img": "https://images.unsplash.com/photo-1614203586524-fee58ef9ef90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Roley Fortnon",
    "comment": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "img": "https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Amil Parken",
    "comment": "Proin risus. Praesent lectus.",
    "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Jilleen Sandell",
    "comment": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "img": "https://images.unsplash.com/photo-1618155530308-c37a780555e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "name": "Caroljean Harborow",
    "comment": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "img": "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  }, {
    "name": "Rickert Deex",
    "comment": "Aenean sit amet justo. Morbi ut odio.",
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }, {
    "name": "Celka Chicken",
    "comment": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "img": "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  }, {
    "name": "Leeland Rivlin",
    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "img": "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }]

const TrustCompanies = () => {

  const carouselRef = useRef(null)
  const { scrollX } = useScroll({
    container: carouselRef
  })

  return (
    <div className='trust_company_div' ref={carouselRef}>
      <h1 className='title_2'>People's who take services</h1>
      <div className='trust_companies'>
        {
          data.map(dat =>
            <div className='trust_core'>
              <div className='img_div_trust'>
                <img src={dat.img} alt="" />
              </div>
              <div>
                <h1 className='title_3'>{dat.name}</h1>
                <p className='para_2'>{dat.comment.slice(0, 10)}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TrustCompanies;