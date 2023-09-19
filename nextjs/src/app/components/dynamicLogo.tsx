export function DynamicLogo({
  mobileLogo,
  logo,
}: {
  mobileLogo: React.ReactNode;
  logo: React.ReactNode;
}) {
  return (
    <>
      <div id="mobile-logo" className="block lg:hidden">
        {mobileLogo}
      </div>
      <div id="logo" className="hidden lg:block">
        {logo}
      </div>
    </>
  );
}
