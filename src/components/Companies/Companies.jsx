import React from 'react'
import "./companies.css"
const Companies = () => {
  return (
    <section className='spacing-y companies'>
        <div className='container companies__container'>
          <div>
            <span className='company-sub-heading'>Safe & Reliable Cargo Solutions!</span>
            <h3 className='company_heading'>Managing Logistics For World’s Multinational Companies.</h3>
          </div>
          <div>
            <p className='company_paragraph'>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies from end-to-end.</p>
          <div className='company__btn__container'>
            <button className='company-btn'>Pricing and Plans</button>
            <div className='company__contact'> 
              <img height={55} width={55}  src="https://demo.zytheme.com/equita/assets/images/testimonial/5.jpg" alt="profile" />
              <div className='company__contact__info'>
                <h3>(002) 01061245741</h3>
                <span>Sales Representative</span>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Companies