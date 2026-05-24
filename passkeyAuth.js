const { generateRegistrationOptions, verifyRegistrationResponse } = require('@simplewebauthn/server');
require('dotenv').config();

const rpName = 'Web3 Passkey Shield';
const rpID = 'localhost';
const origin = `http://${rpID}:3000`;

/**
 * Orchestration service for generating passkey registration payloads 
 * that will ultimately be registered on-chain in the Smart Wallet.
 */
async function initiatePasskeyRegistration(userId, username) {
    console.log(`[Passkey] Generating registration challenges for user: ${username}`);

    const options = await generateRegistrationOptions({
        rpName,
        rpID,
        userID: Buffer.from(userId),
        userName: username,
        userDisplayName: username,
        attestationType: 'none',
        authenticatorSelection: {
            residentKey: 'required',
            userVerification: 'required',
            authenticatorAttachment: 'platform', // Enforces hardware validation (FaceID/TouchID)
        },
    });

    console.log("[Success] Registration parameters generated successfully.");
    return options;
}

// Example usage execution
// initiatePasskeyRegistration("user_id_001", "dev_explorer_2026");
module.exports = { initiatePasskeyRegistration };
