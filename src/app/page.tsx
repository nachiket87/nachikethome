import Image from 'next/image';
import Link from 'next/link';
import { demos } from '@/lib/demo';

export default function Home() {
  return (
    <>
      <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
        <div className="rounded-lg bg-black p-3.5">
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
        </div>
      </div>
      <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
        <div className="rounded-lg bg-black p-3.5">
          <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">
              {`What I've worked on`}
            </h1>

            <div className="space-y-10 text-white">
              {demos.map((section) => {
                return (
                  <div key={section.name} className="space-y-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {section.name}
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {section.items.map((item) => {
                        return (
                          <Link
                            href={`/${item.slug}`}
                            key={item.name}
                            className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                          >
                            <div className="font-medium text-gray-200 group-hover:text-gray-50">
                              {item.name}
                            </div>

                            {item.description ? (
                              <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                                {item.description}
                              </div>
                            ) : null}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
