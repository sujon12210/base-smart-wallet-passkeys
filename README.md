# Base Smart Wallet Passkeys Engine

By 2026, the industry standard for onboarding mainstream Web3 users has fundamentally shifted away from traditional 12-word seed phrases. This repository delivers a professional-grade implementation of **Account Abstraction (ERC-4337)** using **WebAuthn Passkeys** tailored specifically for the Base network.

By utilizing secure enclaves inside consumer devices (FaceID, TouchID, Windows Hello), this architecture generates cryptographic key pairs capable of natively signing transactions on-chain via modern RIPEMD/secp256r1 verification precompiles.

## Core Architecture
- **Dual-Key Validation:** Utilizes asymmetric cryptography keys tied directly to the user's hardware device enclave.
- **Paymaster Subsidies:** Pre-configured middleware integration to abstract gas fees away from your end users.
- **ERC-4337 Bundler Ready:** Completely compatible with high-velocity bundlers (Biconomy, Pimlico, Alchemy).
- **Flat Layout:** Front-end orchestration hooks and contract interfaces reside collectively in the root directory.

## Implementation Guide
1. Install dependencies: `npm install`
2. Configure your bundler and paymaster API transport nodes inside `.env`.
3. Launch the authentication node: `node passkeyAuth.js`
