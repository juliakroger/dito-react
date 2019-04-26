import React from 'react';
import Moment from 'react-moment';


const TimelineCardHeader = (props) => {
  let style = {display: 'inline', marginRight: '15px'};
  return (
      <div style={{textAlign: 'center'}}>
        <p style={style}>
          <i className='fas fa-calendar-week' style={{marginRight: '4px'}}/>
          <Moment format="DD/MM/YYYY">{props.compra.timestamp}</Moment>
        </p>
        <p style={style}>
          <i className='far fa-clock' style={{marginRight: '4px'}}/>
          <Moment format="HH:mm">{props.compra.timestamp}</Moment>
        </p>
        <p style={style}>
          <i className="fas fa-map-marker-alt" style={{marginRight: '3px'}}/>
          {
            props.compra.custom_data.map(data => {
              if (data.key === 'store_name') return data.value
            })
          }
        </p>
        <p style={style}>
          <i className="fas fa-dollar-sign" style={{marginRight: '3px'}}/>
          {props.compra.revenue.toFixed(2)}
        </p>
      </div>
  );
};

export default TimelineCardHeader;