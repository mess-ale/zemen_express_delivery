import client1 from "../../assets/clients/Ethiopost.png";
import client2 from "../../assets/clients/Hope.png";
import client3 from "../../assets/clients/icl.png";
import client4 from "../../assets/clients/saf.png";
import client5 from "../../assets/clients/tech26.png";
import client6 from "../../assets/clients/habte.png";



/**
 * TrustedClients
 * - Center label with divider lines on both sides
 * - Row of client logos (placeholders)
 * - Responsive wrap on small screens
 */
export default function TrustedClients() {
    const logos = [ client4, client1, client2, client3, client6, client5]
//   const logos = [
//     { name: "Toy Jesh", image: client1 },
//     { name: "waleon", image: client2 },
//     { name: "calsa", image: client3 },
//     { name: "Contex", image: client4 },
//     { name: "Toy Jesh", image: client5 },
//     { name: "sefrov", image: client6 },
//   ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top divider + label */}
        <div className="flex items-center justify-center gap-6">
          <span className="hidden h-px w-[40%] bg-[#1d0b6c] md:block" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#210c81]">
            OUR TRUSTED CLIENTS
          </span>
          <span className="hidden h-px w-[40%] bg-[#18095b] md:block" />
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-10 text-lg font-semibold text-black/55"
            >
              {/* Logo mark placeholder */}
              {/* <span className="inline-block h-6 w-6 rounded bg-black/10" />
              <span>{name}</span> */}
              <img src={logo} alt="Client Logo" className="h-20 w-30 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
