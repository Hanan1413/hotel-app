import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabinToEdit = {} }) {
  const {isCreating, createCabin}= useCreateCabin();
 
  //  edtiting
  const{isEditing, editCabin} = useEditCabin();

  const isWorking = isCreating || isEditing;

  const queryClient = useQueryClient();

  // Destructuring 'cabinToEdit' object to extract 'id' (renamed as 'editId')
  // and the rest of the properties assigned to 'editValues'.
  const { id: editId, ...editValues } = cabinToEdit;

  // Checks if 'editId' exists and converts it to a boolean (true if 'editId' is truthy, false if not).
  // This helps determine whether the current session is an edit session or a new session.
  const isEditSeesion = Boolean(editId);

  // to enter data of current option we use opition

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSeesion ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    // Check if data.image exists and has files, if not, handle accordingly
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSeesion) editCabin({newCabinData: {...data, image}, id: editId},
      {
        onSuccess: () => {
          reset(); // Reset the form after successful editing

        }
      }
    );
    else createCabin({ ...data, image: image },
      {onSuccess: (data) => {
        console.log(data);

        reset();

      },
      
      }
    );

    
  }

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This field is required" })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
        />
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: {
              value: (value) =>
                value <= getValues().regularPrice ||
                "Discount should be less than the regular price",
            },
          })}
        />
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSeesion ? false : "This field is requrird",
          })}
        />
      </FormRow>

      <FormRow>
        
        <Button type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSeesion ? "Edit cabin" : "Create new  cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
