import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../components/ExperienceCards';
import Timelinecolor from './Timelinecolor';
 




function HomeTabs() 
{ 
  return <div class="fluid-container">
    <Tabs>
    <TabList style={{position:'sticky', top:0 , zIndex:1}} >
      <Tab >About Me</Tab>
      <Tab> Education</Tab>
      <Tab >Projects/Experience</Tab>
      <Tab >Achievements</Tab>
     
    </TabList>
    <TabPanel>
    <div id='about'>
       <p>
          Passionate for Machine Learning and Web Design. 
          <br/>Seeking opportunities to apply and further develop my skills in these fields.
          <br />Current student looking to join the workforce to gain real-world experience. Ability to complete tasks
          on time in both individual and team settings. Dependable and reliable, ready to learn and grow with
          your company.
          <br />
       </p> 
    </div>
 
    </TabPanel>
    <TabPanel>
      <div>
      <Timelinecolor />
          
      </div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
  </Tabs>
</div>
}
export default HomeTabs;