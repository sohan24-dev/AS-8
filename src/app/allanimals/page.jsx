import AllAnimalsClient from "@/components/SortItem";
import { ApiData } from "@/shared/ApiData";


const AllAnimalsPage = async () => {
    const animals = await ApiData();

    return <AllAnimalsClient animals={animals} />;
};

export default AllAnimalsPage;


