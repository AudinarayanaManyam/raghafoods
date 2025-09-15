// Simple in-memory storage for rate limiting
// For production, consider using Redis or a database
const rateLimitStore = new Map<string, number[]>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

export async function rateLimit(key: string): Promise<boolean> {
  const now = Date.now();
  const timestamps = rateLimitStore.get(key) || [];

  // Remove timestamps outside current window
  const windowStart = now - WINDOW_MS;
  const validTimestamps = timestamps.filter(timestamp => timestamp > windowStart);

  if (validTimestamps.length >= MAX_REQUESTS) {
    return true; // Rate limited
  }

  // Add current timestamp and update store
  validTimestamps.push(now);
  rateLimitStore.set(key, validTimestamps);

  return false; // Not rate limited
}
