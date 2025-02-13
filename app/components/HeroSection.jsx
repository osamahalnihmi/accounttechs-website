export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-gray-800 dark:to-gray-900 py-24">
        <div className="container mx-auto px-4 text-center">
          {/* <img
            src="/logo.png"
            alt="AccountTechs Logo"
            className="mx-auto h-16 w-auto mb-8"
          /> */}
          <h1 className="text-5xl font-bold text-white mb-6">
            Empowering Businesses with Odoo ERP Solutions
          </h1>
          <p className="text-xl text-white/80 mb-10">
            Your trusted partner for Odoo implementation, customization, and support.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/contact" className="btn-primary">
              Get Started
            </a>
            <a href="/pricing" className="btn-secondary">
              Pricing Plans
            </a>
          </div>
        </div>
      </section>
    );
  }