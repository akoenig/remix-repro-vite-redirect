export function getBaseUrl(request: Request) {
  const host =
    request.headers.get("Host") ??
    request.headers.get("X-Forwarded-Host") ??
    new URL(request.url).host;

  const protocol = host.includes("localhost") ? "http" : "https";

  return `${protocol}://${host}`;
}