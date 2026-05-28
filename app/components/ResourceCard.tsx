export default function ResourceCard({ title, desc, events }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-2xl font-bold text-[#00172D] mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{desc}</p>
      <div className="space-y-3">
        {events.map((event: any, i: number) => (
          <div key={i} className="flex justify-between items-center border-t pt-3">
            <span className="text-xs font-bold text-slate-500">{event.date}</span>
            <a href="/apply" className="text-[#C9A050] font-bold text-sm hover:underline">Book now →</a>
          </div>
        ))}
      </div>
    </div>
  );
}