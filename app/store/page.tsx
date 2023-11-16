import Item from "@/components/item";
import Section from "@/components/section";
import items from 'db/items.json'

export default function Page() {
  return (
    <main className="w-full min-h-screen relative">
      <img src="/store/back.jpg" className="absolute w-full h-full top-0 left-0 object-cover opacity-50 z-[-10]" />
      <div className='w-full max-w-[1800px] mx-auto min-h-screen pt-[160px]'>
        <div className="w-full flex gap-5 p-5" >
          <div className="basis-[800px]  flex flex-col gap-5">
            <div className='border-[1px] border-white p-5 flex flex-col gap-5'>
              <h2 className="text-2xl">Price</h2>
              <div className="flex gap-2">
                <input placeholder="from" className="pl-1"></input>
                <div>~</div>
                <input placeholder="to" className="pl-1"></input>
              </div>
            </div>
            <div className='border-[1px] border-white p-5 flex flex-col gap-5'>
              <h2 className="text-2xl">Options</h2>
              <div className="flex flex-col">
                <div className="flex items-center border-t-[1px] border-white pl-2 h-12"><div className="grow">Brand</div> <img src="/icons/down.svg" /></div>
                <div className="flex items-center border-t-[1px] border-white pl-2 h-12"><div className="grow">Category</div> <img src="/icons/down.svg" /></div>
                <div className="flex items-center border-t-[1px] border-white pl-2 h-12"><div className="grow">Color</div> <img src="/icons/down.svg" /></div>
                <div className="flex items-center border-t-[1px] border-white pl-2 h-12"><div className="grow">Material</div> <img src="/icons/down.svg" /></div>
                <div className="flex items-center border-y-[1px] border-white pl-2 h-12"><div className="grow">Event</div> <img src="/icons/down.svg" /></div>
              </div>
            </div>
          </div>
          <div className="grow flex flex-wrap gap-5 justify-start">
            <div className="w-full flex border-[1px] border-white p-5 items-center">
              <h2 className="text-2xl">Sort by</h2>
              <button className="ml-5 px-4 h-8 bg-white text-black">Newest</button>
              <img src='/icons/down.svg' />
              <button className="ml-5 px-4 h-8 border-[1px] border-white">Price</button>
              <img src='/icons/down.svg' />
              <button className="ml-5 px-4 h-8 border-[1px] border-white">Name</button>
              <img src='/icons/down.svg' />
            </div>
            {
              items.map((item, idx) => (
                <div className='w-[calc((100%_-_60px)_/_4)] '>
                  <Item title={item.name} price={item.price} cover={item.img} des={item.summary} option={{ new: item.isNew, discount: item.discount }} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}