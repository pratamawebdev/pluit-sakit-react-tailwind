const Card = (props) => {
  const { url, title, time, key, onClick } = props;
  return (
    <div
      key={key}
      className="text-white cursor-pointer mx-auto"
      onClick={onClick}
    >
      <img src={url} alt="" className="h-[266px] w-[199px] object-cover" />
      <h1 className="text-[20px] font-bold mt-[18px]">{title}</h1>
      <span className="text-[12px] font-medium">{time}</span>
    </div>
  );
};

export default Card;
