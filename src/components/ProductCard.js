import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";


export default function ProduceCard() {
    return (
        <Card className="w-96 mx-2 border-1 border-black border-solid ">
            <CardHeader color="blue" className="relative h-54">
                <img
                    src="/img/H.potter.jpeg"
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    Harry Potter and the Philosphers Stone
                </Typography>


                <Typography>
                    Movie Rating
                </Typography>
                <div className="save">
                    <div className="w-72">
                        <Select label="Rate Me" color="black" class="accent-pink-500" >
                            <Option>🍌🍌🍌🍌🍌</Option>
                            <Option>🍌🍌🍌🍌</Option>
                            <Option>🍌🍌🍌</Option>
                            <Option>🍌🍌</Option>
                            <Option>🍌</Option>
                        </Select>
                    </div>
                   
                    <a href="#_" class="relative inline-flex items-center justify-start px-3 py-2. overflow-hidden font-medium transition-all bg-amber-200 rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-400 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-amber-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<button class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">save</button>
</a>
                     
                </div>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small"></Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Banameter: reviews(169) 71.9%🍌
                </Typography>
            </CardFooter>
        </Card>
    );
}