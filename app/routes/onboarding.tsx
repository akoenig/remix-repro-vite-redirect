import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBaseUrl } from "~/utils/getBaseUrl.server";

export function getUrl(request: Request) {
  return `${getBaseUrl(request)}/onboarding`;
}

export function loader() {
  return json({ timestamp: Date.now() });
}

export default function OnboardingView() {
  const { timestamp } = useLoaderData<typeof loader>();

  return <div>Current timestamp: {timestamp}</div>;
}
