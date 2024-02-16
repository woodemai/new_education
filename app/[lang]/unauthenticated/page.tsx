import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import UnAuth from "@/components/widgets/UnAuth";

interface Props { params: { lang: Locale } }

const UnAuthenticated = async ({ params }: Props) => {
    const { unauthenticated } = await getDictionary(params.lang);
    return <UnAuth dictionary={unauthenticated} />
}

export default UnAuthenticated