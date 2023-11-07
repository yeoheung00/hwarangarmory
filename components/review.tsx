import Title from "./title";

const Review = ({ cover, author, rate, summary, item }: { cover: string, author: string, rate: number, summary: string, item: string }) => {
  return (
    <div className="w-[calc((100%_-_80px)_/_5)] p-5 flex-[0_0_auto] border-[1px] border-white">
      <div className="flex items-center">
        <h3 className="text-sm text-[grey] mb-5 flex-1 ">{author}</h3>
        <div className="w-1/2 h-0 pb-[calc(50%_/_5)] relative bg-[#1f1f1f] translate-y-[-50%]" style={{
          maskImage: "url('/star.svg')",
          WebkitMaskImage: "url('/star.svg')"
        }}>
          <div style={{ height: '100%', width: rate * 10 + '%', backgroundColor: 'var(--yellow)', position: 'absolute', top: '0', left: '0' }}></div>
        </div>
      </div>
      <h2 className="text-xl font-bold">{item}</h2>
      <p className="text-md mb-5">{summary}</p>
      <img src={cover} alt={item} />
    </div>
  )
}

export default function () {
  return (
    <div className="mt-32 mb-16">
      <div className="px-5 mb-5">
        <Title text=" Best Reviews" color="var(--red)" />
      </div>
      <div className='flex w-full gap-5 flex-wrap px-5'>
        <Review cover='/items/default.webp' author="asdf" rate={10} summary="asldkfjal;sdf" item="item1" />
        <Review cover='/items/default.webp' author="asdf" rate={10} summary="asldkfjal;sdf" item="item1" />
        <Review cover='/items/default.webp' author="asdf" rate={9} summary="asldkfjal;sdf" item="item1" />
        <Review cover='/items/default.webp' author="asdf" rate={10} summary="asldkfjal;sdf" item="item1" />
        <Review cover='/items/default.webp' author="asdf" rate={10} summary="asldkfjal;sdf" item="item1" />
      </div>
      <div className="mt-16 flex justify-center">
        <button className="px-8 py-4 border-[1px] border-white hover:bg-white hover:text-black transition-[all] bg-transparent text-xl">View All Reviews</button>
      </div>
    </div>
  )
}