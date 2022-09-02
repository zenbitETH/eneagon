import Link from 'next/link'

export default function page1() {
    return (
        <div>
            page1
            <Link href='/'>
                <a className=''>
                 home
                </a>
            </Link>
        </div>
    )
}