import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "AI Contract Negotiator",
    "one_liner": "An AI tool that negotiates contract terms based on secure blockchain templates.",
    "why_now": "As smart contracts become commonplace, the need for simplified yet secure negotiations is urgent.",
    "novel_mechanism": "Utilizes AI to analyze both sides' interests and generate counterproposals dynamically.",
    "ai_stack": [
      "Claude/GPT",
      "Agents",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Automated negotiation for freelancers versus platforms",
      "Small businesses negotiating with service providers"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Contract template generation",
        "Interest analysis",
        "Negotiation logging"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public contract templates",
        "synthetic negotiation datasets via LLM"
      ],
      "risk": [
        "potential misunderstanding of legal terms",
        "data privacy concerns"
      ],
      "mitigation": [
        "integrate human review at key stages",
        "anonymize sensitive data"
      ]
    },
    "go_to_market": {
      "hooks": [
        "before/after negotiation demo",
        "real-time negotiation showcase"
      ],
      "channels": [
        "LinkedIn",
        "ProductHunt",
        "Blockchain forums"
      ],
      "pricing": {
        "free": "Basic negotiation templates",
        "pro": "$10/month for advanced features",
        "business": "$50/month with custom templates"
      }
    },
    "moat": [
      "first-mover advantage in smart contract negotiation",
      "proprietary negotiation algorithms",
      "community-driven contract library"
    ],
    "scores": {
      "novelty": 7,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 28,
    "reasoning": "This idea shifts the role of the auditor to a negotiator, providing a unique combined solution rather than just an audit."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}