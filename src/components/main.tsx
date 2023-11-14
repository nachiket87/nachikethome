import Image from 'next/image';
import Link from 'next/link';
import { demos } from '@/lib/demo';
import SimpleCard from '@/components/simplecard';
import getDictionary from '@/lib/dictionaries';

export default async function Main({ lang }: { lang: string }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <SimpleCard>
        <div className="flex flex-wrap gap-4 max-sm:justify-center">
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
          <div className="flex flex-col justify-center max-sm:text-center">
            <h1 className="text-xl font-bold">Nachiket Pusalkar</h1>
            <div>
              <p className="my-3">{dict.bio.intro}</p>
              <p>{dict.bio.residence}</p>

              <p className="my-3">{dict.bio.favourite}</p>
            </div>
          </div>
          <div className="flex flex-auto justify-end gap-4 items-start max-sm:justify-center">
            <Link
              href={lang === 'en' ? '/fr' : '/'}
              className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
            >
              {lang === 'en' ? 'Fr' : 'En'}
            </Link>
          </div>
        </div>
      </SimpleCard>

      <SimpleCard>
        <div className="space-y-5">
          <h1 className="text-xl font-medium text-gray-300">
            {dict.experience.header}
          </h1>

          <div className="space-y-10 text-white">
            {demos[lang === 'en' ? 'en' : 'fr'].map((section) => {
              return (
                <div key={section.name} className="space-y-5">
                  <div className="line-clamp-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
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
                          <div className="line-clamp-3 font-medium text-gray-200 group-hover:text-gray-50">
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
      <SimpleCard>
        <div className="space-y-8">
          <h1 className="text-xl font-medium text-gray-300">
            Contact Information
          </h1>

          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/nachiketpusalkar"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/In-White-72.webp"
                width={360}
                height={360}
                style={{ width: 'auto', height: 'auto' }}
                alt="Linkedin Logo"
                loading="lazy"
              />
            </Link>
            <Link
              href="https://www.github.com/nachiket87"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/github-mark-white.webp"
                width={72}
                height={72}
                style={{ width: 'auto', height: 'auto', maxWidth: '36px' }}
                alt="Github Logo"
                loading="lazy"
              />
            </Link>
            <Link
              href="https://twitter.com/nachiketp87"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/x-logo-white.webp"
                width={72}
                height={72}
                style={{ width: 'auto', height: 'auto', maxWidth: '36px' }}
                alt="X logo"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </SimpleCard>
    </>
  );
}
