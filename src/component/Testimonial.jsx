import React from 'react';

const testimonialData = [
  {
    name: 'Roger Scott',
    role: 'MARKETING MANAGER',
    image: 'https://placehold.co/100x100',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    name: 'Roger Scott',
    role: 'MARKETING MANAGER',
    image: 'https://placehold.co/100x100',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    name: 'Roger Scott',
    role: 'MARKETING MANAGER',
    image: 'https://placehold.co/100x100',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  }
];

const testimonialContainerClasses = "bg-zinc-100 py-12";
const testimonialHeaderClasses = "text-center mb-8";
const testimonialCardClasses = "bg-white p-6 rounded-lg shadow-lg";
const testimonialImageClasses = "w-16 h-16 rounded-full mr-4";
const testimonialTextClasses = "text-xl font-bold";
const testimonialRoleClasses = "text-teal-500";
const testimonialContentClasses = "text-zinc-600";

const Testimonial = () => {
  return (
    <div className={testimonialContainerClasses}>
      <div className={testimonialHeaderClasses}>
        <h2 className="text-teal-600 font-semibold">TESTIMONIAL</h2>
        <h1 className="text-3xl font-bold">Happy Guests</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className={testimonialCardClasses}>
            <div className="flex items-center mb-4">
              <img className={testimonialImageClasses} src={testimonial.image} alt={`Testimonial ${index + 1}`} />
              <div>
                <h3 className={testimonialTextClasses}>{testimonial.name}</h3>
                <p className={testimonialRoleClasses}>{testimonial.role}</p>
              </div>
            </div>
            <p className={testimonialContentClasses}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
