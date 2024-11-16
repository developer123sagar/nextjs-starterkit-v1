# Next.js TypeScript Starter Kit v1 🚀

A modern **Next.js** starter kit with **TypeScript**, designed to streamline development and deliver high-quality applications. This kit comes pre-configured with best practices, essential tools, and a scalable project structure.

## Features

- **Next.js 15**: For powerful SSR, ISR, and dynamic routing.
- **TypeScript**: For type safety and enhanced development experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Prettier**: Ensures consistent code formatting with `prettier-plugin-tailwindcss` for class sorting.
- **ESLint**: Includes Next.js and Prettier configurations for linting.
- **Husky**: Pre-commit hooks for a better Git workflow.
- **Import Sorting**: Automatically organizes imports with `@trivago/prettier-plugin-sort-imports`.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9 or Yarn >= 1.22

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/developer123sagar/nextjs-typescript-starterkit-v1.git
   cd nextjs-typescript-starterkit-v1
   ```
2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser at http://localhost:3000

## Folder Structure

├── src/ # Source code
│ ├── components/ # Reusable components
│ ├── app/ # Next.js app router
│ ├── assets/ # Static files like image,css,themes
│ └── lib/ # Utility functions and helpers
├── public/ # Static files
├── .eslintrc.json # ESLint configuration
├── .prettierrc.json # Prettier configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration

### Contribution

Feel free to submit issues and pull requests. Contributions are welcome!
