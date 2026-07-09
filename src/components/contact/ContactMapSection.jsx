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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.5404497557083!2d38.78521566953354!3d8.996313824048896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850001076715%3A0x918e57ad4c72b3ce!2szemen%20express%20delivery!5e1!3m2!1sen!2set!4v1783590391686!5m2!1sen!2set"
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
