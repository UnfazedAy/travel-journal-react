import worldBall from '../assets/world.png';

export default function Navbar() {
  return (
    <nav className='my--nav'>
      <img src={worldBall} alt="world map ball" className='nav--img'/>
      <p>my travel journal</p>
    </nav>
  )
}