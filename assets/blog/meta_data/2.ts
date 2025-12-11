import { environment } from '../../../environments/environments';

const baseURL = environment.baseURL;
const blogURL = (slug: string) => `${baseURL}/blog/${slug}`;

export const BLOG_POSTS_EXAMPLES = [
  {
    slug: 'stanford-ai-product-playbook',
    seo: {
      metaTitle: 'Stanford-Inspired AI Product Playbook | Yantra World',
      description:
        'A Stanford-style blueprint for building AI-native products with responsible research ops, experience guardrails, and growth telemetry.',
      canonicalUrl: blogURL('stanford-ai-product-playbook'),
      language: 'en',
      robots: 'index,follow',
      openGraph: {
        title: 'Stanford AI Product Playbook',
        description:
          'Lessons from Stanford AI labs on experimentation rituals, UX guidelines, and success metrics for AI-native teams.',
        image: `${baseURL}/assets/blog/cards/stanford-ai-product-playbook.png`,
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Stanford AI Product Playbook',
        description:
          'Borrow research rhythms and trust guardrails from Stanford to level up AI product delivery.',
        image: `${baseURL}/assets/blog/cards/stanford-ai-product-playbook.png`
      }
    },
    pageMeta: {
      title: 'Stanford AI Product Playbook',
      summary:
        'Stanford HAI-inspired patterns for experimentation cadence, ethical reviews, and telemetry loops when scaling GenAI products.',
      datePublished: '2025-11-01T00:00:00+00:00',
      dateUpdated: '2025-11-15T00:00:00+00:00',
      difficultyLevel: 'Advanced',
      audience: 'AI product leads, research engineers, PMMs',
      highlights: [
        'Adopt triad reviews (PM + Research + Policy) before every frontier launch.',
        'Use ethics story cards to document mitigations next to UX flows.',
        'Instrument outcome telemetry, not just click metrics, to mirror Stanford lab studies.'
      ],
      author: {
        name: 'Rina Solanki',
        role: 'Head of Applied AI Programs',
        profileUrl: `${baseURL}/about`,
        credentials: ['Ex-Stanford Visiting Scholar', 'Former AI PM at scale-up'],
        avatarInitials: 'RS',
        avatarColor: '#F97316',
        social: {
          twitter: 'https://twitter.com/rina_solanki',
          linkedin: 'https://linkedin.com/in/rinasolanki'
        }
      },
      tags: [
        { label: 'GenAI', slug: 'genai', priority: 9 },
        { label: 'AI Research', slug: 'ai-research', priority: 8 },
        { label: 'Ethics', slug: 'ai-ethics', priority: 7 }
      ],
      categories: ['Playbook', 'AI Strategy'],
      readingTimeMinutes: 10
    },
    cardMeta: {
      eyebrow: 'AI Playbook',
      variant: 'featured',
      emphasis: 'gradient',
      badges: ['Stanford-inspired', 'Template pack'],
      showAuthorAvatar: true,
      showReadTime: true,
      showUpdatedBadge: true,
      ctaPrimaryLabel: 'Apply the playbook',
      ctaPrimaryUrl: blogURL('stanford-ai-product-playbook'),
      ctaSecondaryLabel: 'Download checklist',
      ctaSecondaryUrl: `${blogURL('stanford-ai-product-playbook')}?download=1`
    },
    taxonomy: {
      domain: 'Artificial Intelligence',
      subdomain: 'AI product leadership',
      journeyStage: 'Scale-up',
      businessFunctions: ['Product', 'Engineering', 'Policy'],
      industries: ['Technology', 'Financial Services', 'Public Sector'],
      keyConcepts: ['triad reviews', 'ethics story cards', 'experience telemetry']
    },
    i18n: {
      default: 'en'
    },
    internalLinks: {
      pillar: 'ai-product-leadership',
      clusterPosition: 2,
      seeAlsoTags: ['ai-ethics', 'ai-governance'],
      recommended: ['curious-genai-findings'],
      recommendedDetailed: [
        {
          slug: 'curious-genai-findings',
          label: 'Curious Findings in Recent GenAI Research',
          relation: 'see-also',
          reasonToShow: 'Pairs research evidence with product governance moves.',
          primaryTag: 'genai'
        }
      ]
    },
    pseo: {
      primaryKeyword: 'AI product playbook',
      secondaryKeywords: [
        'Stanford AI playbook',
        'AI governance checklist',
        'AI experimentation rituals'
      ],
      searchIntent: 'informational',
      contentCluster: 'AI Product Leadership'
    },
    faq: [
      {
        question: 'How do Stanford labs review AI launches?',
        answer:
          'They convene triad reviews with a PM, research scientist, and policy lead before every major release.'
      },
      {
        question: 'What is an ethics story card?',
        answer:
          'It is a one-page artifact that ties a user scenario to potential harms, mitigations, and telemetry, shared alongside UX mocks.'
      }
    ],
    schema: {
      article: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Stanford AI Product Playbook',
        description:
          'A Stanford-inspired guide for AI product leaders on experimentation cadences, ethical guardrails, and telemetry.',
        image: `${baseURL}/assets/blog/cards/stanford-ai-product-playbook.png`,
        datePublished: '2025-11-01',
        dateModified: '2025-11-15',
        author: {
          '@type': 'Person',
          name: 'Rina Solanki'
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
          '@id': blogURL('stanford-ai-product-playbook')
        }
      }
    },
    performance: {
      preloadImage: true,
      lazyLoadImages: true,
      criticalCSS: true
    },
    audit: {
      reviewIntervalDays: 120,
      lastReviewed: '2025-11-15',
      owner: 'editor@yantraworld.in'
    },
    contentScore: {
      quality: 9.4,
      freshness: 9.1,
      authority: 8.7,
      internalLinkDepth: 7.8
    },
    feeds: {
      includeInRSS: true,
      priority: 0.92,
      changeFreq: 'monthly'
    },
    ai: {
      generated: false,
      reviewedByHuman: true,
      sourceType: ['Stanford HAI briefs', 'Yantra workshops'],
      revision: 'v1.0'
    }
  },
  {
    slug: 'sustainable-ai-field-notes',
    seo: {
      metaTitle: 'Sustainable AI Field Notes from Stanford Partnerships | Yantra World',
      description:
        'Insights from Stanford sustainability labs on building lower-carbon AI stacks, procurement scorecards, and reporting rituals.',
      canonicalUrl: blogURL('sustainable-ai-field-notes'),
      language: 'en',
      robots: 'index,follow',
      openGraph: {
        title: 'Sustainable AI Field Notes',
        description:
          'Borrow procurement scorecards, telemetry recipes, and campus lab experiments to cut AI workloads’ footprint.',
        image: `${baseURL}/assets/blog/cards/sustainable-ai-field-notes.png`,
        type: 'article'
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Sustainable AI Field Notes',
        description:
          'Campus-proven practices to reduce AI carbon, water, and hardware waste for enterprise stacks.',
        image: `${baseURL}/assets/blog/cards/sustainable-ai-field-notes.png`
      }
    },
    pageMeta: {
      title: 'Sustainable AI Field Notes',
      summary:
        'Turn Stanford sustainability lab experiments into procurement scorecards, observability views, and executive narratives.',
      datePublished: '2025-11-05T00:00:00+00:00',
      dateUpdated: '2025-11-16T00:00:00+00:00',
      difficultyLevel: 'Intermediate',
      audience: 'Sustainability leads, CTO staff, AI infra teams',
      highlights: [
        'Map AI workloads to energy + water intensity with observability icons.',
        'Use supplier nudges to bundle renewable credits with GPU leases.',
        'Share an impact narrative board to unlock executive sponsorship.'
      ],
      author: {
        name: 'Luis Andrade',
        role: 'Director of Responsible AI',
        profileUrl: `${baseURL}/about`,
        credentials: ['Stanford MS&E', 'Sustainability council advisor'],
        avatarInitials: 'LA',
        avatarColor: '#14B8A6',
        social: {
          twitter: 'https://twitter.com/luisandrade_ai',
          linkedin: 'https://linkedin.com/in/luisandrade'
        }
      },
      tags: [
        { label: 'Sustainability', slug: 'ai-sustainability', priority: 9 },
        { label: 'Ethics', slug: 'ai-ethics', priority: 8 },
        { label: 'GenAI', slug: 'genai', priority: 6 }
      ],
      categories: ['Research Brief', 'Sustainability'],
      readingTimeMinutes: 9
    },
    cardMeta: {
      eyebrow: 'Sustainability Notes',
      variant: 'standard',
      emphasis: 'gradient',
      badges: ['Stanford partnerships', 'Executive ready'],
      showAuthorAvatar: true,
      showReadTime: true,
      showUpdatedBadge: true,
      ctaPrimaryLabel: 'Apply the scorecards',
      ctaPrimaryUrl: blogURL('sustainable-ai-field-notes'),
      ctaSecondaryLabel: 'Share briefing',
      ctaSecondaryUrl: `${blogURL('sustainable-ai-field-notes')}?share=1`
    },
    taxonomy: {
      domain: 'Artificial Intelligence',
      subdomain: 'Responsible AI',
      journeyStage: 'Optimization',
      businessFunctions: ['Sustainability', 'Infrastructure', 'Finance'],
      industries: ['Cloud', 'Retail', 'Healthcare'],
      keyConcepts: ['carbon aware AI', 'renewable procurement', 'impact storytelling']
    },
    i18n: {
      default: 'en'
    },
    internalLinks: {
      pillar: 'responsible-ai',
      clusterPosition: 4,
      seeAlsoTags: ['ai-sustainability', 'ai-ethics'],
      recommended: ['curious-genai-findings', 'stanford-ai-product-playbook'],
      recommendedDetailed: [
        {
          slug: 'stanford-ai-product-playbook',
          label: 'Stanford AI Product Playbook',
          relation: 'deep-dive',
          reasonToShow: 'Connect sustainability telemetry to product rituals.',
          primaryTag: 'ai-research'
        },
        {
          slug: 'curious-genai-findings',
          label: 'Curious Findings in Recent GenAI Research',
          relation: 'see-also',
          reasonToShow: 'Add research evidence to sustainability narratives.',
          primaryTag: 'genai'
        }
      ]
    },
    pseo: {
      primaryKeyword: 'sustainable AI',
      secondaryKeywords: [
        'AI carbon reporting',
        'AI sustainability scorecard',
        'Stanford sustainable AI'
      ],
      searchIntent: 'informational',
      contentCluster: 'Responsible AI'
    },
    faq: [
      {
        question: 'How do you measure AI energy impact?',
        answer:
          'Instrument GPU hours, energy mix, and water usage inside your MLOps observability stack and surface them in executive dashboards.'
      },
      {
        question: 'How can procurement influence AI sustainability?',
        answer:
          'Attach renewable clauses, cooling disclosures, and recycling SLAs to every hardware or cloud contract to align incentives.'
      }
    ],
    schema: {
      article: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Sustainable AI Field Notes',
        description:
          'Field notes from Stanford partnerships on reducing AI carbon and water footprints.',
        image: `${baseURL}/assets/blog/cards/sustainable-ai-field-notes.png`,
        datePublished: '2025-11-05',
        dateModified: '2025-11-16',
        author: {
          '@type': 'Person',
          name: 'Luis Andrade'
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
          '@id': blogURL('sustainable-ai-field-notes')
        }
      }
    },
    performance: {
      preloadImage: false,
      lazyLoadImages: true,
      criticalCSS: true
    },
    audit: {
      reviewIntervalDays: 150,
      lastReviewed: '2025-11-16',
      owner: 'responsible-ai@yantraworld.in'
    },
    contentScore: {
      quality: 9.1,
      freshness: 9.5,
      authority: 8.1,
      internalLinkDepth: 7.4
    },
    feeds: {
      includeInRSS: true,
      priority: 0.88,
      changeFreq: 'monthly'
    },
    ai: {
      generated: false,
      reviewedByHuman: true,
      sourceType: ['Stanford sustainability labs', 'Field interviews'],
      revision: 'v1.0'
    }
  }
];
