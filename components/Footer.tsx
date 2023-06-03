export default function Footer({dictionary}: {
    dictionary: {
        contactUs: string,
        rights: string,
        issue: string
    }
}) {
    return (
        <footer>
            <nav>
                <span>{dictionary.contactUs} - <a
                    href="mailto: n.savchenkoo73@gmail.com">n.savchenkoo73@gmail.com</a></span>
                <span>{dictionary.issue} <a
                    href="https://github.com/woodemai/new_education_nextjs13/issues/new/choose"
                    target="_blank">GitHub</a></span>
                <span>new education 2023 - {dictionary.rights}</span>
            </nav>
        </footer>
    )
}