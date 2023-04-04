import { Tab,Tabs,TabList,TabPanel } from "react-tabs";
import React from "react";
import 'react-tabs/style/react-tabs.css';


class Val extends React.Component{
    render(){
        return(
            <Tabs>
            <TabList>
                <Tab>vijay</Tab>
                <Tab>tiii</Tab>
            </TabList>
            <TabPanel>
                <h2>welcome vijay</h2>
            </TabPanel>
            <TabPanel>
                <h2>no</h2>
            </TabPanel>
            </Tabs>
        )
    }
}
export default Val;