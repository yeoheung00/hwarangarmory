export default function ({ title, price, cover = 'default.webp', des, option = { new: false, discount: 0 } }: { title: string, price: number, cover: string, des: string, option: { new: boolean, discount: number } }) {
  const initial = title[0].toLowerCase();
  const finalPrice = price - price * option.discount / 100;
  return (
    <div className="w-full hover:bg-[#1f1f1f] border-[1px] border-white h-[400px]">
      <div className="w-full h-[260px] relative flex justify-center border-b border-[grey]">
        <img className=" w-full h-full object-contain bg-white" src={`/items/${cover}`} alt={title} />
        <div className="absolute top-0 left-0 flex">
          {
            option.discount === 0 ? null : (
              <div className="bg-[--red] text-white px-1 text-sm">{`${option.discount}%`}</div>
            )
          }
          {
            option.new ? (
              <div className="bg-[--blue] text-white px-1 text-sm">NEW</div>
            ) : null
          }

        </div>
      </div>
      <div className="w-full flex flex-col p-5">
        <div className="flex gap-2 items-center">
          <div className="text-lg">{finalPrice}$</div>
          {
            option.discount === 0 ? null : (
              <div className="line-through text-sm text-[grey]">{price}$</div>
            )
          }
        </div>
        <div className="text-2xl">{title}</div>
        <p className="w-full text-md text-[grey] text-ellipsis overflow-hidden">{des}</p>
      </div>
    </div>
  )
}