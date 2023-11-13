import Image from 'next/image';
import Link from 'next/link';
import { demos } from '@/lib/demo';
import SimpleCard from '@/components/simplecard';

export default function Home() {
  return (
    <>
      <SimpleCard>
        <div className="flex items-center flex-wrap gap-4 max-sm:justify-center">
          <div>
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
          <div className="max-sm:text-center">
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
                          href={`${item.slug}`}
                          key={item.name}
                          className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="font-medium text-gray-200 group-hover:text-gray-50">
                            {item.name}{' '}
                            {item.dates ? (
                              <span className="font-thin italic">
                                - {item.dates}
                              </span>
                            ) : (
                              ''
                            )}
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
      </SimpleCard>
    </>
  );
}
