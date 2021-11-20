import { Tabs } from 'antd';
import BookingCard from '../modules/BookingCard';

const { TabPane } = Tabs;

function BookingPage() {
    return (
        <div>
            <h1>Book your table</h1>
            <BookingCard/>
        </div>
    );
}

export default BookingPage;


