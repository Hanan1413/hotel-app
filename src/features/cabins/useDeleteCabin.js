import { useMutation, useQueryClient } from "@tanstack/react-query";
import{ toast} from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";



export function useDeleteCabin(){
const queryClient = useQueryClient();

const { isLoading: isDeleting, mutate: deleteCabin,
  error,
} = useMutation({
  mutationFn: (cabinId) => deleteCabinApi(cabinId),
  onSuccess: () => {
    toast.success("Cabin deleted successfully!"); 
    queryClient.invalidateQueries(["cabins"]);


  },
  onError: (error) => {
    toast.error(error.message)
    console.error("Delete failed:", error);
  },
});


return {isDeleting, deleteCabin}
}