import Title from 'components/title'
import styles from './section.module.css'

export default function Section() {
  return (
    <div className='w-full mt-16'>
      <div className='px-5 pb-4'>
        <Title text='Shop by category' color='var(--red)' />
      </div>
      <div className='flex flex-wrap'>

        <div className='w-1/4 h-0 pb-[calc(25%_/_17_*_8)] relative group/item1'>
          <div className='w-full h-full absolute top-0 left-0'>
            <div className='w-[90%] group-hover/item1:w-full transition-[width] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <div className='w-full h-0 pb-[calc(100%_/_17_*_8)]' style={{
                maskImage: "url('/char/f.svg')",
                WebkitMaskImage: "url('char/f.svg')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: 'black'
              }}>
                <img className='absolute top-0 left-0 opacity-90 w-full h-full object-cover' src='/category/firearms2.jpg' alt='firearms' />
              </div>
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl group-hover/item1:text-5xl transition-[font-size] text-white' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>Firearms</div>
          </div>
        </div>

        <div className='w-1/4 h-0 pb-[calc(25%_/_17_*_8)] relative group/item1'>
          <div className='w-full h-full absolute top-0 left-0'>
            <div className='w-[90%] group-hover/item1:w-full transition-[width] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <div className='w-full h-0 pb-[calc(100%_/_17_*_8)]' style={{
                maskImage: "url('/char/a.svg')",
                WebkitMaskImage: "url('char/a.svg')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: 'black'
              }}>
                <img className='absolute top-0 left-0 opacity-90 w-full h-full object-cover' src='/category/ammo2.jpg' alt='ammo' />
              </div>
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl group-hover/item1:text-5xl transition-[font-size] text-white' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>Ammos</div>
          </div>
        </div>

        <div className='w-1/4 h-0 pb-[calc(25%_/_17_*_8)] relative group/item1'>
          <div className='w-full h-full absolute top-0 left-0'>
            <div className='w-[90%] group-hover/item1:w-full transition-[width] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <div className='w-full h-0 pb-[calc(100%_/_17_*_8)]' style={{
                maskImage: "url('/char/a.svg')",
                WebkitMaskImage: "url('char/a.svg')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: 'black'
              }}>
                <img className='absolute top-0 left-0 opacity-70 w-full h-full object-cover' src='/category/apparel.jpg' alt='clothes' />
              </div>
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl group-hover/item1:text-5xl transition-[font-size] text-white' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>Apparel</div>
          </div>
        </div>

        <div className='w-1/4 h-0 pb-[calc(25%_/_17_*_8)] relative group/item1'>
          <div className='w-full h-full absolute top-0 left-0'>
            <div className='w-[90%] group-hover/item1:w-full transition-[width] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
              <div className='w-full h-0 pb-[calc(100%_/_17_*_8)]' style={{
                maskImage: "url('/char/f.svg')",
                WebkitMaskImage: "url('char/g.svg')",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: 'black'
              }}>
                <img className='absolute top-0 left-0 opacity-70 w-full h-full object-cover' src='/category/gear2.jpg' alt='gear' />
              </div>
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl group-hover/item1:text-5xl transition-[font-size] text-white' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 1)' }}>Gears</div>
          </div>
        </div>
      </div>
    </div>
  )
}