import Programs from 'components/programs/programs'

export default function Page() {
  return (
    <main className="w-full h-screen pt-[160px] relative">
      <img className='absolute left-0 top-0 w-full h-full object-cover opacity-40 z-[-999]' src='programs/back.jpg' />
      <Programs />
    </main>
  )
}