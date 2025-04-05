import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import shipping from "../../assets/images/icons/shipping.png";
import order from "../../assets/images/icons/order.png";
import { Input } from "./Input";

const categories = [
  {
    name: "Request A Quote",
    img: order,
    alt: "order image",
    content: "Request a quote content here.",
    component: (
      <>
        <div className="request_quote-main_container">
          <div className="left_side_main">
            <div>
              <h2 className="sub-headings">Personal Data</h2>
              <div className="request_quote_inputs">
                <Input
                  type="text"
                  placeholder="Name"
                  className="text-input mobile-inputs"
                />
                <Input type="text" placeholder="Email" className="text-input" />
                <Input type="text" placeholder="Phone" className="text-input" />
              </div>
            </div>
            <div>
              <h2 className="sub-headings">Shipment Data</h2>
              <div className="request_quote_inputs">
                <Input
                  type="text"
                  placeholder="Freight Type"
                  className="text-input mobile-inputs"
                />
                <Input
                  type="text"
                  placeholder="City of Departure"
                  className="text-input"
                />
                <Input
                  type="text"
                  placeholder="Delivery City"
                  className="text-input"
                />
              </div>
              <div className="request_quote_small_inputs">
                <Input
                  type="text"
                  placeholder="Incoterms"
                  className="text-input small-mediun-input mobile-inputs"
                />
                <div className="small_input_group">
                  <Input
                    type="text"
                    placeholder="Weight"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Height"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Width"
                    className="text-input-very-small"
                  />
                  <Input
                    type="text"
                    placeholder="Length"
                    className="text-input-very-small"
                  />
                </div>
              </div>
              {/* check boxes */}
              <div>
                <div className="checkboxes">
                  <label className="checkbox_container">
                    fragile
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    express delivery
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    insurance
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    packaging
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <button className="button-black-to-red">Request A Quote</button>
            </div>
          </div>
          {/* right side main */}
          <div className="right_side_main">
            <div className="career_div">
              <div className="overlay-red"></div>
              <div className="career_div_content">
                <h2 className="sub-headings">
                  Take your carreer to next level
                </h2>
                <p>
                  We pride ourselves on providing the best transport & shipping
                  services available all over the world and there is no one
                  comes close to us.
                </p>
                <button className="cta-button">
                  <span>
                    <svg
                      height={25}
                      width={25}
                      className="svg-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>{" "}
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    name: "Track & Trace",
    img: shipping,
    alt: "shipping image",
    content: "Track & Trace details here.",
    component: (
      <>
        <div className="request_quote-main_container">
          <div className="left_side_main">
            <div>
              <h2 className="sub-headings">Personal Data</h2>
              <div className="request_quote_inputs-shipping">
                <Input
                  type="text"
                  placeholder="Name"
                  className="text-input-shiping"
                />
              </div>
            </div>
            <div>
              <h2 className="sub-headings">Tracking number</h2>
              <div className="text-area">
                <textarea
                  placeholder="You can enter up to a maximum of  airway bill numbers for tracking"
                  className="text-area-input"
                />
              </div>

              {/* check boxes */}
              <div>
                <div className="checkboxes">
                  <label className="checkbox_container">
                    fragile
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    express delivery
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    insurance
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                  <label className="checkbox_container">
                    packaging
                    <input type="radio" name="radio" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <button className="button-black-to-red">Track & Trace</button>
            </div>
          </div>
          {/* right side main */}
          <div className="right_side_main">
            <div className="career_div">
              <div className="overlay-red"></div>
              <div className="career_div_content">
                <h2 className="sub-headings">
                  Take your carreer to next level
                </h2>
                <p>
                  We pride ourselves on providing the best transport & shipping
                  services available all over the world and there is no one
                  comes close to us.
                </p>
                <button className="cta-button">
                  <span>
                    <svg
                      height={25}
                      width={25}
                      className="svg-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>{" "}
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export default function Cta_Tabs() {
  return (
    <div className="cta_tab_container container">
      <div className="cta_tab_content ">
        <TabGroup>
          <TabList className="cta_tab container container">
            {categories.map(({ alt, img, name }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  `button-tabs ${selected ? "active" : ""}`
                }
              >
                <div className="tabs-button">
                  <img height={50} width={50} src={img} alt={alt} /> {name}
                </div>
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          <TabPanels className="panel__container container">
            {categories.map(({ name, component }) => (
              <TabPanel key={name} className="p-4 bg-gray-200 rounded-lg">
                {component}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
