import React from "react";
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import {useUpdateSetting } from './useUpdateSetting';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const{isLoading, 
    settings:{
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,

    } = {},
  } = useSettings();
  const {isUpdating, updateSetting} = useUpdateSetting();


  function handleUpdate(e, field) {
    const {value} = e.target;
    console.log(value)

    if(!value) return;
    updateSetting({[field]: value});
  }
  
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e=>handleUpdate(e, 'mainBookingLength')} disabled={isUpdating} />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxGuestsPerBooking} onBlur={e=>handleUpdate(e, 'maxGuestsPerBooking')} disabled={isUpdating} />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} disabled={isUpdating} 
         onBlur={e=>handleUpdate(e, 'mainBookingLength')} 
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
