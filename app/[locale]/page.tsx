import { UserDashboard } from '@/components/UserDashboard';
import { Locale, locales } from '@/i18n/config';

interface PageProps {
    params: Promise<{
        locale: Locale;
    }>;
}

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params;

    return <UserDashboard locale={locale} />;
}
