import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image src="./images/110034.jpg" width={400} length={400} alt='myprofilepic'/>

    </section>
  )
}
