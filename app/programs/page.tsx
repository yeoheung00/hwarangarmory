import db from 'db/programs.json'

const Subject = ({ title, cover }: { title: string, cover: string }) => {
  return (
    <div className='w-[calc((100%_-_40px)_/_3)] mb-16'>
      <img className='w-full h-auto' src={cover} alt={title}></img>
      <p className='w-full text-center text-white p-4 text-lg'>{title}</p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="w-screen h-screen bg-black">

    </main>
  )
}