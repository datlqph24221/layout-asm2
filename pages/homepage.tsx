import Product from "../components/product"

const Homepage = () => {
    return <div className="container mx-auto">
        <div className='my-10'>
            <img src="./banner.png" alt="" className='' />
        </div>
        <h1 className="mb-10 text-2xl">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
}

export default Homepage