⌚ LEGATUS – E-Commerce Web Application
Welcome to the official repository for LEGATUS, a modern and elegant e-commerce platform developed by Team 6 as part of the CST Final Project at ITI.

LEGATUS offers a premium online shopping experience focused on high-quality wristwatches, serving both direct customers and independent sellers through a role-based web platform.

🌐 Live Preview
Coming soon: hosted demo link

📖 About the Project
LEGATUS is built to function both as a direct retailer and a marketplace. It supports three core user roles:

🧑‍💼 Admin

🛍️ Customer

🧑‍🔧 Seller

The system features fully responsive dashboards, streamlined navigation, and interactive data components—all with data persistence handled via localStorage.

🔑 Features by Role
👤 Customer
Browse watches by brand, gender, or search.

View detailed product pages.

Add items to cart and checkout.

Manage profile and view order history.

Role-based login/signup with localStorage session.

🧑‍💼 Seller
Register and log in to manage store.

Add, edit, and remove products.

View performance analytics with charts.

Update personal and store information.

🛠️ Admin
Hardcoded administrator access.

View and delete any user, seller, or product.

Reset credentials for users and sellers.

Manage messages from “Contact Us” form.

🧰 Technologies Used
Area	Stack
Frontend	HTML, CSS, JavaScript
Storage	Browser localStorage
Charts	JavaScript-based visualization (e.g., Chart.js)
Architecture	Role-based navigation & control

🗂️ Project Structure
pgsql
Copy
Edit
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── customer.js
│   ├── seller.js
│   ├── admin.js
│   └── auth.js
├── assets/
│   └── images/
├── data/
│   └── mock-data.json (optional)
└── README.md
🚀 Getting Started
Clone the repository

bash
Copy
Edit
git clone https://github.com/zeyadgebril/CST-Project---team-6.git
cd CST-Project---team-6
Open index.html in a modern browser
(No server or backend required – fully client-side with localStorage persistence.)

Explore functionality

Log in as different users.

Try adding products, completing purchases, and viewing dashboards.

📸 Screenshots (Optional)
You can include images of:

Customer Shop & Cart

Seller Dashboard with Charts

Admin Panel

👥 Team Members

Add remaining team members and their GitHub links here

📩 Contact
For issues or suggestions, please use the Issues tab in this repository.

📃 License
This project is open-source and licensed under the MIT License.
