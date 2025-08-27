# User Flows
This document describes the user flows related to automatic token refresh.

## Flow 1: Automatic Token Refresh
1. **Token Check:** Periodically check if the token is approaching expiration.
2. **Refresh Request:** If the token is nearing expiration, send a request for a new token.
3. **Token Replacement:** Replace the old token with the new token.
4. **Silent Renewal:** This process should happen in the background without user interaction.
