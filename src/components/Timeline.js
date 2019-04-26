import React from 'react';
import {Timeline} from 'antd';
import TimelineCard from "./TimelineCard";


const TimeLine = (props) => {
  return (
      <Timeline style={{margin: '15px', marginRight: '8px'}}>
        {
          (props.purchase) &&
          props.purchase.map((event, i) => {
            return <TimelineCard key={i} purchase={event}/>
          })
        }
      </Timeline>
  )
};

export default TimeLine;