import parse from 'html-react-parser';
import React from "react";
import Moment from "react-moment";
import {ResumePageProps} from "../types/resume";
import {normalizeDate, normalizeFirstCaps, normalizePhoneNum} from "../utils/normalize";
import templateStyles from "./styles/Mono.module.css";
import utilStyles from "./styles/utils.module.css";

let styles = {
  ...templateStyles,
  ...utilStyles,
} // this is to keep utilities styles and template styles separate and make the former available to all templates

export default function Mono({data, theme}: ResumePageProps) {

  const normDate = (date: string) => {
	date = normalizeDate(date)
	return <Moment format="MMM YYYY" date={new Date(date)}/>
  }

  return (
	<main className={styles.container} style={{backgroundColor: theme?.bg?.value ? theme?.bg?.value : ""}}>

	  <header className={styles.header}>
		<h1 className={styles.header1}>{data?.first_name}</h1>
		<h1 className={styles.header1}>{data?.last_name}</h1>
		{data?.title &&
          <>
            <div className={styles.my2}/>
            <h5 className={styles.header5}>{normalizeFirstCaps(data?.title)}</h5>
          </>
		}
	  </header>

	  <section className={`${styles.resume_body} ${styles.mt4}`}>

		<div className={`${styles.section_container} ${styles.minor_section}`}>
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


		<div className={styles.major_section}>
		  <div className={styles.section_container}>
			<FieldHeader>Personal Summary</FieldHeader>
			{parse(data?.cover_letter)}

			{data?.education_history?.length > 1 && <>
              <div className={styles.my6}/>

              <FieldHeader>Education History</FieldHeader>
			  {data?.education_history?.map((item, index) => (
				<div key={index}>
				  {item?.name && <div className={styles.education_container}>
                    <div className={styles.education_title_container}>
                      <h2 className={styles.education_title}>
						{item?.degree && `${item?.degree}, `}{item?.name}
                      </h2>
                      <h3 className={styles.education_location}>
						{item?.state && `${item?.state}, `}{item?.country}
                      </h3>
                    </div>
                    <p className={styles.education_date}>
					  {item?.start_date ? normDate(item?.start_date) : ""}
					  {item?.end_date
						? item?.start_date
						  ? <> - {normDate(item?.end_date)}</>
						  : normDate(item?.end_date)
						: item?.start_date
						  ? ` - Present`
						  : "Present"}
                    </p>
					{item?.description && <div className={styles.mt2}>
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
	<h3 className={styles.minor_field_header}>
	  {children}
	</h3>
  )
}

function FieldHeader({children}: { children: React.ReactNode }) {
  return (
	<h3 className={styles.field_header}>
	  {children}
	  <div className={styles.field_header_underline}/>
	</h3>
  )
}

function FieldContainer({children}: { children: React.ReactNode }) {
  return (
	<div className={styles.field_container}>
	  {children}
	</div>
  )
}