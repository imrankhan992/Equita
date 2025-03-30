import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="item">
      <div className="item-container">
        <Disclosure as="div" className="disclousere">
          {({ open }) => (
            <>
              <DisclosureButton className="disclousere-button">
                <span className="mobile-menu-title">Home</span>
                <ChevronDownIcon
                  className={`arrow-icon ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="panel-content">
                <a href="#">Home Main</a>
                <a href="#">Home Modern</a>
                <a href="#">Home Classic</a>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="disclousere">
          {({ open }) => (
            <>
              <DisclosureButton className="disclousere-button">
                <span className="mobile-menu-title">Company</span>
                <ChevronDownIcon
                  className={`arrow-icon ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="panel-content">
                <a href="#">About Us</a>
                <a href="#">Core Values</a>
                <a href="#">Leadership Team</a>
                <a href="#">Global Locations</a>
                <a href="#">Our Gallery</a>
                <a href="#">Awards & Recognition</a>
                <a href="#">Careers</a>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="disclousere">
          {({ open }) => (
            <>
              <DisclosureButton className="disclousere-button">
                <span className="mobile-menu-title">Services</span>
                <ChevronDownIcon
                  className={`arrow-icon ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="panel-content">
                <div className="mobile-menu-even-columns">
                  <div className="item-container-even-columns">
                    <h1>Transportation</h1>
                    <a href="#">Warehousing</a>
                    <a href="#">Air Freight</a>
                    <a href="#">Ocean Freight</a>
                    <a href="#">Road Freight</a>
                    <a href="#">Supply Chain</a>
                    <a href="#">Packaging</a>
                  </div>
                  <div className="item-container-even-columns">
                    <h1>Industries</h1>
                    <a href="#">Retail & Consumer</a>
                    <a href="#">Sciences & Healthcare</a>
                    <a href="#">Industrial & Chemical</a>
                    <a href="#">Power Generation</a>
                    <a href="#">Food & Beverage</a>
                    <a href="#">Oil & Gas</a>
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="disclousere">
          {({ open }) => (
            <>
              <DisclosureButton className="disclousere-button">
                <span className="mobile-menu-title">News & Blogs</span>
                <ChevronDownIcon
                  className={`arrow-icon ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="panel-content">
                <a href="#">Our Blog</a>
                <a href="#">Single Blog Post</a>
                <a href="#">Our Services</a>
                <a href="#">Case Studies Grid</a>
                <a href="#">Case Studies Standard</a>
                <a href="#">Single Case Study</a>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="disclousere">
          {({ open }) => (
            <>
              <DisclosureButton className="disclousere-button">
                <span className="mobile-menu-title">Features</span>
                <ChevronDownIcon
                  className={`arrow-icon ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="panel-content">
                <a href="#">Request a Quote</a>
                <a href="#">Track & Trace</a>
                <a href="#">Find a Location</a>
                <a href="#">Help & FAQs</a>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
