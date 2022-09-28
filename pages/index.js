import Nav from '../components/nav';

export default function IndexPage({products}){
    return (
        <div>
            <Nav />
            <section className='text-gray-700 body-font'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='flex flex-wrap -m-4'>
                        the product list will go here.
                    </div>
                </div>
            </section>
        </div>
    )
}