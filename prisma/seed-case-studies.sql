-- Get industry IDs first (you'll need to run this and note the IDs)
-- SELECT id, name FROM "Industry";

-- Insert case studies
INSERT INTO "CaseStudy" (id, title, slug, client, description, challenge, solution, results, published, "createdAt", "updatedAt")
VALUES 
(
  'cs_aaa_001',
  'Enhancing Global Visibility with Organic SEO & AI Search Optimization',
  'american-accreditation-association',
  'American Accreditation Association',
  'How we leveraged organic traffic strategies and AI-driven search engine optimization to dramatically improve performance and digital presence.',
  'The American Accreditation Association struggled with low online visibility in a competitive global market. Traditional SEO methods were yielding stagnant results, and the brand was invisible to modern AI-driven search experiences, limiting their ability to attract new institutions for accreditation.',
  'We implemented a dual-pronged strategy focusing on technical SEO and AI Search Engine Optimization (GEO). We restructured their site architecture for better crawlability, created high-authority content clusters around accreditation standards, and optimized schema markup to ensure visibility in AI-generated answers (like ChatGPT and Google SGE).',
  'The intervention resulted in a 350% surge in organic traffic within 6 months. The association now dominates the top 3 search results for their core keywords and appears frequently in AI-generated recommendations, significantly enhancing their brand authority and applicant pool.',
  true,
  NOW(),
  NOW()
),
(
  'cs_wse_002',
  'Achieving Over 2M SAR ROI with Performance Marketing & HubSpot Automation',
  'wall-street-english',
  'Wall Street English',
  'A comprehensive performance marketing strategy utilizing targeted ads and HubSpot integration to drive massive ROI in 2025.',
  'Wall Street English faced high lead acquisition costs and a leaky sales funnel. While they had traffic, the conversion rate was low, and manual follow-ups were inefficient, leading to missed opportunities and suboptimal return on ad spend.',
  'We deployed a full-funnel performance marketing strategy. By integrating HubSpot CRM, we automated lead nurturing sequences and lead scoring. Simultaneously, we launched hyper-targeted ad campaigns on Meta and Google Ads, synchronized with HubSpot data to optimize for high-value conversions rather than just clicks.',
  'This integrated approach generated over 2 million SAR in ROI within a single year (2025). The automated workflows reduced lead response time to under 5 minutes, significantly boosting conversion rates while lowering the cost per acquisition by 45%.',
  true,
  NOW(),
  NOW()
),
(
  'cs_toh_003',
  'Revitalizing B2B Strategy for Marine Engineering in Saudi Arabia',
  'tohatsu-saudi-arabia',
  'Tohatsu',
  'Strategic B2B positioning and digital transformation to expand market share in the Saudi Arabian marine sector.',
  'Tohatsu, a leader in marine outboards, had a limited B2B footprint in the rapidly growing Saudi Arabian market. Their digital presence did not reflect their engineering excellence, and they were missing out on key government and commercial tenders.',
  'We crafted a tailored B2B digital strategy focusing on LinkedIn outreach and account-based marketing (ABM). We revamped their local digital assets to highlight technical specifications and reliability—key factors for Saudi decision-makers. We also implemented a targeted content strategy addressing the specific needs of the Kingdom''s marine infrastructure projects.',
  'Tohatsu saw a 3x increase in qualified B2B inquiries from major commercial partners in Saudi Arabia. The brand successfully penetrated new regional markets, expanding its reach by 60% and solidifying its position as a preferred supplier for marine engineering solutions.',
  true,
  NOW(),
  NOW()
),
(
  'cs_gov_004',
  'Digital Transformation & Performance Enhancement across Qatar and Turkey',
  'governvalu',
  'GovernValu Consultation',
  'Scaling a consultation firm''s digital footprint and lead generation capabilities in cross-border markets.',
  'GovernValu needed to establish a strong digital presence in two distinct markets: Qatar and Turkey. Cultural and linguistic differences, combined with a lack of a unified digital strategy, resulted in fragmented brand messaging and poor lead generation.',
  'We developed a localized performance strategy for each region. Customized landing pages were created for Qatar (focusing on corporate governance) and Turkey (focusing on valuation services). We utilized geo-targeted PPC campaigns and retargeting workflows to nurture prospects effectively across borders.',
  'The unified yet localized approach led to a 200% increase in valid leads across both regions. Brand engagement metrics soared by 40%, and GovernValu successfully established itself as a thought leader in both the Qatari and Turkish consultation markets.',
  true,
  NOW(),
  NOW()
),
(
  'cs_nrd_005',
  'Automating Patient Acquisition & Lead Management in Kuwait',
  'new-rayan-dental-kuwait',
  'New Rayan Dental Clinic',
  'Implementing a system automation machine to streamline lead generation and appointment bookings.',
  'New Rayan Dental Clinic in Kuwait was overwhelmed with manual inquiries but suffered from a high ''no-show'' rate and slow response times. Potential patients were being lost to competitors due to administrative bottlenecks.',
  'We built a ''System Automation Machine'' marketing funnel. This included an automated booking system integrated with WhatsApp and email reminders. We set up lead capture forms that instantly synced with the clinic''s reception dashboard, triggering immediate automated follow-up sequences.',
  'The automation system revolutionized their intake process, achieving an 85% appointment booking rate from leads. The clinic now operates a 24/7 lead processing machine, ensuring no patient inquiry is left unanswered, significantly increasing their active patient base.',
  true,
  NOW(),
  NOW()
),
(
  'cs_myd_006',
  'Maximizing ROAS & Revenue with WhatsApp Agents & Google Ads',
  'mydoctor',
  'Mydoctor',
  'Driven clinic revenue growth through high-converting Google Ads and instant WhatsApp conversational marketing.',
  'Mydoctor was investing heavily in ads with diminishing returns. The gap between ad click and appointment booking was too wide, and patients often dropped off due to friction in the booking process.',
  'We shifted the strategy to focus on ''Conversational Conversions''. We optimized Google Ads to drive traffic directly to a WhatsApp Business API driven agent. This AI-assisted agent answered common questions, qualified patients, and booked appointments instantly in the chat.',
  'This friction-free approach skyrocketed the clinic''s ROAS to 4.5x. The instant engagement provided by the WhatsApp agent enhanced patient trust and convenience, leading to a direct 55% increase in weekly revenue from executed appointments.',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO NOTHING;

-- Insert stats for each case study
INSERT INTO "CaseStudyStat" (id, value, label, "order", "caseStudyId")
VALUES
('stat_aaa_1', '350%', 'Increase in Organic Traffic', 0, 'cs_aaa_001'),
('stat_aaa_2', 'Top 3', 'Ranking for Key Industry Terms', 1, 'cs_aaa_001'),
('stat_wse_1', '> 2M SAR', 'ROI Achieved in 2025', 0, 'cs_wse_002'),
('stat_wse_2', '45%', 'Reduction in Cost Per Lead', 1, 'cs_wse_002'),
('stat_toh_1', '3x', 'Growth in B2B Inquiries', 0, 'cs_toh_003'),
('stat_toh_2', '60%', 'Market Reach Expansion', 1, 'cs_toh_003'),
('stat_gov_1', '200%', 'Increase in Valid Leads', 0, 'cs_gov_004'),
('stat_gov_2', '40%', 'Uplift in Cross-Border Engagement', 1, 'cs_gov_004'),
('stat_nrd_1', '85%', 'Appointment Booking Rate', 0, 'cs_nrd_005'),
('stat_nrd_2', '24/7', 'Automated Lead Processing', 1, 'cs_nrd_005'),
('stat_myd_1', '4.5x', 'Return on Ad Spend (ROAS)', 0, 'cs_myd_006'),
('stat_myd_2', '55%', 'Increase in Weekly Revenue', 1, 'cs_myd_006')
ON CONFLICT (id) DO NOTHING;
