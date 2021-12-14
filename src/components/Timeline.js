import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

    let events = props.events;
    let eventComponents = []
    for(let i = 0; i < events.length; i++) {
        eventComponents.push(<TimelineEvent person={events[i].person} status={events[i].status} timestamp={events[i].timestamp}/>);
    }


    return(
        <section className="timeline">
            {eventComponents}
        </section>
    );


};

export default Timeline;