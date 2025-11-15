export default function Logos() {
  const logos = [
    'Acme Corp', 'Globex', 'Umbrella', 'Stark Industries', 'Wayne Enterprises', 'Hooli'
  ]
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm">Trusted by modern operations teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-gray-400">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-md bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center text-xs">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
