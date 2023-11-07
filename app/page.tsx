import Banner from 'components/banner'
import Section from 'components/section'
import db from 'db/data.json'
import Discount from '@/components/discount'
import Newarrival from '@/components/newarrival'
import Review from '@/components/review'
import Program from '@/components/program'

export default function Home() {
  const discount = db.discount;
  return (
    <main className='w-full min-h-screen'>
      <div className='w-full h-[80vh]'>
        <Banner />
      </div>
      <div className='mx-auto'>
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
      <div className='mx-auto'>
        <div>
          <Review />
        </div>
      </div>
    </main>
  )
}