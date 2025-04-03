import React from 'react'
import "./recentArticles.css"
const RecentArticles = () => {
  return (
    <section className='recent-articles_section '>
        <div className='container'>
        <div class="recent-articles_wrapper">
                <p class="heading-subtitle">insight and trends</p>
                <h2 class="heading-title">recent articles</h2>
                <p class="heading-desc">Follow our latest news and thoughts which focuses exclusively on  insight, industry trends, top news headlines.</p>
              </div>

                {/* blogs */}
               <div className='recent-articles_main'>

               <div className='recent-articles_container'>
                    <div className='recent-articles_img_container'>
                        <img src="https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg" width={350} height={231} alt="" />
                    </div>
                    <div className='recent-articles_content'>
                        <span>cargo, insights</span>
                        <h3>Importers achieve cost savings through the First Sale rule!</h3>
                        <span className='date'>20 jan 2025</span>
                        <p>The trade war currently ensuing between the nations around the globe, fiercely with China, shows no signs of the first set of tariffs levied against solar...</p>
                        <a href="">Read more</a>
                    </div>
                </div>

                {/* second  */}
                <div className='recent-articles_container'>
                    <div className='recent-articles_img_container'>
                        <img src="https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg" width={350} height={231} alt="" />
                    </div>
                    <div className='recent-articles_content'>
                        <span>cargo, insights</span>
                        <h3>Importers achieve cost savings through the First Sale rule!</h3>
                        <span className='date'>20 jan 2025</span>
                        <p>The trade war currently ensuing between the nations around the globe, fiercely with China, shows no signs of the first set of tariffs levied against solar...</p>
                        <a href="">Read more</a>
                    </div>
                </div>
                {/* {third} */}
                <div className='recent-articles_container'>
                    <div className='recent-articles_img_container'>
                        <img src="https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg" width={350} height={231} alt="" />
                    </div>
                    <div className='recent-articles_content'>
                        <span>cargo, insights</span>
                        <h3>Importers achieve cost savings through the First Sale rule!</h3>
                        <span className='date'>20 jan 2025</span>
                        <p>The trade war currently ensuing between the nations around the globe, fiercely with China, shows no signs of the first set of tariffs levied against solar...</p>
                        <a href="">Read more</a>
                    </div>
                </div>
               </div>
        </div>
    </section>
  )
}

export default RecentArticles