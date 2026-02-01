export default async (req, context) => {
  return new Response(
    JSON.stringify({
      status: "ok",
      message: "AI server jalan"
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
