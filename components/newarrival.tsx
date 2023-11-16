import db from 'db/data.json'
import Title from './title';
import Item from './item';

export default function () {
  const discount = db.newarrivals;
  return (
    <div className='mt-32 overflow-hidden'>
      <div className='px-5 mb-5'>
        <Title text='New Arrival' color='var(--red)' />
      </div>
      <div className='px-5 flex gap-5 flex-wrap h-[400px] overflow-hidden'>
        {discount.map((item, idx) => (
          <div className='basis-[300px] grow'>
            <Item key={idx} title={item.name} price={item.price} cover={item.img} des={item.summary} option={{ new: true, discount: item.discount }} />
          </div>
        ))}
      </div>
    </div>
  )
}