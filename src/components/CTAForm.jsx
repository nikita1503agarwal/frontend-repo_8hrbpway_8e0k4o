import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function CTAForm({ open, onClose, defaultPlan }) {
  const [form, setForm] = useState({
    company: '',
    full_name: '',
    email: '',
    phone: '',
    employees: '',
    plan: defaultPlan || '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
    } catch (e) {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal>
      <div className="w-full max-w-lg rounded-xl bg-white p-6 ring-1 ring-gray-200">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Talk to sales</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        {status === 'success' ? (
          <div className="mt-4 p-4 rounded-md bg-green-50 text-green-700">
            Thanks! Our team will reach out shortly.
          </div>
        ) : (
          <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input required value={form.company} onChange={(e)=>setForm({...form, company: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input required value={form.full_name} onChange={(e)=>setForm({...form, full_name: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company size</label>
                <select value={form.employees} onChange={(e)=>setForm({...form, employees: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900">
                  <option value="">Select</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>200+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Plan</label>
                <select value={form.plan} onChange={(e)=>setForm({...form, plan: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900">
                  <option value="">Select</option>
                  <option>Core</option>
                  <option>Core + AI Chat</option>
                  <option>Enterprise</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">What are you solving?</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} rows={3} className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800" disabled={status==='loading'}>
                {status==='loading' ? 'Submitting...' : 'Submit'}
              </button>
              {status==='error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
