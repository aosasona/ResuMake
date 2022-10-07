import {ResumePageProps} from "../types/resume";
import styles from "./styles/Mono.module.css";

export default function Mono({data}: ResumePageProps) {
  return (
	<div className={styles.container}>
	  <h1 className={styles.h1}>{data?.first_name}</h1>
	  <h1>{data?.last_name}</h1>
	</div>
  )
}