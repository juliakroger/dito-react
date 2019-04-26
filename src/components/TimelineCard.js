import React from 'react';
import {Card, Timeline} from "antd";
import CardHeader from './TimelineCardHeader';
import ProductsTable from "./ProductsTable";


const TimelineCard = (props) => {
  return (
      <Timeline.Item dot={<i className="fas fa-check-circle"></i>} color="green">
        <Card size="small" style={{width: '100%', maxWidth: '700px', minWidth: '300px'}}>
          <CardHeader compra={props.purchase.compra}/>
          <ProductsTable produtos={props.purchase.produtos}/>
        </Card>
      </Timeline.Item>
  );
};

export default TimelineCard;