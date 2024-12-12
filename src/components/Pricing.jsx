import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUATERLY",
      PRICE: 8000,
      length: 3 
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      PRICE:  12000,
      length: 6
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      PRICE: 20000,
      length: 12
    },
  ]
  return(
    <section className="pricing">
      <h1>VDA FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.PRICE}</h3>
                  <p>For {element.length} months</p> 
                </div>
                <div className="description">
                  <p>
                    <Check/> Equipments
                  </p>
                  <p>
                    <Check/> All day Free Training
                  </p>
                  <p>
                    <Check/> Steam
                  </p>
                  <p>
                    <Check/> Cafe
                  </p>
                  <p>
                    <Check/> Professional Trainers
                  </p>
                  <p>
                    <Check/> 24/7 Support
                  </p>
                  <a href="/contact">Join Now</a>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}
export default Pricing;