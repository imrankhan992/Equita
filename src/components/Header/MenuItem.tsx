import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function MenuItem({
  menuItems,
}: {
  menuItems: {
    label: string;
    sections: { title?: string; links: string[] }[];
  }[];
}) {
  return (
    <div className="item">
      <div className="item-container">
        {menuItems?.map((item, i) => (
          <Disclosure as="div" className="disclousere" key={i}>
            {({ open }) => (
              <>
                <DisclosureButton className="disclousere-button">
                  <span className="mobile-menu-title">{item.label}</span>
                  <ChevronDownIcon
                    className={`arrow-icon ${open ? "rotate-90" : ""}`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="panel-content">
                  {item.sections.length === 1 ? (
                    item.sections[0].links.map((link, li) => (
                      <a key={li} href="#">{link}</a>
                    ))
                  ) : (
                    <div className="mobile-menu-even-columns">
                      {item.sections.map((section, si) => (
                        <div key={si} className="item-container-even-columns">
                          {section.title && <h1>{section.title}</h1>}
                          {section.links.map((link, li) => (
                            <a key={li} href="#">{link}</a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
