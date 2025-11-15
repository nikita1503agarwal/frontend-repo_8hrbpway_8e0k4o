import { Check, MessageSquare, Phone } from 'lucide-react'

const tiers = [
  {
    name: 'Core',
    price: 15,
    unit: 'per user / month',
    description: 'Modern ERP for growing teams',
    features: [
      'Finance, Inventory, CRM, Projects',
      'Workflow automation',
      'Reporting & dashboards',
      'SSO, RBAC, Audit trails'
    ],
    cta: 'Start free trial',
    popular: false
  },
  {
    name: 'Core + AI Chat',
    price: 25,
    unit: 'per user / month',
    description: 'Everything in Core plus AI copilot',
    features: [
      'Natural language commands',
      'Predictive insights',
      'Automated reconciliations',
      'Advanced anomaly detection'
    ],
    cta: 'Start free trial',
    popular: true
  },
]

export default function Pricing({ onContact }) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Add and remove seats any time. Volume pricing available.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl p-6 bg-white ring-1 ring-gray-200 ${tier.popular ? 'shadow-md ring-blue-200' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-6 text-xs font-semibold bg-blue-600 text-white px-2 py-1 rounded-full">Most popular</div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              </div>
              <p className="mt-2 text-gray-600">{tier.description}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                <span className="text-gray-500">{tier.unit}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <button onClick={onContact} className="flex-1 rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800">{tier.cta}</button>
                <button onClick={onContact} className="rounded-md ring-1 ring-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Contact sales
                </button>
              </div>
            </div>
          ))}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-blue-100">Custom pricing for advanced security, compliance, multi-entity, and white-glove onboarding.</p>
            <ul className="mt-4 space-y-2 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-white" /> Custom SLAs & uptime</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-white" /> SSO, SCIM, advanced RBAC</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-white" /> Dedicated success manager</li>
            </ul>
            <button onClick={onContact} className="mt-6 w-full rounded-md bg-white text-gray-900 px-4 py-2 font-semibold hover:bg-blue-50 inline-flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" /> Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
