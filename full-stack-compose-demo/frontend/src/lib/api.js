export async function api(
  path,
  body,
  method = "POST",
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}${path}`,
    {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
