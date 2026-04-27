import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Ensure this matches your BETTER_AUTH_URL exactly
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
});

// Export the methods from the 'authClient' instance created above
export const { signIn, signUp, useSession, signOut } = authClient;
