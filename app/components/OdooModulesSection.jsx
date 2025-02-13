export default function OdooModulesSection() {
    const modules = [
      {
        name: 'AT Odoo 18 Community Accounting',
        description: 'Balance Sheet, Profit and Loss, Partner Ledger, Aged Partner Balance, Aged Receivable, Aged Payable, General Ledger, Trial Balance, Tax Reports, Journals Audit Reports',
        image: 'https://apps.odoo.com/apps/module_image?image_id=20875460&unique=66c941f9e81d52eb0a200394773626a0ad42dddc',
        link: 'https://apps.odoo.com/apps/modules/18.0/at_account_accountant',
      },
      {
        name: 'AT KSA POS Receipt Design',
        description: 'Custom POS Receipt with new Design it fit the KSA Requirements with QR Code and printing the customer information, Journals Audit Reports',
        image: 'https://apps.odoocdn.com/apps/assets/18.0/at_custom_pos_receipt/img_2.png?60bab8c',
        link: 'https://apps.odoo.com/apps/modules/18.0/at_custom_pos_receipt',
      },
      {
        name: 'AT Multi POS Order Types',
        description: 'Create Type of POS Order - Enable/Disable Type of POS Order - Select Type of POS Order in POS Screen - Selected Type of POS Order Displayed in Receipt',
        image: 'https://apps.odoo.com/apps/module_image?image_id=20875450&unique=bd6a1ffa06dcb6b9b53b20a21df8aa61a315e5b1',
        link: 'https://apps.odoo.com/apps/modules/18.0/at_pos_order_types',
      },
      // Add more modules here
    ];
  
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Odoo Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div
                key={module.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <img
                  src={module.image}
                  alt={module.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  {module.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {module.description}
                </p>
                <a
                  href={module.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Odoo Apps
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }