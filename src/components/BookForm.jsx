import { useEffect } from 'react';

const BookForm = ({ bookingData, onSent }) => {
  useEffect(() => {
    if (!bookingData) return;

    const {
      name,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
      totalCost,
      specialRequest
    } = bookingData;

    const message = `
        Booking Summary:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Room Type: ${roomType}
        Amount Paid: ₦${Number(totalCost).toLocaleString()}
        Check In: ${new Date(checkIn).toDateString()}
        Check Out: ${new Date(checkOut).toDateString()}
        Special Request: ${specialRequest || 'None'}
    `.trim();

    const sendToFormspree = async () => {
      try {
        const response1 = await fetch('https://formspree.io/f/mpwrdvaq', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message
          })
        });

        const response2 = await fetch('https://formspree.io/f/mzzvybyn', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message
          })
        });

        const response = response1.ok && response2.ok;

        if (response.ok) {
          console.log('Booking info sent to hotel via Formspree.');
        } else {
          console.error('Failed to send booking info via Formspree.');
        }
      } catch (error) {
        console.error('Formspree submission error:', error);
      } finally {
        onSent?.(); // Call after submission attempt
      }
    };

    sendToFormspree();
  }, [bookingData, onSent]);

  return null;
};

export default BookForm;
