export default function Marquee() {
  const items = [
    'Gyms', 'Barbers', 'Salons', 'Physios', 'Nail studios', 'Yoga studios',
    'Sauna & spa', 'Driving schools', 'Personal training', 'Pilates',
    'Aesthetics', 'Tattoo', 'Dog grooming', 'Pottery studios', 'Climbing gyms',
  ];
  const row = items.map((x, i) => <span key={i}>{x}</span>);
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </section>
  );
}
