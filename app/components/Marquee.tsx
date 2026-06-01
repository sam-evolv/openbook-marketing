'use client';

const ITEMS = [
  'Gyms', 'Barbers', 'Salons', 'Physios', 'Nail studios', 'Yoga studios',
  'Sauna & spa', 'Driving schools', 'Personal training', 'Pilates',
  'Aesthetics', 'Tattoo', 'Dog grooming', 'Pottery studios', 'Climbing gyms',
];

export default function Marquee() {
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </div>
    </section>
  );
}
