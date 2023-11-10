import Image from 'next/image';
import Link from 'next/link';
import SimpleCard from '@/ui/simplecard';

export default function Home() {
  return (
    <>
      <SimpleCard>
        <div className="grid gap-x-4 grid-cols-4 max-sm:grid-cols-1 justify-center">
          <div className="col-span-1 max-sm:flex max-sm:justify-center">
            <Image
              className="rounded-full"
              src="/photo.webp"
              alt="profile picture"
              priority
              width={160}
              height={160}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="col-span-3 max-sm:col-span-1 max-sm:text-center my-3">
            <h1 className="text-xl font-bold">Nachiket Pusalkar</h1>
            <div>
              <p className="my-3">
                {`Hi! My name is Nachiket and I'm a Full Stack Developer.`}{' '}
              </p>
              <p>{`I live in Montreal, Canada! 🇨🇦`}</p>

              <p className="my-3">
                {`My favourite programming languages are Ruby, Javascript, Python`}
              </p>
            </div>
          </div>
        </div>
      </SimpleCard>
      <SimpleCard>
        <h1 className="text-xl font-bold">{`What I've worked on`}</h1>
        <Link href="/employment/vention">hi click me</Link>
      </SimpleCard>
    </>
  );
}
