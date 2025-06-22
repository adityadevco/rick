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
