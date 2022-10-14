import parse from 'html-react-parser';
import React from "react";
import {ResumePageProps} from "../types/resume";
import {normalizeFirstCaps, normalizePhoneNum} from "../utils/normalize";
import templateStyles from "./styles/Mono.module.css";
import utilStyles from "./styles/utils.module.css";

let styles = {
  ...templateStyles,
  ...utilStyles,
} // this is to keep utilities styles and template styles separate and make the former available to all templates

export default function Mono({data, theme}: ResumePageProps) {

  return (
	<main className={styles.container} style={{backgroundColor: theme?.bg ? theme?.bg : ""}}>

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
              <FieldHeader>Email</FieldHeader>
              <p>{data?.email}</p>
            </FieldContainer>
		  }

		  {data?.phone_number &&
            <FieldContainer>
              <FieldHeader>Phone number</FieldHeader>
              <p>{normalizePhoneNum(data?.phone_number)}</p>
            </FieldContainer>
		  }
		  {(data?.address?.city
			  || data?.address?.state
			  || data?.address?.country
			  || data?.address?.postal_code) &&
            <FieldContainer>
              <FieldHeader>Address</FieldHeader>
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
		  </div>
		</div>


	  </section>
	</main>
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