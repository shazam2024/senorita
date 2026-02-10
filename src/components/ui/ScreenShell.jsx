const bgByVariant = {
  promise:
    'radial-gradient(1100px circle at 30% 20%, rgba(255,215,160,0.22) 0%, rgba(255,185,210,0.10) 45%, rgba(189,147,249,0.14) 70%, rgba(5,6,16,0.92) 100%)',
  cinematic:
    'radial-gradient(900px circle at 50% 30%, rgba(255,215,160,0.16) 0%, rgba(255,185,210,0.10) 40%, rgba(189,147,249,0.10) 65%, rgba(2,4,12,0.94) 100%)',
  garden:
    'radial-gradient(1100px circle at 50% 15%, rgba(255,215,160,0.14) 0%, rgba(255,185,210,0.10) 40%, rgba(189,147,249,0.14) 70%, rgba(2,5,14,0.95) 100%)',
};

const ScreenShell = ({ children, variant = 'promise', allowScroll = false }) => {
  return (
    <div
      className={`h-screen w-full flex items-center justify-center relative overflow-x-hidden ${
        allowScroll ? 'overflow-y-auto' : 'overflow-y-hidden'
      } py-10 md:py-14`}
      style={{ background: bgByVariant[variant] || bgByVariant.promise }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 520px at 50% 20%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.42) 100%)',
          opacity: 1,
        }}
      />
      {children}
    </div>
  );
};

export default ScreenShell;
