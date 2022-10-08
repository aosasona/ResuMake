import React, {ChangeEvent, ReactNode, useMemo} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import countryList from "react-select-country-list";
import {educationalDegrees} from "../../data/education";
import {EducationHistoryInterface, ResumeEditorProps} from "../../types/resume";
import {getSelectedDegree} from "../../utils/editor";
import CheckBox from "../Form/CheckBox";
import InputField from "../Form/InputField";
import Selector from "../Form/Selector";


export default function ResumeEditor({data, setData}: ResumeEditorProps) {

  const countries = useMemo(() => countryList().getData(), []);

  const selectedCountry = countries.find((obj: any) => obj.label === data?.address?.country) as any

  const educationHistory: EducationHistoryInterface[] = [
	...data?.education_history,
	{
	  name: "",
	  degree: "",
	  start_date: "",
	  end_date: "",
	  current: false,
	  description: "",
	},
  ]

  const handleEducationHistoryChange = (index: number, key: string, value: string | boolean) => {
	const newEducationHistory: EducationHistoryInterface[] | any = [...educationHistory];
	newEducationHistory[index][key] = value;
	setData({...data, education_history: newEducationHistory});
  }

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

  const countryChangeHandler = (e: any, _: any) => {
	const address = {...data.address, country: e?.label};
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
		  <InputField
			name="city"
			data={data?.address}
			label="City"
			onChange={handleAddressChange}
			isNested={true}
		  />
		  <InputField
			name="state"
			data={data?.address}
			label="State"
			onChange={handleAddressChange}
			isNested={true}
		  />
		  <InputField
			name="postal_code"
			data={data?.address}
			label="Postal Code"
			onChange={handleAddressChange}
			isNested={true}
		  />
		  <Selector
			name="country"
			value={selectedCountry}
			options={countries}
			placeholder="Country"
			onChange={countryChangeHandler}
		  />
		</div>
	  </div>

	  <div className="my-6">
		<SectionHeader>
		  Personal summary
		</SectionHeader>
		<ReactQuill
		  theme="snow"
		  value={data.cover_letter}
		  className="col-span-2 py-2"
		  onChange={(value) => setData({...data, cover_letter: value})}
		/>
	  </div>

	  <div className="my-6">
		<SectionHeader>
		  Education
		</SectionHeader>
		{educationHistory.map((item, index) => (
		  <div key={index} className="w-full grid grid-cols-2 gap-4">
			<InputField
			  name="name"
			  data={data?.education_history[index]}
			  label="Institution's name"
			  onChange={(e) => handleEducationHistoryChange(index, e.target.name, e.target.value)}
			  isNested={true}
			/>
			<Selector
			  name="degree"
			  value={getSelectedDegree(item.degree) as any || null}
			  options={educationalDegrees}
			  placeholder="Educational degree"
			  onChange={(e: any, _: any) => handleEducationHistoryChange(index, "degree", e?.label)}
			/>
		  </div>
		))}
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