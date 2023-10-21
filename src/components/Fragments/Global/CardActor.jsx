const CardActor = (props) => {
  const { url, actor, name, key } = props;
  return (
    <div
      key={key}
      className="bg-[#0F172A] h-[323px] w-[199px] rounded-[10px] flex flex-col mx-auto"
    >
      <img src={url} alt="" className="w-[199px] h-[252px] rounded-[10px]" />

      <div className="pl-[9px]">
        <h1 className="text-[12px] font-bold mt-[18px] text-white">{actor}</h1>
        <span className="text-[12px] text-white">{name}</span>
      </div>
    </div>
  );
};

export default CardActor;
