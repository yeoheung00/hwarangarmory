export default function ({ title, price, cover = 'default.webp', des, option = { new: false, discount: 0 } }: { title: string, price: number, cover: string, des: string, option: { new: boolean, discount: number } }) {
  const initial = title[0].toLowerCase();
  const finalPrice = price - price * option.discount / 100;
  return (
    <div className="w-full p-5 hover:bg-[#1f1f1f] border-[1px] border-white">
      <div className="w-full h-0 pb-[100%] relative border-[1px] border-[grey]">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src={`/items/${cover}`} alt={title} />
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
      <div className="w-full mt-2 flex flex-col ">
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