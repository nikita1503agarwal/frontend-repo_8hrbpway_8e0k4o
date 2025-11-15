export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Doryo, Inc. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Security</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
