export function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(640px 320px at 88% -60px, rgba(39,66,232,.10), transparent 65%), radial-gradient(520px 300px at -8% 28%, rgba(245,158,11,.08), transparent 65%), radial-gradient(760px 420px at 55% 112%, rgba(16,185,129,.07), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
