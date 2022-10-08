import React, {ChangeEvent, ReactNode} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {ResumeEditorProps} from "../../types/resume";
import CheckBox from "../CheckBox";
import InputField from "../InputField";

export default function ResumeEditor({data, setData}: ResumeEditorProps) {

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
	const {name, value} = e.target;
	const address = {...data.address, [name]: value};
	setData(() => ({
	  ...data,
	  address: {
		...address,
	  },
	}))
  }

  return (
	<>
	  <SectionHeader>Personal details</SectionHeader>
	  <div className="w-full grid grid-cols-2 gap-4">
		<InputField name="first_name" data={data} label="First name" onChange={setData}/>
		<InputField name="last_name" data={data} label="Last name" onChange={setData}/>
		<InputField name="title" data={data} label="Professional title" onChange={setData}/>
		<InputField type="tel" name="phone_number" data={data} label="Phone number" onChange={setData}/>
		<CheckBox name="show_email" label="Display E-mail on resume" data={data} onChange={setData}/>
	  </div>

	  <div className="my-6">
		<SectionHeader>
		  Address
		</SectionHeader>
		<div className="w-full grid grid-cols-2 gap-4">
		  <InputField name="city" data={data?.address} label="City" onChange={handleAddressChange} isNested={true}/>
		  <InputField name="state" data={data?.address} label="State" onChange={handleAddressChange} isNested={true}/>
		  <InputField name="postal_code" data={data?.address} label="Postal Code" onChange={handleAddressChange} isNested={true}/>
		</div>
	  </div>

	  <div className="my-6">
		<SectionHeader>
		  Personal summary
		</SectionHeader>
		<ReactQuill
		  theme="snow"
		  value={data.cover_letter}
		  className="col-span-2 h-[250px]"
		  onChange={(value) => setData({...data, cover_letter: value})}
		/>
	  </div>
	</>
  )
}

const SectionHeader = ({children}: { children: ReactNode }) => (
  <>
	<h2 className="text-xl font-bold">{children}</h2>
	<hr className="text-neutral-700 my-4"/>
  </>
)