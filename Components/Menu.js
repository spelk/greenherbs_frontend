import Link from  'next/link';

const Menu = ({ setModalName }) => {

    return(
        <div>
            <Link href={'/sample-page'}>Sample page</Link><br />
            <Link href={'/'}>Home</Link><br />
            <Link href={'/test-page'}>Test</Link><br />
            <span onClick={() => setModalName('AUTHORIZATION') }>Authorization</span><br />
        </div>
    )
}

export default Menu