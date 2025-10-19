# BIM Reality Reporter

On-chain construction discrepancy reporting & team coordination on Base.

## Features

- 🏗️ **Instant Issue Logging**: Document construction discrepancies with photos, notes, and location data
- ✅ **Verifiable Attestations**: On-chain proof of issue resolution
- 👥 **Contributor Profiles**: Build reputation through verified work history
- 💬 **Collaborative Resolution**: Team coordination through Farcaster Frames
- ⛽ **Gasless Transactions**: Seamless UX with sponsored transactions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Identity**: Farcaster Mini Apps
- **Wallet**: OnchainKit + Coinbase Wallet
- **Styling**: Tailwind CSS with Coinbase theme
- **Type Safety**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit + React Query providers
│   ├── ConnectWallet.tsx
│   ├── IssueCard.tsx
│   ├── StatsCard.tsx
│   └── NewIssueButton.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Make sure to:
1. Add environment variables in Vercel dashboard
2. Configure custom domain
3. Update `farcaster.json` with production URLs

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://docs.farcaster.xyz/developers/frames/v2/mini-apps)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
