import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Input } from "./Input";

const Cta_Tabs = ({
  categories,
}: {
  categories: {
    name: string;
    img: string;
    alt: string;
    content: string;
    component: React.ReactNode;
  }[];
}) => {
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
};

export default Cta_Tabs;
