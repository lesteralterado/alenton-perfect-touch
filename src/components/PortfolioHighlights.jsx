import { motion } from 'framer-motion';
import Icon from './AppIcon';
import After_interior from '../assets/images/After_interior.jpg'
import Before_interior from '../assets/images/Before_interior.jpg'
import After_exterior from '../assets/images/after_exterior.jpg'
import Before_exterior from '../assets/images/before_exterior.jpg'
import After_a2_1 from '../assets/images/A2_1.jpg'
import Before_a2_2 from '../assets/images/A2_2.jpg'

const PortfolioHighlights = () => {
  return (
    <section id='portfolio' className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/95 to-[#ffae00]/10">
        <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
        >
          <span className="block bg-[linear-gradient(135deg,#ffffff_0%,#ffae00_50%,#f4a261_100%)] bg-clip-text text-transparent">Portfolio Highlights</span> 
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          See the dramatic difference professional editing makes with these before and after examples
        </p>
      </div>

      <div className="space-y-16">
        {/* <!-- Portfolio Item 1 --> */}
        <div className="flex flex-col lg:flex-row gap-8 items-center" data-aos="fade-up">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Living Room Enhancement</h3>
            <p className="text-gray-300 mb-6">
              This living room transformation demonstrates color correction, exposure balancing, and removing distracting elements to create an inviting space that highlights the room's best features.
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Corrected white balance and color temperature</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Balanced window exposure with interior lighting</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Removed clutter and distracting elements</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architectural features and furniture</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="before w-full h-full">
                <img src={After_interior} className="w-full h-full object-cover" alt="After: Enhanced Living Room" ></img>
                <span className="image-caption before-caption right-4">AFTER</span>
              </div>
              <div className="after">
                <img src={Before_interior} className="w-full h-full object-cover" alt="Before: Original Living Room"></img>
                <span className="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>

        {/* <!-- Portfolio Item 2 --> */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center" data-aos="fade-up">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Exterior Sky Replacement</h3>
            <p className="text-gray-300 mb-6">
              This exterior transformation showcases the dramatic impact of sky replacement, color enhancement, and landscaping improvements to create a compelling first impression.
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Replaced overcast sky with vibrant blue sky</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architecture and exterior features</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Improved lawn and landscaping appearance</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Corrected perspective and composition issues</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="before w-full h-full">
                <img src={After_exterior} className="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
                <span className="image-caption before-caption right-4">AFTER</span>
              </div>
              <div className="after">
                <img src={Before_exterior} className="w-full h-full object-cover" alt="After: Enhanced Living Room"></img>
                <span className="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>

        {/* <!-- Portfolio Item 3 --> */}
        <div className="flex flex-col lg:flex-row gap-8 items-center" data-aos="fade-up">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Day to Dusk Conversion</h3>
            <p className="text-gray-300 mb-6">
              This twilight transformation creates a warm, inviting ambiance that highlights architectural features and creates an emotional connection with potential buyers.
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Converted daytime photo to dramatic dusk scene</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Added interior and exterior lighting effects</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Enhanced architectural features with lighting</span>
              </li>
              <li className="flex items-start">
                <Icon name="ChevronRight" size={16} className="text-indigo-400 mt-1 mr-2" />
                <span>Created inviting, atmospheric property appearance</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="image-compare h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="before w-full h-full">
                <img src={After_a2_1} className="w-full h-full object-cover" alt="After: Converted daytime photo to dramatic dusk scene"></img>
                <span className="image-caption before-caption right-4">AFTER</span>
              </div>
              <div className="after">
                <img src={Before_a2_2} className="w-full h-full object-cover" alt="After: Converted daytime photo to dramatic dusk scene"></img>
                <span className="image-caption after-caption left-4">BEFORE</span>
              </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-3">Hover over image to see before/after comparison</div>
          </div>
        </div>
      </div>

      {/* <!-- Why Choose Me Section --> */}
      <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 bg-[linear-gradient(135deg,#ffffff_0%,#ffae00_50%,#f4a261_100%)] bg-clip-text text-transparent">Why Choose Me?</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional real estate photo editing with proven results and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Fast Turnaround Time</h4>
              <p className="text-gray-300">Get your edited photos back in just 12-24 hours, ensuring you never miss a listing deadline.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Star" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-foreground">High-Quality, Realistic Results</h4>
              <p className="text-gray-300">Professional editing that looks natural and enhances your property's true potential.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="Eye" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Attention to Detail</h4>
              <p className="text-gray-300">Deep understanding of real estate marketing with meticulous attention to every pixel.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Icon name="DollarSign" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Flexible Pricing</h4>
              <p className="text-gray-300">Competitive rates based on project size, from single photos to entire property portfolios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default PortfolioHighlights