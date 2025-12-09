'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/i18n/config';

interface LanguageSwitcherProps {
    currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: Locale) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1 bg-white rounded-md shadow-sm border-2 border-gray-300 p-0.5">
            {locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition-all duration-200 ${currentLocale === locale
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
