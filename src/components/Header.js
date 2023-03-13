// import background from '../images/bad-banana-banner.jpeg';
// style={{ backgroundImage: `url(${background})
import {
    Input,
    Button,
} from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {

    return (
        // create the main hero section
        <section className="relative bg-grey-100"   style={{ }} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20" > 

                    <div className="mx-auto text-center pb-12 md:pb-10 sm:pb-2 sm:px-2 pt-10 bg-amber-200 text-black items-center rounded-md font-bold" >
                        <h1 className="h1">
                            SEARCH A MOVIE
                        </h1>
                        <div className='lg:flex max-w-3xl mx-auto mt-6 gap-1'>
                            <Input size="" label="Title" className='mr-2' />
                            <Button  variant="gradient" color="brown" className="flex items-center gap-2">
                                Search <MagnifyingGlassIcon strokeWidth={2} className="h-4 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;