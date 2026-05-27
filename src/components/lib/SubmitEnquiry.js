export async function submitEnquiry(data) {

    const response = await fetch(
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    return response.json();
  }