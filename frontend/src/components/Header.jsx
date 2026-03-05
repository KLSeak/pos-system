import { TiThMenu } from "react-icons/ti";

function Header() {
    return (
        <div className='bg-rose-300 w-full'>
            <div className='flex justify-between items-center px-4 py-3 md:px-6 lg:px-8'>
                <div className='flex gap-2 items-center'>
                    <label htmlFor="my-drawer-3" className="lg:hidden cursor-pointer">
                        <TiThMenu className='size-5 md:size-6' />
                    </label>
                    <p className='font-semibold text-sm md:text-base lg:text-xl'>
                        ប្រព័ន្ធគ្រប់គ្រង ដេប៉ូគ្រឿងសំណង់ (KS)
                    </p>
                </div>
                <div className='flex gap-2'>
                    <button className="btn btn-soft btn-secondary btn-xs md:btn-sm lg:btn-md">POS</button>
                    <button className="btn btn-secondary btn-xs md:btn-sm lg:btn-md">Super</button>
                </div>
            </div>
        </div>
    );
}

export default Header;