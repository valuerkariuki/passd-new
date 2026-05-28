export default function SecurityBadge() {
  return (
    <div className="flex items-center justify-center gap-4 p-6 bg-slate-100 rounded-2xl border border-slate-200">
      <span className="text-2xl">🛡️</span>
      <p className="text-sm text-slate-700 font-medium">
        <strong>100% Human Expertise.</strong> No AI-generated reviews. 
        Every submission is handled by a qualified MRICS counsellor.
      </p>
    </div>
  );
}