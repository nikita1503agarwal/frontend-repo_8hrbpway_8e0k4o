import { Brain, Workflow, LineChart, Shield, Building2, PlugZap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-native core',
    desc: 'Predict demand, flag anomalies, and automate approvals across your entire stack.'
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Drag-and-drop workflows with human-in-the-loop and full audit trails.'
  },
  {
    icon: LineChart,
    title: 'Unified data model',
    desc: 'One schema across finance, inventory, CRM, and projects with real-time sync.'
  },
  {
    icon: PlugZap,
    title: 'Open integrations',
    desc: 'Connect your tools in minutes with 100+ prebuilt connectors and webhooks.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, SCIM, RBAC, SOC2, encryption at rest, and per-object permissions.'
  },
  {
    icon: Building2,
    title: 'Built for scale',
    desc: 'From 10 to 10,000 seats with multi-entity and multi-currency support.'
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything your ERP should do—automatically</h2>
          <p className="mt-3 text-gray-600">Replace manual busywork with an intelligent operating system that anticipates what comes next.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl ring-1 ring-gray-200 p-6 bg-white hover:shadow-sm transition">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
