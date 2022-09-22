import {Document, Font, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {FC, ReactNode} from "react";
import {ResumePageProps} from "../types/resume";

Font.register({
  family: "Quicksand",
  src: require("../fonts/Quicksand/static/Quicksand-Light.ttf"),
  fontWeight: "light",
})
Font.register({
  family: "Quicksand",
  src: require("../fonts/Quicksand/static/Quicksand-Regular.ttf"),
  fontWeight: "normal",
})
Font.register({
  family: "Quicksand",
  src: require("../fonts/Quicksand/static/Quicksand-Medium.ttf"),
  fontWeight: "medium",
})
Font.register({
  family: "Quicksand",
  src: require("../fonts/Quicksand/static/Quicksand-SemiBold.ttf"),
  fontWeight: "semibold",
})
Font.register({
  family: "Quicksand",
  src: require("../fonts/Quicksand/static/Quicksand-Bold.ttf"),
  fontWeight: "bold",
})

const Mono: FC<ResumePageProps> = ({theme = {}, data}) => {

  const colors = {
	primary: theme?.colors?.primary || "#000000",
	secondary: theme?.colors?.secondary || "#CCCCCC",
	tertiary: theme?.colors?.tertiary || "#AAAAAA",
  }

  const styles = StyleSheet.create({
	page: {
	  backgroundColor: theme?.bg || "#FFFFFF",
	  paddingHorizontal: 30,
	  paddingVertical: 30,
	},
	nameText: {
	  fontSize: 42,
	  fontWeight: "semibold",
	  color: colors?.primary,
	  fontFamily: "Quicksand",
	},
	professional_title: {
	  fontSize: 12,
	  color: colors?.tertiary,
	  fontFamily: "Quicksand",
	  fontWeight: "medium",
	  paddingVertical: 12,
	  paddingHorizontal: 1,
	},
	main: {
	  display: "flex",
	  flexDirection: "row",
	  flexWrap: "wrap",
	  justifyContent: "space-between",
	  alignItems: "flex-start",
	  width: "100%",
	  borderTopWidth: 0.5,
	  borderTopColor: colors?.secondary,
	  borderTopStyle: "solid",
	  marginTop: 10,
	},
	minor_section: {
	  width: "35%",
	  height: "100%",
	  borderRightWidth: 0.5,
	  borderRightColor: colors?.secondary,
	  borderRightStyle: "solid",
	  paddingVertical: 15,
	  paddingRight: 8,
	},
	major_section: {
	  width: "65%",
	  paddingLeft: 8,
	},
	body: {
	  fontSize: 10,
	  color: colors?.primary,
	  fontFamily: "Quicksand",
	  fontWeight: "normal",
	  opacity: 0.8,
	  paddingVertical: 4,
	},
  })
  return (
	<Document
	  title={`${data?.first_name || "Nice"} ${data?.last_name || "User"}`}
	  author="ResuMake"
	  creator="ResuMake"
	>
	  <Page size="A4" wrap={true} style={styles.page}>
		<View>
		  {data?.first_name && <Text style={styles.nameText}>{data?.first_name}</Text>}
		  {data.last_name && <Text style={styles.nameText}>{data?.last_name}</Text>}
		</View>
		{data?.title && <Text style={styles.professional_title}>{data?.title}</Text>}
		<View style={styles.main}>
		  <View style={styles.minor_section}>
			<View>
			  <SectionHeader>Details</SectionHeader>
			  {(data?.email && data.show_email) &&
                <>
                  <SubHeader>Email</SubHeader>
                  <Text style={styles.body}>{data?.email}</Text>
                </>}
			  {data?.phone_number && <>
                <SubHeader>Phone</SubHeader>
                <Text style={styles.body}>{data?.phone_number}</Text>
              </>}
			</View>
		  </View>
		  <View style={styles.major_section}>
		  </View>
		</View>
	  </Page>
	</Document>
  )
}

const SectionHeader: FC<{ children: ReactNode }> = ({children}) => {
  const styles = StyleSheet.create({
	section_header: {
	  fontSize: 16,
	  fontWeight: "bold",
	  fontFamily: "Quicksand",
	},
	section_header_divider: {
	  borderBottomWidth: 3,
	  borderBottomColor: "#000000",
	  borderBottomStyle: "solid",
	  width: 30,
	  marginTop: 3,
	},
  })
  return (
	<View>
	  <Text style={styles.section_header}>{children?.toString()?.toUpperCase()}</Text>
	  <View style={styles.section_header_divider}/>
	</View>
  )
}

const SubHeader: FC<{ children: ReactNode }> = ({children}) => {
  const styles = StyleSheet.create({
	sub_header: {
	  fontSize: 12,
	  fontWeight: "bold",
	  fontFamily: "Quicksand",
	  marginTop: 10,
	  marginBottom: 2,
	},
  })
  return (
	<Text style={styles.sub_header}>{children?.toString()?.toUpperCase()}</Text>
  )
}


export default Mono;