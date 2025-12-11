import { environment } from '../../../environments/environments';

const baseURL = environment.baseURL;
const blogURL = (slug: string) => `${baseURL}/blog/${slug}`;

export const BLOG_POSTS = [
  {
    slug: 'curious-genai-findings',

    // =======================================
    // SEO / Meta Layer
    // =======================================
    seo: {
      metaTitle: 'Curious Findings in Recent GenAI Research | Yantra World',
      description:
        'Unexpected GenAI findings on collaboration, ethics, and sustainability with roadmaps for product leaders.',
      canonicalUrl: blogURL('curious-genai-findings'),
      language: 'en',
      robots: 'index,follow',

      openGraph: {
        title: 'Curious Findings in Recent GenAI Research',
        description:
          'Counter-intuitive GenAI discoveries on creativity, trust, and sustainability—curated for digital leaders.',
        image: `${baseURL}/assets/blog/cards/curious-genai-findings.png`,
        type: 'article'
      },

      twitter: {
        card: 'summary_large_image',
        title: 'Curious Findings in Recent GenAI Research',
        description:
          'Fresh GenAI intelligence for CTOs, Chiefs of Staff, and AI product strategists.',
        image: `${baseURL}/assets/blog/cards/curious-genai-findings.png`
      }
    },

    // =======================================
    // Core Page Metadata
    // =======================================
    pageMeta: {
      title: 'Curious Findings in Recent GenAI Research',
      summary:
        'A curated brief of the most surprising, high-signal GenAI findings across creativity, trust, and sustainability—plus how to translate them into product roadmaps.',
      datePublished: '2025-09-10T00:00:00+00:00',
      dateUpdated: '2025-10-02T00:00:00+00:00',
      difficultyLevel: 'Intermediate',
      audience: 'AI product leads, CTO chiefs of staff, policy strategists',
      highlights: [
        'Human + AI squads win on quality but can collapse idea diversity without persona prompts.',
        'GenAI adoption is normalizing in academia with more strategic, task-scoped usage.',
        'Ethical guardrails and sustainability telemetry are emerging buying criteria.'
      ],
      author: {
        name: 'Mira Devgan',
        role: 'Principal AI Research Strategist',
        profileUrl: `${baseURL}/about`,
        credentials: ['MSc Artificial Intelligence', 'UNESCO AI Ethics panel advisor'],
        avatarInitials: 'MD',
        avatarColor: '#5F35FF',
        social: {
          twitter: 'https://twitter.com/mira_devgan',
          linkedin: 'https://linkedin.com/in/miradevgan'
        }
      },
      tags: [
        { label: 'GenAI', slug: 'genai', priority: 10 },
        { label: 'AI Research', slug: 'ai-research', priority: 9 },
        { label: 'Ethics', slug: 'ai-ethics', priority: 7 },
        { label: 'Sustainability', slug: 'ai-sustainability', priority: 6 },
        { label: 'Creativity', slug: 'ai-creativity', priority: 5 }
      ],
      categories: ['Research Brief', 'AI Strategy'],
      readingTimeMinutes: 8
    },

    // =======================================
    // Card Meta
    // =======================================
    cardMeta: {
      eyebrow: 'GenAI Signals',
      variant: 'featured',
      emphasis: 'gradient',
      badges: ["Editor's pick", 'Top 1% freshness'],
      showAuthorAvatar: true,
      showReadTime: true,
      showUpdatedBadge: true,
      ctaPrimaryLabel: 'Read findings',
      ctaPrimaryUrl: blogURL('curious-genai-findings'),
      ctaSecondaryLabel: 'Share internally',
      ctaSecondaryUrl: `${blogURL('curious-genai-findings')}?action=share`
    },

    // =======================================
    // Taxonomy
    // =======================================
    taxonomy: {
      domain: 'Artificial Intelligence',
      subdomain: 'Generative AI research',
      journeyStage: 'Strategy & experimentation',
      businessFunctions: ['Product', 'Innovation', 'Research'],
      industries: ['Technology', 'Higher Education', 'Public Policy'],
      keyConcepts: ['multi-persona prompting', 'AI disclosure', 'sustainable AI']
    },

    // =======================================
    // GEO / i18n
    // =======================================
    i18n: {
      default: 'en',
      alternates: {
        es: '/es/blog/curious-genai-findings',
        fr: '/fr/blog/curious-genai-findings'
      }
    },

    // =======================================
    // Internal Linking & Authority Building
    // =======================================
    internalLinks: {
      pillar: 'genai-research',
      clusterPosition: 1,
      seeAlsoTags: ['ai-ethics', 'ai-sustainability'],
      recommended: [
        'angular-seo-guide',
        'ai-ethics-frameworks',
        'future-of-human-ai-collaboration'
      ],
      recommendedDetailed: [
        {
          slug: 'future-of-human-ai-collaboration',
          label: 'Future of Human-AI Collaboration',
          relation: 'deep-dive',
          reasonToShow: 'Explores operating models for hybrid ideation squads.',
          primaryTag: 'genai'
        },
        {
          slug: 'ai-ethics-frameworks',
          label: 'AI Ethics Frameworks for 2025',
          relation: 'see-also',
          reasonToShow: 'Extends the ethics section with ready-made policy controls.',
          primaryTag: 'ai-ethics'
        }
      ]
    },

    // =======================================
    // PSEO & Keyword Intelligence
    // =======================================
    pseo: {
      primaryKeyword: 'GenAI research findings',
      secondaryKeywords: [
        'generative AI research insights',
        'human AI collaboration',
        'AI creativity data',
        'environmental impact of AI'
      ],
      searchIntent: 'informational',
      contentCluster: 'GenAI Research'
    },

    // =======================================
    // FAQ Data
    // =======================================
    faq: [
      {
        question: 'What are the most surprising findings in recent GenAI research?',
        answer:
          'Human + GenAI teamwork now routinely outperforms solo work, but idea diversity collapses unless multiple personas are prompted.'
      },
      {
        question: 'How is GenAI changing education?',
        answer:
          'Usage is normalizing with more strategic, task-scoped adoption rather than blanket daily use.'
      },
      {
        question: 'Is Generative AI bad for the environment?',
        answer:
          'Large models increase electricity and water consumption, motivating research into energy-efficient design and transparent reporting.'
      }
    ],

    // =======================================
    // Structured Data
    // =======================================
    schema: {
      article: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Curious Findings in Recent GenAI Research',
        description:
          'Key research findings on the impact of generative AI on creativity, trust, and sustainability plus plays for product teams.',
        image: `${baseURL}/assets/blog/cards/curious-genai-findings.png`,
        datePublished: '2025-09-10',
        dateModified: '2025-10-02',
        author: {
          '@type': 'Person',
          name: 'Mira Devgan',
          url: `${baseURL}/about`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Yantra World',
          logo: {
            '@type': 'ImageObject',
            url: `${baseURL}/assets/images/logo.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': blogURL('curious-genai-findings')
        },
        wordCount: 1780
      },

      breadcrumbs: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseURL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${baseURL}/blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Curious Findings in Recent GenAI Research',
            item: blogURL('curious-genai-findings')
          }
        ]
      },

      faq: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the most surprising findings in recent GenAI research?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Human + GenAI collaboration beats solo performance, but diversity drops unless multi-persona prompting is applied.'
            }
          },
          {
            '@type': 'Question',
            name: 'How should teams respond to GenAI ethics concerns?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pair outcome metrics with disclosure checklists and instrument hallucination, bias, and sustainability telemetry.'
            }
          }
        ]
      }
    },

    // =======================================
    // Performance Signals
    // =======================================
    performance: {
      preloadImage: false,
      lazyLoadImages: true,
      criticalCSS: true
    },

    // =======================================
    // Editorial Controls
    // =======================================
    audit: {
      reviewIntervalDays: 210,
      lastReviewed: '2025-10-02',
      owner: 'editor@yantraworld.in'
    },

    // =======================================
    // Content Intelligence
    // =======================================
    contentScore: {
      quality: 9.2,
      freshness: 9.4,
      authority: 8.3,
      internalLinkDepth: 7.1
    },

    // =======================================
    // Syndication & Discovery
    // =======================================
    feeds: {
      includeInRSS: true,
      priority: 0.9,
      changeFreq: 'monthly'
    },

    // =======================================
    // AI Disclosure & Governance
    // =======================================
    ai: {
      generated: false,
      reviewedByHuman: true,
      sourceType: ['research papers', 'surveys'],
      revision: 'v1.1'
    }
  }
];
