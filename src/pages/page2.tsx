import Link from 'next/link'

export default function page2() {
    return (
        <div>
            page2
            <Link href='/'>
                <a className=''>
                 home
                </a>
            </Link>
        </div>
    )
}