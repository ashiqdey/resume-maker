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
  "400": "Lato",
  "700": "Lato Bold",
}
Font.register({
  family: font["400"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
Font.register({
  family: font["700"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
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

  const s = StyleSheet.create({
    ...css,

    title: {
      ...css.h1,
      fontSize: 15,
      margin: "15px 0 0",
      textAlign: "center",
      width: "100%",
      textTransform: "uppercase",
    },
    hr: {
      width: "100%",
      height: "0.8px",
      margin: "30px auto",
      backgroundColor: "#333333",
      margin: "3px auto",
      marginBottom: "10px",
    },
    qr: {
      height: 50,
      width: 50,
      top: 0,
      right: 0,
      position: "absolute",
    },
    experience_title: {
      width: "450px",
    },
    bulletPoint: {
      height: 4,
      width: 4,
      backgroundColor: "#000",
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
      borderRadius: 4,
    },

    linkText: {
      color: "#000",
      textDecoration: "none"
    }
  });
  // ----------END styles----------

  const getClass = (classes) => {
    let styleObj = {};
    classes.split(" ").forEach(className => {
      styleObj = { ...styleObj, ...(s[className] || {}) }
    });
    return styleObj;
  }


  return (
    <Document author={firstName} title={firstName} subject={`Resume of ${firstName}`}>
      <Page size="A4" {...props} style={s.page}>
        {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )}

        <View style={getClass("column")}>
          <Image style={getClass("qr")} src={qr} />

          <View style={getClass("textCenter mt10")}>
            <Text style={getClass("h3")}>{firstName} {lastName}</Text>
          </View>

          <View style={getClass("textCenter row jcc mb10")} >
            <Text>{email}</Text>

            {/* {config.phone && <>
              <View style={s.bulletPoint} />
              <Text>{mobile}</Text>
            </>} */}

            {config.location && <>
              <View style={s.bulletPoint} />
              <Text>{address}</Text>
            </>}
          </View>

          <Divider style={getClass("hr")} />
          <View style={s.mt5}>
            <Text>{bio}</Text>
          </View>

          {config.experience && (
            <View>
              <Text style={getClass("title")}>Professional Experiences</Text>
              <Divider style={getClass("hr")} />

              {experience.map((item, i) => (
                <ExpItems
                  key={`exp-${i}`}
                  getClass={getClass}
                  title={item.company}
                  subtitle={item.position}
                  date={item.date}
                  details={item.details}
                />
              ))}
            </View>
          )}


          {
            config.education && <View style={s.mt30}>
              <Text style={getClass("title")}>Education</Text>
              <Divider style={getClass("hr")} />
              {education.map((item, i) => (
                <ExpItems
                  key={`edu-${i}`}
                  getClass={getClass}
                  title={item.school}
                  subtitle={item.course}
                  date={item.date}
                  details={item.details}
                />
              ))}
            </View>
          }

          {
            config.skills && (
              <View style={s.mb30} wrap={false}>
                <Text style={getClass("title")}>Professional Skills</Text>
                <Divider style={getClass("hr")} />
                <Text style={getClass("mr2")}>{skills.join(" - ")}</Text>
              </View>
            )
            // END of skills
          }

          {
            config.hobbies && (
              <View style={s.mb50} wrap={false}>
                <Text style={getClass("title")}>Hobbies</Text>
                <Divider style={getClass("hr")} />
                <Text>{hobbies.join(" - ")}</Text>
              </View>
            )
            // END of hobbies
          }

          {/* {
            config.languages && (
              <View style={s.mb30} wrap={false}>
                <Text style={getClass("title")}>Languages</Text>
                <Divider style={getClass("hr")} />
                <Text>{languages.map(e => e.language).join(" - ")}</Text>
              </View>
            )
            // END of languages
          } */}

          {
            config.links && (
              <View wrap={false}>
                <Text style={getClass("title")}>Links</Text>
                <Divider style={getClass("hr")} />
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
            // END of links
          }
        </View>
      </Page>
    </Document>
  );
}

export default CreatePdf;

const Divider = ({ style }) => <View style={style} />;

const Item = ({ children, getClass }) => {
  if (!children || children?.length === 0) {
    return null;
  }

  return (
    <View style={getClass("row")} wrap={false}>
      <Text style={getClass("")}></Text>
      <Text>{children}</Text>
    </View>
  );
};

const ExpItems = ({ title, subtitle, details, date, getClass }) => {
  return (
    <View style={getClass("mb10 mt5")} wrap={false}>
      <View style={getClass("row")}>
        <Text style={getClass("experience_title h4 opacity70 lineHeight14")}>{title}</Text>
        <Text style={getClass("w95 textRight opacity60 pt5 lineHeight1")}>{date}</Text>
      </View>
      <Text style={getClass("subtitle")}>{subtitle}</Text>
      <Text>
        {details}
      </Text>
    </View>
  );
};

const TwoColumn = ({ data, getClass, type }) => {
  if (!data || data?.length === 0) {
    return null;
  }

  let perRow = Math.ceil(data.length / 2);

  const columns = [
    [...data.slice(0, perRow)],
    [...data.slice(perRow)],
  ];

  return (
    <View style={getClass("row")}>
      {
        columns.map((column, i) => <View key={i} style={getClass("col6 pr15")}>
          {
            type === "text" && column.map((e, i) => (
              <Item key={`k-${i}-${e}`} getClass={getClass}>{e}</Item>
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
            </Link>
            ))
          }
        </View>)
      }
    </View>
  );
};