import Hero from './Hero';
import data from './data';

export default function MultipleHero () {
  const allData = data.map((value) => {
    return (
      <Hero 
        key={value.id}
        {...value}
      />
    )
  });

  return (
    <div>
        {allData}
    </div>
  )
}