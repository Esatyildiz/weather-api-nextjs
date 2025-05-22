export const fetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  if (!res.ok) {
    const error = new Error("Veri çekme hatası");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
