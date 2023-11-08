import Banner from 'components/banner'
import Section from 'components/section'
import Discount from '@/components/discount'
import Newarrival from '@/components/newarrival'
import Review from '@/components/review'
import Program from '@/components/program'

export default function Home() {
  return (
    <main className='w-full min-h-screen'>
      <div className='w-full h-[80vh]'>
        <Banner />
      </div>
      <div className='max-w-[1800px] mx-auto'>
        <div>
          <Section />
        </div>
        <div>
          <Discount />
        </div>
        <div>
          <Newarrival />
        </div>
      </div>
      <div>
        <Program />
      </div>
      <div className='max-w-[1800px] mx-auto'>
        <div>
          <Review />
        </div>
      </div>
    </main>
  )
}