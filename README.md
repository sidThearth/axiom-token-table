# Axiom Trade - Token Discovery Replica

A pixel-perfect replica of the Axiom Trade token discovery interface, built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates a high-performance, real-time data table with advanced filtering, sorting, and UI interactions.

## 🚀 Features

- **Real-time Data Simulation**: Mock WebSocket service simulating live price, volume, and change updates.
- **Advanced Data Table**:
  - Custom sorting and filtering logic.
  - "New Pairs", "Final Stretch", and "Migrated" tabs.
  - Real-time price flashing (Green/Red) on updates.
- **Modern UI/UX**:
  - Dark mode aesthetic matching Axiom Trade.
  - Custom "Axiom" design system using Tailwind CSS.
  - Responsive layout with fixed navigation and market bars.
- **Navigation & Market Status**:
  - Top header with search, navigation links, and action buttons.
  - Bottom market bar with global tickers (BTC, ETH, SOL) and connection status.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives, [Lucide React](https://lucide.dev/) icons.

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router pages and layout
├── components/
│   ├── ui/               # Reusable atomic components (Button, Badge, etc.)
│   ├── molecules/        # Compound components (TokenCell, FilterBar)
│   └── organisms/        # Complex widgets (TokenTable, Header, MarketBar)
├── lib/                  # Utilities, store configuration, and types
├── services/             # Mock services (WebSocket)
└── hooks/                # Custom React hooks
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sidThearth/axiom-token-table.git
    cd axiom-token-table
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🧪 Verification

The project includes a comprehensive test suite and verification steps:
- **Type Safety**: `tsc --noEmit`
- **Linting**: `npm run lint`
- **Build Integrity**: `npm run build`

## 📝 License

This project is for educational and demonstration purposes.
