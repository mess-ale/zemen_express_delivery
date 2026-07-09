import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogPagination from "../components/blog/BlogPagination";
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
// import TrustedClients from "../components/Home/TrustedClients"; // if you already have it

export default function Blog() {
  return (
    <main className="bg-[#F4F6F8]">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          <div>
            <BlogGrid />
            <BlogPagination />
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <BlogSidebar />
          </aside>
        </div>
      </section>

      <NewsletterCta />
      <FooterDarkSimple />
    </main>
  );
}
