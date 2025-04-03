import React from 'react'
import "./articles.css"
import ShowCaseSlider from './ShowCaseSlider'
import PartnetsSliders from './SliderPartners'
const Articles = () => {
  return (
    <div className='container articles_section'>

            
            <div className='articles_main'>
            <div class="articles_container">
                <p class="heading-subtitle">Explore Recent Works</p>
                <h2 class="heading-title">Featured Products</h2>
              </div>
              <div className='slider_aricles container'>
                    <PartnetsSliders/>
              </div>
              <div>
                <div className='show_case_container container'>
                  <div className='show_case_head'>
                  <span className='sub_head_showcase'>Join Us Today</span>
                  <h2 className='head_showcase'>our partners</h2>
                  </div>
                    <p className='para_showcase'>Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, Equita drives sustainable competitive advantages to some of Australia's largest companies.</p>
                </div>
                {/* show case slider */}
                <div className='container show_case_slider_spacing'>
                <ShowCaseSlider />
                </div>
              </div>
            </div>
           
          

    </div>
  )
}

export default Articles