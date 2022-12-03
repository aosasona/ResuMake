import parse from 'html-react-parser';
import React from "react";
import Moment from "react-moment";
import {ResumePageProps} from "../types/resume";
import {normalizeDate, normalizeFirstCaps, normalizePhoneNum} from "../utils/normalize";


export default function Mono({data, theme}: ResumePageProps) {

	const normDate = (date: string) => {
		date = normalizeDate(date)
		return <Moment format="MMM YYYY" date={new Date(date)}/>
	}

	return (
	  <main className="w-full min-h-screen text-white" style={{backgroundColor: theme?.bg?.value ? theme?.bg?.value : "#232B35"}}>

		  <header className="">
			  <h1 className="">{data?.first_name}</h1>
			  <h1 className="">{data?.last_name}</h1>
			  {data?.title &&
				<>
					<div className=""/>
					<h5 className="">{normalizeFirstCaps(data?.title)}</h5>
				</>
			  }
		  </header>

		  <section className="">

			  <div className="">
				  {data.show_email &&
					<FieldContainer>
						<MinorFieldHeader>Email</MinorFieldHeader>
						<p>{data?.email}</p>
					</FieldContainer>
				  }

				  {data?.phone_number &&
					<FieldContainer>
						<MinorFieldHeader>Phone number</MinorFieldHeader>
						<p>{normalizePhoneNum(data?.phone_number)}</p>
					</FieldContainer>
				  }
				  {(data?.address?.city
					  || data?.address?.state
					  || data?.address?.country
					  || data?.address?.postal_code) &&
					<FieldContainer>
						<MinorFieldHeader>Address</MinorFieldHeader>
						{data?.address?.city && <p>{data?.address?.city}</p>}
						{data?.address?.state && <p>{data?.address?.state}</p>}
						{data?.address?.country && <p>{data?.address?.country}</p>}
						{data?.address?.postal_code && <p>{data?.address?.postal_code}</p>}
					</FieldContainer>
				  }
			  </div>


			  <div className="">
				  <div className="">
					  <FieldHeader>Personal Summary</FieldHeader>
					  {parse(data?.cover_letter)}

					  {data?.education_history?.length > 1 && <>
						  <div className=""/>

						  <FieldHeader>Education History</FieldHeader>
						  {data?.education_history?.map((item, index) => (
							<div key={index}>
								{item?.name && <div className="">
									<div className="">
										<h2 className="">
											{item?.degree && `${item?.degree}, `}{item?.name}
										</h2>
										<h3 className="">
											{item?.state && `${item?.state}, `}{item?.country}
										</h3>
									</div>
									<p className="">
										{item?.start_date ? normDate(item?.start_date) : ""}
										{item?.end_date
										  ? item?.start_date
											? <> - {normDate(item?.end_date)}</>
											: normDate(item?.end_date)
										  : item?.start_date
											? ` - Present`
											: "Present"}
									</p>
									{item?.description && <div className="">
										{parse(item?.description)}
									</div>}
								</div>}
							</div>
						  ))}
					  </>}
				  </div>
			  </div>

		  </section>
	  </main>
	)
}

function MinorFieldHeader({children}: { children: React.ReactNode }) {
	return (
	  <h3 className="">
		  {children}
	  </h3>
	)
}

function FieldHeader({children}: { children: React.ReactNode }) {
	return (
	  <h3 className="">
		  {children}
		  <div className=""/>
	  </h3>
	)
}

function FieldContainer({children}: { children: React.ReactNode }) {
	return (
	  <div className="">
		  {children}
	  </div>
	)
}