export const sendEmail = async (formData) => {
  // Using EmailJS or direct API call
  // For now, we'll use a fetch to a free email service
  // You can replace this with your preferred email service
  
  const response = await fetch('https://formspree.io/f/your-form-id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      _to: 'safabenmiledd@gmail.com',
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  
  return response.json();
};

// Alternative: Using EmailJS (more reliable)
export const sendEmailWithEmailJS = async (formData) => {
  // You'll need to sign up at emailjs.com and get your IDs
  const emailjs = await import('@emailjs/browser');
  
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'safabenmiledd@gmail.com',
  };
  
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams,
    'YOUR_PUBLIC_KEY'
  );
};