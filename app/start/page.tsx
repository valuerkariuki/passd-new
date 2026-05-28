'use client';

export default function StartPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, subject: "New 30-Minute Call Request" }),
    });

    if (response.ok) alert("Request sent! We will contact you to arrange the invoice and call.");
  }

  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Book Your 30-Minute Call</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-bold mb-2">Select Service</label>
          <select name="service" required className="w-full p-4 border rounded-xl">
            <option value="5-days-45">Within 5 working days - £45</option>
            <option value="24-hours-60">Within 24 hours - £60</option>
          </select>
        </div>
        
        <div>
          <label className="block font-bold mb-2">Name & Email</label>
          <input name="full_name" required placeholder="Full Name" className="w-full p-4 border rounded-xl mb-3" />
          <input type="email" name="email" required placeholder="Email Address" className="w-full p-4 border rounded-xl" />
        </div>

        <div>
          <label className="block font-bold mb-2">Your Preferred Slots</label>
          <textarea name="slots" required placeholder="Please suggest 2 different date and time slots..." className="w-full p-4 border rounded-xl h-32" />
        </div>

        <button type="submit" className="w-full py-4 bg-[#00172D] text-white rounded-xl font-bold hover:bg-slate-800">
          Request Call
        </button>
      </form>
    </main>
  );
}