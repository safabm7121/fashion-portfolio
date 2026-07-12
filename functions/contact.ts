import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest = staticFormsPlugin({
  respondWith: async ({ formData }) => {
    // Extract form data
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you can save to KV, send an email, or forward to a webhook
    // For now, we'll log and return success
    
    // You can forward this data to any email service or save it
    console.log(`New contact from ${name} (${email}): ${message}`);
    
    // Return a success response
    return new Response(
      `Thank you ${name}! Your message has been received.`,
      { status: 200 }
    );
  },
});
