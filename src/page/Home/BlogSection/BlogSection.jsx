function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Donor",
      quote:
        "I've been donating surplus food for a year now, and it's heartwarming to see how it directly impacts those in need. This platform has made it so easy to give back.",
      image: "john-doe.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Recipient",
      quote:
        "Thanks to this platform, my family no longer struggles to put food on the table. We've received nutritious meals that have made a world of difference.",
      image: "jane-smith.jpg",
    },
    // Add more testimonials here...
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-auto rounded-full"
              />
              <p className="text-gray-700 mt-4">{testimonial.quote}</p>
              <p className="text-gray-500 mt-2">
                - {testimonial.name}, {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
