import BlogDetailQuote from "./BlogDetailQuote";
import BlogDetailTagsShare from "./BlogDetailTagsShare";
import BlogDetailAuthorCard from "./BlogDetailAuthorCard";
import BlogDetailReplyForm from "./BlogDetailReplyForm";
import inlineImg from "../../assets/blog/full.png";

export default function BlogDetailArticle({ post }) {
  return (
    <article className="rounded-2xl bg-white px-6 py-8 shadow-[0_18px_55px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:px-10 sm:py-10">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-black/50">
        <span>by {post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.category}</span>
      </div>

      <h1 className="mt-3 text-2xl font-extrabold leading-tight text-[#1F2A30] sm:text-3xl">
        {post.title}
      </h1>

      <p className="mt-3 text-sm leading-7 text-black/55">
        Fast, re
        liable logistics are the backbone of thriving modern enterprises and seamless personal connections. At Zemen Express Delivery, we have re-engineered the standard courier framework to introduce a swift, secure, and highly affordable logistics solution spanning across Ethiopia. By leveraging real-time tracking systems and highly optimized transit routes, we ensure your critical packages reach their destinations without a single moment of unnecessary delay.
      </p>

      {/* Body */}
      <div className="mt-6 space-y-5 text-sm leading-7 text-black/55">
        <p>
          Managing urgent deliveries requires a system built on absolute trust and operational precision. From dispatching sensitive legal documents in Addis Ababa to transporting valuable commercial goods to major regional hubs, every single step of the journey is carefully monitored. Our dedicated courier team handles each parcel with extreme care, ensuring that fragility and security are never compromised for speed.
        </p>

        <BlogDetailQuote />

        <p>
          By establishing structured transit corridors and investing in local logistical capacity, we successfully bridge the distance between cities in less than 24 hours. We understand that time is a crucial asset for your business; therefore, our next-day delivery guarantee is not just a promise, but a core operational standard we deliver on, day in and day out.
        </p>

        {/* Inline image block */}
        <div className="overflow-hidden rounded-xl bg-black/5">
          <img src={inlineImg} alt="Zemen Express Delivery Hub operations" className="h-full w-full object-cover" />
        </div>

        <h2 className="pt-2 text-xl font-extrabold text-[#1F2A30]">
          Optimizing Intercity Courier Networks
        </h2>
        <p>
          Looking forward, we continue to innovate by integrating smart route-planning software and expanding our dispatch hubs. This persistent focus on infrastructure allows us to consistently lower shipping costs while speeding up transit times, providing your business with a reliable logistical advantage that scales alongside your growth.
        </p>
      </div>

      <BlogDetailTagsShare />

      <BlogDetailAuthorCard />

      <BlogDetailReplyForm />
    </article>
  );
}