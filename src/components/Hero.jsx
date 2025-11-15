import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
      <div className="container mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ring-1 ring-blue-200">
              <Sparkles className="h-4 w-4" /> AI Native ERP
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Operate your business on autopilot
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Doryo is the AI-native ERP that connects finance, operations, and sales into one intelligent system. Automate workflows, surface insights, and make decisions faster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onCTAClick} className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 font-semibold ring-1 ring-gray-200 hover:bg-gray-50">
                See pricing
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" /> SOC2-ready</div>
              <div>GDPR compliant</div>
              <div>SSO / SCIM</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-xl ring-1 ring-gray-200 p-2 bg-white shadow-sm">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-100 via-white to-amber-50 flex items-center justify-center text-center p-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Doryo Copilot</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">Ask anything, act anywhere</h3>
                  <p className="mt-2 text-gray-600">"Raise POs, reconcile invoices, update inventory, and forecast revenue by simply asking."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
