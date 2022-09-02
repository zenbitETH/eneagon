import Link from 'next/link'

export default function page3() {
    return (
        <div>
            page3
            <Link href='/'>
                <a className=''>
                 home
                </a>
            </Link>
        </div>
    )
}