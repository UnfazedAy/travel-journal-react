import locationLogo from '../assets/location.png';

export default function Hero (props) {
  return (
    <section>
      <div className='my--hero'>
        <img src={props.imageUrl} alt='location view' className='hero--img'/>
        <div className="travel--info">
          <div className='travel--location'>
            <img src={locationLogo} alt='Google map location logo' />
            <p className='travel--country'>{props.location}</p>
            <a href={props.googleMapsUrl} rel="noreferrer" target='_blank' className='map--link'>View on Google Maps</a>
          </div>
          <h1 className='title'>{props.title}</h1>
          <p className='travel--date'>{props.startDate} - {props.endDate}</p>
          <p className='description'>{props.description}</p>
        </div>
      </div>
    </section>
  );
}