This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Rick Roll Link Generator

A professional web application for creating custom Rick Roll links that redirect to Rick Astley's famous "Never Gonna Give You Up" video. The generator allows for customized link titles, descriptions, and preview images to make the links more convincing.

## 📋 Features

- Create customized Rick Roll links with personalized titles and descriptions
- Add custom preview images to make links more convincing
- Choose from different content types (article, news, blog post, etc.)
- Set custom expiry times for links
- Track the count of successful Rick Rolls
- Mobile-responsive design
- Share generator links on social media
- Built-in feedback system

## 🛠️ Technologies Used

This project is built with modern web technologies:

- **Next.js 15** - React framework for production
- **React 18** - Frontend UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage API** - For tracking Rick Roll counts
- **ES6+ JavaScript** - Modern JavaScript features

## 🚀 How to Run in VSCode

Follow these steps to run this project in Visual Studio Code:

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed (version 18.17.0 or higher)
2. Install [Visual Studio Code](https://code.visualstudio.com/)
3. Install [Git](https://git-scm.com/downloads) for version control

### Setup Instructions

1. **Clone or download the project**

   ```bash
   git clone <your-repository-url>
   # OR
   # Download and extract the zip file
   ```

2. **Open in VSCode**

   ```bash
   cd rickroll-generator
   code .  # This opens the project in VSCode
   ```

3. **Install dependencies**

   You can use npm:
   ```bash
   npm install
   ```

   Or if you prefer using Bun (faster):
   ```bash
   # Install Bun first if you don't have it
   npm install -g bun
   # Then install dependencies
   bun install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # OR
   bun dev
   ```

5. **Access the application**

   Open your browser and go to [http://localhost:3000](http://localhost:3000)

## 📱 Building for Production

When you're ready to deploy your application:

```bash
# Build the project
npm run build
# OR
bun run build

# Start the production server
npm start
# OR
bun start
```

## 📄 Project Structure

```
rickroll-generator/
├── public/             # Static files
├── src/                # Source code
│   ├── app/            # Next.js app router
│   │   ├── [type]/     # Dynamic routes for Rick Roll links
│   │   ├── faq/        # FAQ page
│   │   ├── privacy/    # Privacy policy page
│   │   ├── terms/      # Terms of use page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable React components
│   └── lib/            # Utility functions
├── package.json        # Project dependencies
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## 🧩 Customization

You can customize the application by:

1. Modifying the styling in the component files (using Tailwind classes)
2. Updating the FAQ items in `src/components/FAQ.tsx`
3. Changing the base count in `src/components/RickrollCounter.tsx`
4. Updating the social sharing links in `src/components/SocialIcons.tsx`

## 📝 Notes

- This project is for educational and entertainment purposes only
- The counter tracks successful Rick Rolls via localStorage
- For a production environment, you would implement server-side tracking for the counter
