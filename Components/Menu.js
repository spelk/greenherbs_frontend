import Link from  'next/link';

const Menu = ({ setModalName }) => {

    return(
        <div>
            <Link href={'/sample-page'}>Sample page</Link>
            <span onClick={() => setModalName('AUTHORIZATION') }>Authorization</span>
        </div>
    )
}

export default Menu