export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Muhammad Waleed Ur Rehman. All rights reserved.</p>
        <p className="text-gray-600 text-sm mt-4 md:mt-0">Building AI + Web3 solutions for modern finance.</p>
      </div>
    </footer>
  );
}
