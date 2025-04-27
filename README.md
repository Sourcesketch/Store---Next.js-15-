🛍️ Product API with Next.js
This project demonstrates a basic Product API built using Next.js 14 App Router.
It fetches product details based on product ID, handling errors gracefully when a product is not found.

🚀 Features
Fetch product details by Product ID

Handles 404 Not Found errors if product doesn't exist

Simple simulated in-memory database (can be replaced by real database/API later)

Built with TypeScript and Next.js App Router

🧩 Project Structure
csharp
Copy
Edit
src/
  app/
    api/
      products/
        [id]/
          route.tsx   // API route for fetching product by ID
  lib/
    getProduct.ts     // Product fetching logic (in-memory simulation)
📚 How It Works
GET /api/products/:id
Example: /api/products/1

In getProduct.ts, product data is hardcoded for now:

typescript
Copy
Edit
export async function getProduct(id: string) {
  const products = {
    "1": { id: "1", title: "Tshirts", ... },
    "2": { id: "2", title: "Watches", ... },
  };

  return products[id] || null;
}
In route.tsx, the product is fetched, and if not found, a 404 JSON response is returned.

📦 Setup & Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Visit: http://localhost:3000/api/products/1

⚠️ Error Handling Example
If you try to fetch a product that doesn't exist (like /api/products/3), you will receive:

json
Copy
Edit
{
  "error": "Product not found"
}
with a 404 status.