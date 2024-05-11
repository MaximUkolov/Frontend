export default function EventCard({number, event, myDate, place,}) {
    return(
        <div className="card">
            <h1>Карточка номер {number}</h1>
            <p>Событие: {event}</p>
            <p>Дата: {myDate}</p>
            <p>Место: {place}</p>
        </div>
    )
}