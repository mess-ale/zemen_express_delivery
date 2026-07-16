import { useEffect } from "react";
import logo1 from "../../assets/clients/1.webp";
import logo2 from "../../assets/clients/2.webp";
import logo3 from "../../assets/clients/3.webp";
import logo4 from "../../assets/clients/4.webp";
import logo5 from "../../assets/clients/5.webp";
import logo6 from "../../assets/clients/6.webp";

export default function ContactMapSection() {
  return (
    <section className="bg-white">
      {/* Map */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-16">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.7265307646605!2d38.74447654463764!3d9.009644521768083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500037197bf%3A0xf7874188ef2e3f87!2sZemen%20Express%20Delivery%20Mexico%20Branch!5e1!3m2!1sen!2set!4v1784187092498!5m2!1sen!2set"
            className="h-[520px] w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} className="h-10 w-30 object-contain" />
    </div>
  );
}
