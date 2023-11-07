import db from 'db/data.json'
import Title from './title';
import Item from './item';

export default function () {
  const discount = db.newarrivals;
  return (
    <div className='mt-32'>
      <div className='px-5 mb-5'>
        <Title text='New Arrival' color='var(--red)' />
      </div>
      <div className='overflow-x-scroll px-5 flex gap-5'>
        {discount.map((item, idx) => (
          <div className='w-[300px] flex-[0_0_auto]'>
            <Item key={idx} title={item.name} price={item.price} cover={item.img} des={item.summary} option={{ new: true, discount: item.discount }} />
          </div>
        ))}
      </div>
    </div>
  )
}