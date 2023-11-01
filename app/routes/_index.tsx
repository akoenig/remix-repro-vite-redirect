import { ActionFunctionArgs, redirect } from "@remix-run/node";

import { getUrl as getOnboardingUrl } from "./onboarding";

import { Form } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  // This doesn't seem to work reliably (or only on the first try, subsequent calls don't work).
  return redirect(getOnboardingUrl(request))
}

export default function Index() {
  return (
    <Form method="POST">
      <button>To Onboarding</button>
    </Form>
  )
}
