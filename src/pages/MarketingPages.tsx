import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SeoHead } from "../components/SeoHead";
import { blogPosts, getBlogBySlug } from "../content/blog";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Locanova",
  url: "https://locanova.in",
  logo: "https://locanova.in/logo.png",
  sameAs: ["https://www.instagram.com/locanova.in/", "https://www.linkedin.com/company/locanova-digital/"],
  knowsAbout: ["education marketing", "real estate marketing", "lead generation", "CRM automation"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Locanova Growth Systems",
  provider: { "@type": "Organization", name: "Locanova" },
  serviceType: "Marketing Systems",
  audience: { "@type": "Audience", audienceType: "Education and Real Estate Businesses" },
  areaServed: "India",
};

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{title}</h2>
    <div className="text-white/75 space-y-3">{children}</div>
  </section>
);

const CTA = ({ text = "Book Free Strategy Call" }: { text?: string }) => (
  <div className="flex flex-col sm:flex-row gap-3 pt-2">
    <a
      href="https://wa.me/917766828618?text=Hello%20Locanova,%20I%20want%20to%20book%20a%20free%20strategy%20call."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-3 text-sm font-semibold text-white"
    >
      <MessageCircle size={16} />
      {text}
    </a>
  </div>
);

export const HomePage = () => (
  <>
    <SeoHead
      title="Growth Systems for Institutes & Real Estate Businesses | Locanova"
      description="Lead generation and conversion systems using ads, CRM, WhatsApp, and automation for institutes and real estate businesses."
      canonicalPath="/"
      schema={[orgSchema, serviceSchema]}
    />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Growth Systems for Institutes & Real Estate Businesses
        </h1>
        <p className="text-white/70 max-w-3xl mx-auto">
          We build lead generation and conversion systems using ads, CRM, WhatsApp, and automation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link to="/institute-marketing-system" className="text-blue-300 hover:text-blue-200">Institute Marketing System</Link>
          <span className="text-white/30">|</span>
          <Link to="/real-estate-marketing-system" className="text-blue-300 hover:text-blue-200">Real Estate Marketing System</Link>
          <span className="text-white/30">|</span>
          <Link to="/blog/best-digital-marketing-agency-gaya" className="text-blue-300 hover:text-blue-200">Digital Marketing in Gaya</Link>
        </div>
        <CTA />
      </header>

      <Section title="Problems We Fix">
        <p>Institutes struggle with missed follow-ups, low enquiry-to-admission conversion, and poor tracking.</p>
        <p>Real estate businesses face low quality leads, wasted ad spend, and no repeatable conversion process.</p>
      </Section>

      <Section title="One System, Two Industries">
        <ul className="grid gap-2 sm:grid-cols-2">
          {["Ads for demand generation", "Landing pages for lead capture", "CRM for tracking and control", "WhatsApp automation for nurturing", "Counsellor/sales workflows", "Retargeting for conversion lift"].map((item) => (
            <li key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" />{item}</li>
          ))}
        </ul>
        <CTA />
      </Section>

      <Section title="Case Studies">
        <p><strong className="text-white">Beauty Academy:</strong> stabilized lead flow and reached 30+ admission-ready enquiries per month through structured follow-up automation.</p>
        <p><strong className="text-white">Real Estate Project:</strong> improved lead quality and conversion by combining intent-led ad targeting with CRM and retargeting loops.</p>
      </Section>
    </div>
  </>
);

const IndustryPage = ({
  title,
  description,
  canonicalPath,
  problems,
  solutions,
  ctaText,
  links,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  problems: string[];
  solutions: string[];
  ctaText: string;
  links: { href: string; label: string }[];
}) => (
  <>
    <SeoHead title={`${title} | Locanova`} description={description} canonicalPath={canonicalPath} schema={[orgSchema, serviceSchema]} />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{title}</h1>
      <p className="text-white/70">{description}</p>
      <Section title="Problems">
        <ul className="space-y-2">
          {problems.map((p) => <li key={p}>- {p}</li>)}
        </ul>
      </Section>
      <CTA />
      <Section title="Solution">
        <ul className="space-y-2">
          {solutions.map((s) => <li key={s}>- {s}</li>)}
        </ul>
      </Section>
      <CTA text={ctaText} />
      <Section title="Explore Services">
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="rounded-xl border border-white/10 bg-black/20 hover:border-blue-400/50 px-4 py-3 flex items-center justify-between text-white/90">
              {l.label}
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </Section>
    </div>
  </>
);

export const InstitutePage = () => (
  <IndustryPage
    title="Admission Growth System for Coaching Institutes & Academies"
    description="Admission marketing agency system for coaching institutes, academies, and beauty institutes with ads, CRM, and WhatsApp conversion workflows."
    canonicalPath="/institute-marketing-system"
    problems={["Low conversion from leads to admissions", "Delayed follow-up and missed enquiries", "No admission tracking visibility"]}
    solutions={["Meta and Google lead campaigns", "Lead capture landing pages", "CRM for coaching institutes", "WhatsApp marketing for institutes", "Team follow-up scripts and tracking", "Case highlight: beauty academy achieved 30 admissions/month"]}
    ctaText="Book Free Strategy Call for Institute"
    links={[
      { href: "/coaching-institute-lead-generation", label: "Coaching Institute Lead Generation" },
      { href: "/beauty-academy-marketing", label: "Beauty Academy Marketing" },
      { href: "/crm-for-coaching-institutes", label: "CRM for Coaching Institutes" },
    ]}
  />
);

export const RealEstatePage = () => (
  <IndustryPage
    title="Real Estate Lead Generation & Conversion System"
    description="Real estate lead generation agency workflow for builders, developers, and brokers across India."
    canonicalPath="/real-estate-marketing-system"
    problems={["Low quality leads", "No follow-up system", "Wasted ad spend", "No CRM tracking"]}
    solutions={["Meta + Google Ads for property leads", "Project-focused landing pages", "WhatsApp automation for follow-up", "CRM for lead tracking", "Retargeting for warmer conversions"]}
    ctaText="Get qualified property leads with better conversion"
    links={[
      { href: "/real-estate-lead-generation", label: "Real Estate Lead Generation" },
      { href: "/facebook-ads-for-real-estate", label: "Facebook Ads for Real Estate" },
      { href: "/real-estate-whatsapp-marketing", label: "Real Estate WhatsApp Marketing" },
      { href: "/real-estate-crm-system", label: "Real Estate CRM System" },
    ]}
  />
);

export const ServicePage = ({
  title,
  description,
  canonicalPath,
  problem,
  solution,
  relatedLinks,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  problem: string;
  solution: string;
  relatedLinks: { href: string; label: string }[];
}) => (
  <>
    <SeoHead title={`${title} | Locanova`} description={description} canonicalPath={canonicalPath} schema={[orgSchema, serviceSchema]} />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{title}</h1>
      <p className="text-white/70">{description}</p>
      <Section title="Problem">
        <p>{problem}</p>
      </Section>
      <Section title="Solution">
        <p>{solution}</p>
      </Section>
      <CTA />
      <Section title="Related Pages">
        <div className="grid sm:grid-cols-2 gap-3">
          {relatedLinks.map((l) => (
            <Link key={l.href} to={l.href} className="rounded-xl border border-white/10 bg-black/20 hover:border-blue-400/50 px-4 py-3 text-white/90">
              {l.label}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  </>
);

export const BlogIndexPage = () => (
  <>
    <SeoHead title="Locanova Blog | Admission & Property Lead Strategy" description="High-intent lead generation and conversion insights for institutes and real estate businesses." canonicalPath="/blog/" schema={[orgSchema, serviceSchema]} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-8">
      <header className="space-y-4">
        <p className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">
          Insights
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Locanova Blog
        </h1>
        <p className="text-white/70 max-w-3xl">
          Practical growth playbooks for coaching institutes, academies, beauty institutes, builders, developers, and brokers.
        </p>
      </header>

      <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-transparent p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-blue-200 mb-2">Featured</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {blogPosts[0]?.title ?? "Latest Growth Playbook"}
        </h2>
        <p className="text-white/75 mb-5 max-w-3xl">
          {blogPosts[0]?.description ?? "Read our latest strategy breakdown."}
        </p>
        <Link
          to={`/blog/${blogPosts[0]?.slug ?? ""}`}
          className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold hover:bg-white/90"
        >
          Read Article
          <ArrowRight size={16} />
        </Link>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 space-y-4">
          <h3 className="text-xl font-bold text-white">Institute Growth Articles</h3>
          <div className="space-y-3">
            {blogPosts
              .filter((post) => post.industry === "institute")
              .map((post) => (
                <Link key={post.slug} className="block rounded-xl border border-white/10 p-4 text-white/90 hover:border-blue-400/50" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 space-y-4">
          <h3 className="text-xl font-bold text-white">Real Estate Growth Articles</h3>
          <div className="space-y-3">
            {blogPosts
              .filter((post) => post.industry === "real-estate")
              .map((post) => (
                <Link key={post.slug} className="block rounded-xl border border-white/10 p-4 text-white/90 hover:border-blue-400/50" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 space-y-4">
          <h3 className="text-xl font-bold text-white">Digital Marketing Guides</h3>
          <div className="space-y-3">
            {blogPosts
              .filter((post) => post.industry === "digital-marketing")
              .map((post) => (
                <Link key={post.slug} className="block rounded-xl border border-white/10 p-4 text-white/90 hover:border-blue-400/50" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white mb-3">Need a system, not just content?</h3>
        <p className="text-white/70 mb-5">
          Get a tailored growth system for your institute or real estate business.
        </p>
        <CTA />
      </section>
    </div>
  </>
);

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const nextLinks = post.industry === "real-estate"
    ? [
        { href: "/real-estate-marketing-system", label: "Real Estate Marketing System" },
        { href: "/real-estate-lead-generation", label: "Real Estate Lead Generation" },
      ]
    : post.industry === "digital-marketing"
    ? [
        { href: "/", label: "Back to Home" },
        { href: "/blog/", label: "Browse All Articles" },
      ]
    : [
        { href: "/institute-marketing-system", label: "Institute Marketing System" },
        { href: "/coaching-institute-lead-generation", label: "Coaching Institute Lead Generation" },
      ];

  return (
    <>
      <SeoHead
        title={`${post.title} | Locanova Blog`}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        schema={[orgSchema, serviceSchema]}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-6">
        <div className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-widest text-blue-200">
          {post.industry === "real-estate" ? "Real Estate" : post.industry === "institute" ? "Institute" : "Growth"}
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{post.title}</h1>
        <div
          className="space-y-3"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <CTA />
        <Section title="All Blog Articles">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="block rounded-xl border border-white/10 bg-black/20 hover:border-blue-400/50 px-4 py-3 text-white/90">
                  {p.title}
                </Link>
              ))}
          </div>
        </Section>
        <Section title="Next Steps">
          <div className="grid gap-3 sm:grid-cols-2">
            {nextLinks.map((l) => (
              <Link key={l.href} to={l.href} className="text-blue-300 hover:text-blue-200">
                {l.label}
              </Link>
            ))}
          </div>
        </Section>
      </article>
    </>
  );
};
