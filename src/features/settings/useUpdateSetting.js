import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import {updateSetting as updateSettingApi} from '../../services/apiSettings';
import { toast } from "react-hot-toast";


export  function useUpdateSetting(){
    const queryClient = useQueryClient();
const { mutate: updateSetting, isLoading: isUpdating } =
 useMutation({
  mutationFn: updateSettingApi, 

  onSuccess: () => {
    toast.success(" seeting  successfully edited");
    queryClient.invalidateQueries(["settings"]);
  },
  onError: (err) => toast.error(err.message),
});


return {isUpdating, updateSetting}
}