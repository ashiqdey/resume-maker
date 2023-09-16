/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Text,
  Link,
  Image,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { removeHttp } from "./helper";
import commonCss from "./css";

// ----------font----------
const font = {
  defaultSize: 9.5,
  400: "Noto",
  700: "Noto Bold",
};
Font.register({
  family: font["400"],
  src: "/fonts/noto-serif/NotoSerif-Regular.ttf",
});
Font.register({
  family: font["700"],
  src: "/fonts/noto-serif/NotoSerif-Bold.ttf",
});

// ----------END font----------

const COLOR = "#edeeef";

function CreatePdf({
  type,
  firstName,
  lastName,
  address,
  email,
  mobile,
  jobTitle = "Job test",
  bio = "About user",
  skills = ["Skill 1", "Skill 2"],
  hobbies = [],
  languages = [],
  profileImage = "",
  education = [],
  experience = [],

  website,
  portfolio,
  linkedin,
  github,
  instagram,
  twitter,
  crunchBase,

  config,
  image = "/img/resume/bg-3.jpg",
  qr = "",
  ...props
}) {
  // ----------styles----------
  const css = commonCss({
    color: config?.color || COLOR,
    font,
  });
  // color: #212529;
  const s = StyleSheet.create({
    ...css,

    h1: { fontSize: 20, fontWeight: 700, fontFamily: font["700"] },
    h2: { fontSize: 20, fontWeight: 700, fontFamily: font["700"] },
    h3: { fontSize: 13, fontWeight: 700, fontFamily: font["700"] },
    h4: { fontSize: 12, fontWeight: 700, fontFamily: font["700"] },
    h5: { fontSize: 9, fontWeight: 700, fontFamily: font["700"] },
    font12: { fontSize: 12 },

    hr: {
      width: "100%",
      backgroundColor: "#fff",
      margin: "3px auto",
      height: 3,
      borderTop: "0.6px solid black",
      borderBottom: "0.6px solid black",
    },
    qr: {
      height: 60,
      width: 60,
    },

    item_dots: {
      borderBottom: "1.2 dotted #000",
      margin: "0 10px",
      flexGrow: 9,
      opacity: 0.5,
    },
    bgSecondary: {
      backgroundColor: "#f2f2f2",
      padding: "2.5px 0 1.5px",
      textAlign: "center",
      fontsize: 10,
      marginTop: 7,
      marginBottom: 7,
    },
    experience_title: {
      width: "450px",
      alignItems: "baseline",
    },
    linkText: {
      color: "#000",
      textDecoration: "none",
    }
  });
  // ----------END styles----------

  const getClass = (classes) => {
    let styleObj = {};
    classes.split(" ").forEach((className) => {
      styleObj = { ...styleObj, ...(s[className] || {}) };
    });
    return styleObj;
  };

  return (
    <Document author={firstName} title={firstName} subject={`Resume of ${firstName}`}>
      <Page size="A4" {...props} style={s.page}>
        {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )}

        <View style={getClass("column")}>
          <View style={getClass("mb10 textCenter")}>
            <Text style={getClass("h1 uppercase regular")}>{firstName} {lastName}</Text>
            <Text style={getClass("h4")}>{jobTitle}</Text>
            {config.location && <Text>{address}</Text>}
          </View>

          <View style={getClass("row small jcsb pt3 font11 mb5")}>
            <Text>{email}</Text>
            <Text>{mobile}</Text>
          </View>

          <Divider style={s.hr} />

          <View style={getClass("mb10")}>
            <Text style={getClass("bgSecondary")}>PROFILE</Text>
            {/*bg*/}
            <Text style={getClass("textCenter")}>{bio}</Text>
          </View>

          <View style={getClass("mb15")}>
            <Text style={getClass("bgSecondary")}>PROFESSIONAL EXPERIENCES</Text>
            {experience.map((item, i) => (
              <ExpItems
                key={`exp-${i}`}
                getClass={getClass}
                title={item.company}
                subtitle={item.position}
                date={item.date}
                details={item.details}
                city={item?.city || ""}
              />
            ))}
          </View>
          {/*experience*/}

          {
            config.education && (
              <View style={getClass("mb15")}>
                <Text style={getClass("bgSecondary")}>EDUCATION</Text>
                {education.map((item, i) => (
                  <ExpItems
                    key={`edu-${i}`}
                    getClass={getClass}
                    title={item.school}
                    subtitle={`${item.course} ${item?.major || ""}`}
                    date={item.date}
                    details={item.details}
                    city={item?.city || ""}
                  />
                ))}
              </View>
            )
            // Education
          }

          {
            config.skills && (
              <View style={getClass("mb15")}>
                <Text style={getClass("bgSecondary")} wrap={false}>
                  SKILLS
                </Text>
                <TwoColumn data={skills} getClass={getClass} type="skills" />
              </View>
            )
            // skills
          }

          {
            config.links && (
              <View style={getClass("mb15")} wrap={false}>
                <Text style={getClass("bgSecondary mb15")}>LINKS</Text>
                <TwoColumn
                  data={[
                    website,
                    portfolio,
                    linkedin,
                    github,
                    instagram,
                    twitter,
                    crunchBase,
                  ]}
                  getClass={getClass}
                  type="link"
                />
              </View>
            )
            // links
          }

          {
            config.languages && (
              <View style={getClass("mb15")} wrap={false}>
                <Text style={getClass("bgSecondary mb15")}>LANGUAGES</Text>
                <TwoColumn
                  data={languages}
                  getClass={getClass}
                  type="languages"
                />
              </View>
            )
            // LANGUAGES
          }

          <View style={getClass("mt30")}>
            <Image style={getClass("qr")} src={qr} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CreatePdf;

const Divider = ({ style }) => <View style={style} />;

const TwoColumn = ({ data, getClass, type }) => {
  if (!data || data?.length === 0) {
    return null;
  }

  data = data.filter(Boolean)

  let perRow = Math.ceil(data.length / 2);

  const columns = [[...data.slice(0, perRow)], [...data.slice(perRow)]];

  return (
    <View style={getClass("row")}>
      {columns.map((column, i) => (
        <View key={i} style={getClass(`col6 ${i % 2 === 0 ? "pr15" : "pl15"}`)}>
          {
            // render each skill
            type === "skills" &&
            column.map((e, i) => (
              <View
                key={`k-${i}-${e}`}
                style={getClass("row lineHeight1 mb5")}
              >
                <Text>{e}</Text>
                <Text style={getClass("item_dots")} />
              </View>
            ))
          }
          {
            // render each link
            type === "link" && column.map((e, i) => (<Link
              key={`k-${i}`}
              style={getClass("linkText")}
              src={e}
            >
              <Text>{removeHttp(e)}</Text>
            </Link>))
          }
          {
            // render each language
            type === "languages" &&
            column.map((e, i) => (
              <View key={`k-${i}-${e}`} style={getClass("row lineHeight1 mb5")}>
                <Text>{e.language}</Text>
                <Text style={getClass("item_dots")} />
                <Text style={getClass("textRight opacity06")}>{e.level}</Text>
              </View>
            ))
          }
        </View>
      ))}
    </View>
  );
};

const ExpItems = ({ title, subtitle, city, details, date, getClass }) => {
  return (
    <View style={getClass("mt5 mb10")} wrap={false}>
      <View style={getClass("row")}>
        <View style={getClass("experience_title row")}>
          <Text style={getClass("font12 lineHeight1")}>{subtitle} at {title}</Text>
          <Text style={getClass("item_dots")} />
        </View>

        <View style={getClass("column w101 opacity60 lineHeight textRight")}>
          <Text>{date}</Text>
          <Text>{city}</Text>
        </View>
      </View>
      <Text>{details}</Text>
    </View>
  );
};
