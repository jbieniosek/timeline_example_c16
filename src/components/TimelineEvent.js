import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timestamp}) => {

    return(
        <div className="timeline-event">
            <div className="event-person">{person}</div>
            <div className="event-time"><Timestamp time={timestamp} /></div>
            <div className="event-status">{status}</div>
        </div>
    )
};

export default TimelineEvent;