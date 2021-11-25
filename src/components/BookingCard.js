import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function BookingCard() {
  return (
    <div>
      <h4>Find your table</h4>
      <p>Book your table - Immediate confirmation</p>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Date" key="1">
          Date
        </TabPane>
        <TabPane tab="Time" disabled key="2">
          Time
        </TabPane>
        <TabPane tab="Seats" key="3">
          Seats
        </TabPane>
        <TabPane tab="Offers" key="4">
          Offers
        </TabPane>
      </Tabs>
    </div>
  );
}

export default BookingCard;
