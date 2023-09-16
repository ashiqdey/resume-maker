/* eslint-disable jsx-a11y/alt-text */
// coda-8
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
  400: "Archivo",
  italic: "Archivo-Italic",
  700: "Archivo Bold",
};
Font.register({
  family: font["400"],
  src: "http://fonts.gstatic.com/s/archivo/v6/k3kQo8UDI-1M0wlSTd7iL0nAMaM.ttf",
});
Font.register({
  family: font["italic"],
  src: "http://fonts.gstatic.com/s/archivo/v6/k3kXo8UDI-1M0wlSfdzQ30LhKYiJ-Q7m8w.ttf",
});
Font.register({
  family: font["700"],
  src: "http://fonts.gstatic.com/s/archivo/v6/k3kVo8UDI-1M0wlSdWLNC0HrLaqM6Q4.ttf",
});

// ----------END font----------

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
  const colors = {
    BG: config?.color || "#fff",
  };

  // ---------Styles----------
  const css = commonCss({
    color: colors.BG,
    font,
  });

  const s = StyleSheet.create({
    ...css,

    page: {
      lineHeight: 1.6,
      padding: "40px 20px",
      fontSize: 10,
      fontFamily: font["400"],
      fontWeight: 400,
      color: "#696A6A",
    },

    imageWrap: { width: "196mm", position: "absolute", top: 20, left: 20 },
    pageBorder: {
      border: "2px solid #1F2731",
      width: "100%",
      height: "280mm",
    },

    seperator: {
      borderRight: "2px solid #1F2731",
      height: "280mm"
    },

    h1: { color: "#1F2731", letterSpacing: 2, fontSize: 30, lineHeight: 1.2, fontWeight: 700, fontFamily: font["700"] },
    h2: { color: "#1F2731", letterSpacing: 1, fontSize: 14, fontWeight: 700, fontFamily: font["700"] },
    h4: { color: "#1F2731", letterSpacing: 1, fontSize: 13, fontWeight: 700, fontFamily: font["700"] },

    qrWrap: {
      width: 45,
    },
    qr: {
      width: "100%",
    },


    "border_bottom": {
      "borderBottom": "2px solid #1F2731"
    },
    "text_secondary": {
      "color": "#3B3C3B"
    },
    "styleItalic": {
      fontFamily: font["italic"]
    },
    white: {
      backgroundColor: "#fff"
    },
    translate: {
      transform: "translateY(-19px)"
    },

    columnPadding: {
      padding: "5px 25px 25px"
    },

    linkItem: {
      color: "#696A6A",
      marginBottom: "4px"
    },

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
        {/* {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )} */}

        <View fixed style={getClass("imageWrap")}>
          <View style={getClass("seperator col8 absolute")} />
        </View>

        <View>

          <View style={getClass("translate")}>
            <View style={getClass("border_bottom white textCenter uppercase pt_4 pb_3")}>
              <Text style={getClass("h1 mb_1")}>{firstName} {lastName}</Text>
              <Text style={getClass("h2")}>{jobTitle}</Text>
            </View>

            <View style={getClass("textCenter white border_bottom p10")}>
              <View style={getClass("row jcc mb_1")}>
                <Text style={getClass("strong")}>Email: </Text>
                <Text style={getClass("")}>{email}</Text>
              </View>
              <View style={getClass("row jcc")}>
                <Text style={getClass("strong")}>Location: </Text>
                <Text style={getClass("")}>{address}</Text>
              </View>
            </View>
          </View>
          {/* END Header */}


          <View style={getClass("row")}>

            <View style={getClass("col8 columnPadding")}>

              <View>
                <Text style={getClass("h4")}>PROFILE</Text>
                <Text style={getClass("mt_2")}>
                  {bio}
                </Text>
              </View>
              {/* END Profile */}


              {/* Experience */}
              <View style={getClass("mt_4")}>
                <Text style={getClass("h4 uppercase")}>Work Experience</Text>

                <View style={getClass("mt_2")}>
                  {experience.map((item, i) => (
                    <ExpItems
                      key={`exp-${i}`}
                      i={i}
                      getClass={getClass}
                      title={item.company}
                      subtitle={item.position}
                      date={item.date}
                      details={item.details}
                      location={item?.city || "New York"}
                      isLast={i === experience.length}
                    />
                  ))}
                </View>
              </View>
              {/* END Experience */}


              {
                config.education && <View style={getClass("section pt_2")}>
                  <Text style={getClass("h4 uppercase")}>Education</Text>

                  <View style={getClass("row flexWrap mt_2")}>
                    {education.map((item, i) => (
                      <EduItems
                        key={`edu-${i}`}
                        getClass={getClass}
                        title={item.school}
                        subtitle={item.course}
                        date={item.date}
                        details={item.details}
                        location={item?.city || ""}
                        isLast={i === education.length}
                      />
                    ))}
                  </View>
                </View>
              }
              {/* END Education*/}

            </View>
            {/* END Col Left */}



            {/* Col Right */}
            <View style={getClass("col4 columnPadding")}>
              {
                config.skills && <View style={getClass("mb_4")}>
                  <Text style={getClass("h4")}>MY SKILLS</Text>
                  <View style={getClass("column mt_2 font10")}>
                    {
                      skills.map((e, i) => <Text style={getClass("mb_1")} key={i}>{e}</Text>)
                    }
                  </View>
                </View>
              }

              {
                config.languages && <View style={getClass("mb_4")} wrap={false}>
                  <Text style={getClass("h4")}>LANGUAGES</Text>

                  <View style={getClass("column mt_2 font10")}>
                    {
                      languages.map((e, i) => <Text style={getClass("mb_1")} key={i}>{e.language}</Text>)
                    }
                  </View>
                </View>
              }

              {config.links && (<View style={getClass("mb_4")} wrap={false}>
                <Text style={getClass("h4")}>LINKS</Text>

                <View style={getClass("column mt_2 font10")}>
                  <Link
                    style={getClass("linkItem")}
                    src={website}
                  >
                    <Text>{removeHttp(website)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={portfolio}
                  >
                    <Text>{removeHttp(portfolio)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={linkedin}
                  >
                    <Text>{removeHttp(linkedin)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={github}
                  >
                    <Text>{removeHttp(github)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={instagram}
                  >
                    <Text>{removeHttp(instagram)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={twitter}
                  >
                    <Text>{removeHttp(twitter)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={crunchBase}
                  >
                    <Text>{removeHttp(crunchBase)}</Text>
                  </Link>
                </View>
              </View>)}
              {/* END Links */}


              <View style={getClass("mb_4")}>
                <View style={getClass("qrWrap")}>
                  <Image style={getClass("qr")} src={qr} />
                </View>
              </View>

            </View>
          </View>
          {/* END Row */}

        </View>

        <View fixed style={getClass("imageWrap")}>
          <View style={getClass("pageBorder")} />
        </View>

      </Page>
    </Document>
  );
}

export default CreatePdf;


const ExpItems = ({
  title,
  subtitle,
  location,
  details,
  date,
  getClass,
  isLast,
}) => {
  return (
    <View style={getClass("mb_3 column")} wrap={false}>
      <Text style={getClass("h5 text_secondary uppercase")}>
        {subtitle} at {title}
      </Text>
      <View style={getClass("row styleItalic ")}>
        <Text style={getClass("pr5")}>{location}</Text>
        <Text>{date}</Text>
      </View>
      <Text style={getClass("mt3 mb_2")}>{details}</Text>
    </View>
  );
};




const EduItems = ({
  title,
  subtitle,
  location,
  details,
  date,
  getClass,
  isLast,
}) => {
  return (
    <View style={getClass("col6 mb_3 column")} wrap={false}>
      <Text style={getClass("text_secondary small")}>{date}</Text>
      <Text style={getClass("h5 text_secondary mb_1")}>{subtitle}</Text>
      <Text style={getClass("styleItalic")}>{title}</Text>
      <Text style={getClass("styleItalic")}>{location}</Text>
    </View>
  );
};

