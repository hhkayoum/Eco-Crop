import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>EcoCrop / Contact</title>
      </Helmet>
      <div className="max-w-5xl mx-auto my-10">
        <div>
          <h2 className="text-4xl font-extrabold text-center mb-8 text-[#69B455]">
            About EcoCrops
          </h2>
          <div className="flex justify-between items-center space-x-8">
            <div className="flex-1">
              <img
                src="https://i.ibb.co/ckSMcNz/Business-training-illustration-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#69B455]">
                <strong>Our Mission</strong>
              </h3>
              <p className="text-lg mt-4 font-medium">
                We are on a mission to tackle two pressing issues: food waste
                and food insecurity. Our vision is a world where no one goes to
                bed hungry, and where perfectly good food does not go to waste.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-8 mt-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#69B455]">
                <strong>How We Work</strong>
              </h3>
              <p className="text-lg mt-4 font-medium">
                Our platform connects local businesses, restaurants, and
                individuals with excess food to community organizations and
                individuals in need. By redistributing surplus food, we are not
                only reducing waste but also ensuring that everyone in our
                community has access to nutritious meals. It is a win-win for
                all.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://i.ibb.co/tBgv9G5/Woman-Making-Business-Presentation-Front-Group-Stock-Illustration-1551568040-Shutterstock-removebg-p.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-xl  font-semibold mt-8 text-[#69B455]">
              <strong>Why Choose EcoCrops</strong>
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
              <li className="font-medium">
                Community-Centric: We are dedicated to strengthening our
                community bonds and fostering resilience.
              </li>
              <li className="font-medium">
                User-Friendly: Our platform is designed for easy use, making it
                simple for both donors and recipients to participate.
              </li>
              <li className="font-medium">
                Sustainable Impact: By reducing food waste and helping those in
                need, we make a lasting impact on the environment and countless
                lives.
              </li>
              <li className="font-medium">
                Join the Movement: When you use [Your Platform Name], you become
                part of a community committed to creating positive change.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <h2 className="text-3xl font-extrabold text-[#69B455] text-center mb-4">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div>
              <div>
                <h3 className="text-xl font-semibold text-[#69B455]">
                  Get in Touch
                </h3>
                <p className="font-medium mt-2">
                  Have questions, suggestions, or just want to say hello? Wed
                  love to hear from you.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#69B455]">
                  Office Hours
                </h3>
                <p className="font-medium mt-2">
                  Monday to Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="font-medium">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="font-medium">Sunday: Closed</p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#69B455]">
                  Location
                </h3>
                <p className="font-medium mt-2">
                  Visit us at our office address:
                </p>
                <p className="font-medium">[Your Platform Name]</p>
                <p className="font-medium">123 Main Street</p>
                <p className="font-medium">City, State, ZIP Code</p>
              </div>
            </div>
            <div>
              <img
                src="https://i.ibb.co/qxy8Zbp/Hubungi-Layanan-Pelanggan-Pria-Kami-Clipart-Pembantu-Komunitas-Pelayanan-Pelanggan-Hubungi-Kami-PNG.png"
                alt=""
              />
              <h3 className="text-xl font-semibold text-[#69B455]">
                Contact Information
              </h3>
              <p className="font-medium mt-2">
                Email: contact@yourplatformname.com
              </p>
              <p className="font-medium">Phone: +1-123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
