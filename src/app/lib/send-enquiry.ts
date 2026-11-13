import { formEndpoint } from "./contact";

export async function sendEnquiry(formData: FormData) {
  const response = await fetch(formEndpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error("The submission could not be delivered.");
  }

  const result = await response.json();
  if (result.success !== true && result.success !== "true") {
    throw new Error("The form service did not accept the submission.");
  }
}
