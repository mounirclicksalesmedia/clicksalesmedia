
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding blogs...')

  // 1. Ensure Categories Exist
  const categories = [
    { name: 'Web Development', slug: 'web-development', description: 'Everything about web dev, HTML, CSS, and modern frameworks.' },
    { name: 'B2B Marketing', slug: 'b2b-marketing', description: 'Strategies for Business to Business growth.' },
    { name: 'Performance Marketing', slug: 'performance-marketing', description: 'Data-driven marketing strategies and ROI.' },
    { name: 'SEO & GEO', slug: 'seo-geo', description: 'Search Engine Optimization and Generative Engine Optimization.' },
    { name: 'Social Media', slug: 'social-media', description: 'Social media strategies, ads, and growth.' },
  ]

  for (const cat of categories) {
    await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    })
  }

  // 2. Define Articles
  const articles = [
    {
      title: 'The Ultimate Guide to HTML in Web Development for 2026',
      slug: 'html-in-web-development-guide',
      category: 'Web Development',
      excerpt: 'Master the foundations of the web. Learn why HTML is still critical for SEO and modern web application development.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      readTime: '12 min',
      content: `
        <h2>Why HTML is Still the Backbone of the Web</h2>
        <p>In the world of <strong>web application development</strong> and <strong>custom website development</strong>, frameworks come and go, but HTML remains the constant. For <strong>web development agencies</strong> and <strong>front end web developers</strong>, understanding semantic HTML is more important than ever for accessibility and SEO.</p>
        
        <h3>HTML5 and Modern Web Standards</h3>
        <p>Modern <strong>html web development</strong> isn't just about divs and spans. It's about structure. Using proper generic tags vs semantic tags can make or break your site's performance on Google.</p>
        
        <img src="https://placehold.co/800x400/1a1a1a/AD8253?text=HTML+Web+Development" alt="HTML Web Development Structure" class="w-full rounded-xl my-8" />
        
        <h3>The Role of HTML in SEO</h3>
        <p>Search engines and AI models (GEO) rely on clean HTML to understand your content. <strong>Codecademy web development</strong> courses often emphasize this foundation. If you are looking for a <strong>web development company</strong>, ensure they prioritize semantic markup.</p>
        
        <ul>
          <li>Use header tags (h1-h6) hierarchically.</li>
          <li>Use alt attributes for images.</li>
          <li>Leverage schema markup for rich snippets.</li>
        </ul>
      `
    },
    {
      title: 'Facebook Ads Management: Maximizing ROI for Small Business',
      slug: 'facebook-ads-management-small-business',
      category: 'Social Media',
      excerpt: 'Stop wasting budget. Learn how professional Facebook Ads Management can transform your small business marketing.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      readTime: '10 min',
      content: `
        <h2>Why You Need a Facebook Advertising Manager</h2>
        <p>For many <strong>small businesses</strong>, <strong>facebook advertising for small business</strong> is a goldmine. However, the complexity of <strong>Meta Ads Manager</strong> can be overwhelming. This is where a dedicated <strong>ads manager for facebook</strong> comes in.</p>
        
        <h3>Targeting the Right Audience</h3>
        <p>A professional <strong>meta ad manager</strong> knows how to utilize lookalike audiences and custom retargeting lists to lower your CPA. It's not just about boosting posts; it's about full-funnel strategy.</p>
        
        <img src="https://placehold.co/800x400/1a1a1a/AD8253?text=Facebook+Ads+Manager" alt="Facebook Ads Manager Dashboard" class="w-full rounded-xl my-8" />
        
        <h3>Analyzing ROI</h3>
        <p>With <strong>social media advertising platforms</strong> evolving, tracking <strong>social media ads cost</strong> vs. revenue is crucial. <strong>Facebook media marketing</strong> strategies must be data-driven.</p>
      `
    },
    {
      title: 'Performance Marketing Agencies: The Key to Scalable Growth',
      slug: 'performance-marketing-agencies-growth',
      category: 'Performance Marketing',
      excerpt: 'What is performance marketing? Discover how paying for results can change your B2B marketing strategy.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      readTime: '15 min',
      content: `
        <h2>Data-Driven Marketing Approach</h2>
        <p>A <strong>performance marketing agency</strong> focuses on one thing: results. Whether it's <strong>paid performance marketing</strong> or <strong>affiliate marketing</strong>, the goal is a measurable <strong>return on marketing investment</strong>.</p>
        
        <h3>Choosing the Best Performance Marketing Agencies</h3>
        <p>Look for agencies that specialize in your niche. <strong>B2B performance marketing</strong> is different from B2C. You need a partner who understands lead quality, not just lead volume.</p>
        
        <h3>ROI Marketing Services</h3>
        <p><strong>Marketing roi analysis</strong> is central to this approach. Every dollar spent on <strong>google ads management</strong> or <strong>social media advertising</strong> must account for revenue generated.</p>
        
        <img src="https://placehold.co/800x400/1a1a1a/AD8253?text=Performance+Marketing" alt="Performance Marketing Graph" class="w-full rounded-xl my-8" />
      `
    },
    {
      title: 'B2B Lead Generation Strategies for 2026',
      slug: 'b2b-lead-generation-strategies',
      category: 'B2B Marketing',
      excerpt: 'From LinkedIn to Cold Email, here are the top strategies for generating high-quality B2B leads this year.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      readTime: '14 min',
      content: `
        <h2>Account Based Marketing for B2B</h2>
        <p><strong>Account based marketing for b2b</strong> (ABM) is the sniper approach to lead gen. Instead of casting a wide net, you target specific high-value accounts with personalized <strong>b2b content marketing</strong>.</p>
        
        <h3>LinkedIn B2B Advertising</h3>
        <p><strong>LinkedIn ads management</strong> is expensive but effective. It allows you to target decision-makers directly by job title and industry. Combine this with <strong>b2b search engine optimization</strong> to capture intent.</p>
        
        <img src="https://placehold.co/800x400/1a1a1a/AD8253?text=B2B+Lead+Generation" alt="B2B Lead Gen Funnel" class="w-full rounded-xl my-8" />
        
        <h3>Automated Lead Gen</h3>
        <p>Using <strong>marketing automation roi</strong> tools can streamline your <strong>b2b lead generation</strong> process, ensuring no lead is left behind.</p>
      `
    },
    {
      title: 'SEO and Web Design: A Match Made in Heaven',
      slug: 'seo-and-web-design-integration',
      category: 'SEO & GEO',
      excerpt: 'Why your beautiful website might be invisible to Google. The importance of integrating SEO into your web design process.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1',
      readTime: '11 min',
      content: `
        <h2>SEO Web Design Services</h2>
        <p>Many <strong>web design companies</strong> ignore SEO. A true <strong>seo and web design company</strong> builds sites that look great AND rank high. <strong>Web design seo services</strong> should be integrated from the wireframe stage.</p>
        
        <h3>Mobile Responsiveness & Core Web Vitals</h3>
        <p><strong>Responsive web design company</strong> standards are now a ranking factor. Your <strong>website design and seo company</strong> must prioritize site speed (CWV) and mobile usability.</p>
        
        <h3>AI Search Engine Optimization</h3>
        <p>With the rise of <strong>seo and ai search engine optimization</strong> (GEO), structure matters even more. <strong>Australian web design companies</strong> and global firms are shifting focus to answer-based content optimization.</p>
      `
    },
    {
      title: 'Custom Web Development vs. Templates: What to Choose?',
      slug: 'custom-web-development-vs-templates',
      category: 'Web Development',
      excerpt: 'Should you build from scratch or use a template? A deep dive into custom web development benefits.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      readTime: '13 min',
      content: `
        <h2>The Case for Custom Website Development</h2>
        <p><strong>Custom website development</strong> offers flexibility that templates cannot match. For <strong>web application development</strong> requiring unique functionality, a <strong>custom web developer</strong> is essential.</p>
        
        <h3>Agency for Website Development</h3>
        <p>When hiring a <strong>web development agency</strong>, ask about their stack. Do they do <strong>html and css web development</strong> from scratch, or just modify WordPress themes? <strong>Fullstack web development</strong> ensures your backend scales with your frontend.</p>
        
        <img src="https://placehold.co/800x400/1a1a1a/AD8253?text=Custom+Web+Development" alt="Code on Screen" class="w-full rounded-xl my-8" />
      `
    },
    {
      title: 'The Rise of GEO: Generative Engine Optimization',
      slug: 'generative-engine-optimization-geo',
      category: 'SEO & GEO',
      excerpt: 'SEO is changing. Meet GEO. How to optimize your content for AI search engines like ChatGPT and Perplexity.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      readTime: '16 min',
      content: `
        <h2>SEO and AI Search Engine Optimization</h2>
        <p><strong>GEO</strong> is the new frontier. Unlike traditional SEO, which targets keywords like <strong>b2b search engine optimization</strong>, GEO targets AI comprehension. You want to be the cited source in a ChatGPT answer.</p>
        
        <h3>Strategies for GEO</h3>
        <p>Focus on authority and structured data. <strong>Seo web design services</strong> now include schema markup that helps LLMs parse your content. Be direct, be authoritative.</p>
      `
    },
    {
      title: 'PPC Management: Google Ads vs. Social Ads',
      slug: 'ppc-management-google-vs-social',
      category: 'Performance Marketing',
      excerpt: 'Where should you spend your ad budget? Comparing Google Ads intent with Social Ads disruption.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
      readTime: '12 min',
      content: `
        <h2>PPC Management Companies Explained</h2>
        <p>Top <strong>ppc management companies</strong> know that <strong>google ads management</strong> captures intent, while <strong>facebook advertising manager</strong> generates demand. A balanced strategy uses both.</p>
        
        <h3>Cost Analysis</h3>
        <p><strong>Social media ads cost</strong> effectively lower CPMs, while Google Ads has higher CPCs but higher conversion intent. Your <strong>ppc ads agency</strong> should balance these for optimal <strong>advertising return on investment</strong>.</p>
      `
    },
    {
      title: 'Maximizing B2B Marketing ROI',
      slug: 'maximizing-b2b-marketing-roi',
      category: 'B2B Marketing',
      excerpt: 'How to measure and improve your Return on Investment in B2B marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      readTime: '10 min',
      content: `
        <h2>Measuring ROI in Marketing</h2>
        <p><strong>Marketing roi analysis</strong> is tough in B2B due to long sales cycles. metrics like <strong>content marketing roi</strong> and <strong>conversion rate from email marketing</strong> are leading indicators.</p>
        
        <h3>Data Driven Marketing Solutions</h3>
        <p>Use a <strong>data driven marketing platform</strong> to track touchpoints. <strong>B2B marketing solutions</strong> must integrate CRM data with ad spend data to show true value.</p>
      `
    },
    {
      title: 'Web Application Development Trends in 2026',
      slug: 'web-application-development-trends',
      category: 'Web Development',
      excerpt: 'From PWA to WebAssembly, discover the technologies shaping the future of web apps.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      readTime: '14 min',
      content: `
        <h2>Modern Web App Development</h2>
        <p><strong>Web application development</strong> is moving towards edge computing and AI integration. <strong>React</strong>, <strong>Next.js</strong>, and <strong>Python web development</strong> are leading the charge.</p>
        
        <h3>Choosing a Web Dev Agency</h3>
        <p>Find a <strong>web development agency</strong> that stays ahead of the curve. <strong>Web dev portfolios</strong> should demonstrate speed, security, and scalability.</p>
      `
    },
    {
      title: 'Social Media Marketing for B2B: Does it Work?',
      slug: 'social-media-marketing-b2b',
      category: 'Social Media',
      excerpt: 'Debunking the myth that social media is only for B2C. How to use LinkedIn and Twitter for B2B growth.',
      image: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e',
      readTime: '11 min',
      content: `
        <h2>Social Media Marketing Agency Services</h2>
        <p>A <strong>social media marketing agency</strong> specializing in B2B knows that LinkedIn is king. But <strong>twitter ads manager</strong> and even <strong>reddit ads manager</strong> offer untapped potential for niche technical audiences.</p>
        
        <h3>B2B Social Strategy</h3>
        <p><strong>Social media b2b strategy</strong> focuses on thought leadership and <strong>account based marketing for b2b</strong>. It's about building trust, not just viral memes.</p>
      `
    },
    {
      title: 'E-commerce Conversion Rate Optimization (CRO)',
      slug: 'ecommerce-conversion-rate-optimization',
      category: 'Performance Marketing',
      excerpt: 'Traffic is vanity, conversion is sanity. Strategies to turn visitors into buyers.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      readTime: '15 min',
      content: `
        <h2>Web Conversion Optimisation</h2>
        <p><strong>Web conversion optimisation</strong> is the lever that multiplies your ad spend. An <strong>ecommerce conversion rate optimisation agency</strong> will A/B test your checkout, product pages, and messaging.</p>
        
        <h3>Landing Page Optimizer</h3>
        <p>Using a <strong>landing page optimizer</strong> tool or service ensures your paid traffic lands on a page designed to convert. <strong>Conversion rate optimization marketing</strong> pays for itself.</p>
      `
    }
  ]

  for (const article of articles) {
    // Determine category ID based on category name
    const cat = await prisma.blogCategory.findFirst({ where: { name: article.category } })
    if (cat) {
      await prisma.blogArticle.upsert({
        where: { slug: article.slug },
        update: {
          content: article.content, // Update content in case we change it in script
          title: article.title,
          image: article.image
        },
        create: {
          title: article.title,
          slug: article.slug,
          content: article.content,
          excerpt: article.excerpt,
          image: article.image,
          readTime: article.readTime,
          categoryId: cat.id,
          published: true,
          publishedAt: new Date(),
        },
      })
      console.log(`Upserted article: ${article.title}`)
    } else {
      console.warn(`Category not found for article: ${article.title}`)
    }
  }

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
