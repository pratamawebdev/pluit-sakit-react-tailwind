const HeroLayouts = (props) => {
  const { children } = props;
  return (
    <section className="w-full hero-header hero h-full">
      <div className="flex-row container mx-auto max-w-[1296px] flex h-auto py-36 gap-[26.67px]">
        {children}
      </div>
    </section>
  );
};

export default HeroLayouts;
