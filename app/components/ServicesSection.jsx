export default function ServicesSection() {
    const services = [
      {
        title: 'Odoo ERP Implementation',
        icon: 'i-simple-icons-odoo',
        description: 'Full-stack Odoo deployment and configuration',
      },
      {
        title: 'Custom Module Development',
        icon: 'i-lucide-code',
        description: 'Tailored Odoo modules for unique business needs',
      },
      {
        title: 'Technical Support',
        icon: 'i-lucide-life-buoy',
        description: '24/7 expert support and maintenance',
      },
    ];
  
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              >
                <div className={`text-4xl ${service.icon} mb-4`} />
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }