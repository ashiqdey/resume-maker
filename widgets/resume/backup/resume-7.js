/* eslint-disable jsx-a11y/alt-text */
// coda-19
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
  400: "Lato",
  700: "Lato Bold",
};

Font.register({
  family: font["400"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
Font.register({
  family: font["700"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
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
    BG: config?.color || "#f6e2ed",
  };

  // ---------Styles----------
  const css = commonCss({
    color: colors.BG,
    font,
  });

  const s = StyleSheet.create({
    ...css,

    page: {
      lineHeight: 1.5,
      padding: "20px 35px",
      fontSize: 10,
      fontFamily: font["400"],
      fontWeight: 400,
      color: "#212529",
    },

    h1: { fontSize: 18, fontWeight: 700, fontFamily: font["700"] },
    h4: { fontSize: 12, fontWeight: 300, fontFamily: font["400"] },

    qrWrap: {
      width: 60,
    },
    qr: {
      width: "100%",
    },

    profileImage: {
      borderRadius: 100,
      width: 90,
      height: 90,
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 100,
    },
    linkItem: {
      paddingRight: 20,
      paddingBottom: 5,
      color: "#212529",
      fontWeight: 700,
      fontFamily: font["700"],
    },
    "itemDots": {
      "paddingRight": 20,
      "paddingBottom": 15
    },
    "site_link_color": {
      "color": "#000"
    },
    "text_secondary": {
      "color": "#333"
    },

    section: {
      marginBottom: 25
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

        <View>
          <View style={getClass("section mb30")}>
            <View style={getClass("row pt_4")}>
              {/* Profile header left column */}
              <View style={getClass("col3")}>
                {config.profile_image && profileImage?.length && (
                  <View style={getClass("profileImage")}>
                    <Image style={getClass("img")} src={profileImage} />
                  </View>
                )}
              </View>
              {/* END profile header left column */}


              {/* Profile header right column */}
              <View style={getClass("col9")}>
                <View style={getClass("")}>
                  <View style={getClass("mb_3 column")}>
                    {
                      config.location && <Text style={getClass("text_secondary")}>{address}</Text>
                    }
                    <View style={getClass("row")}>
                      {
                        config.phone && mobile?.length && <Text style={getClass("text_secondary pr5")}>{mobile}</Text>
                      }
                      <Text style={getClass("text_secondary")}>{email}</Text>
                    </View>
                  </View>
                  {/* END eader contact details */}

                  {/* Name and bio */}
                  <View style={getClass("column")}>
                    <Text style={getClass("h1 mb_1")}>
                      {firstName} {lastName},
                      {jobTitle}
                    </Text>
                    <Text style={getClass("h4")}>
                      {bio}
                    </Text>
                  </View>
                  {/* END firstName and bio */}
                </View>
              </View>
              {/* END rofile header right column */}
            </View>
          </View>
          {/* END Profile */}


          {/* Employment History */}
          <View style={getClass("section")}>
            <View style={getClass("row")}>
              <View style={getClass("col3")}>
                <Text style={getClass("font10 text_secondary")}>Employment History</Text>
              </View>
              <View style={getClass("col9")}>
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
          </View>
          {/* END Employment History */}


          {
            config.education && <View style={getClass("section")}>
              <View style={getClass("row")}>
                <View style={getClass("col3")}>
                  <Text style={getClass("font10 text_secondary")}>Education</Text>
                </View>
                <View style={getClass("col9")}>
                  {education.map((item, i) => (
                    <ExpItems
                      key={`edu-${i}`}
                      i={i}
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
            </View>
          }
          {/* END Education */}



          {/* Links */}
          {config.links && (<View style={getClass("section")} wrap={false}>
            <View style={getClass("row")}>
              <View style={getClass("col3")}>
                <Text style={getClass("font10 text_secondary")}>Links</Text>
              </View>
              <View style={getClass("col9")}>
                <View style={getClass("row flexWrap")}>
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
              </View>
            </View>
          </View>)}
          {/* END Links */}


          {
            config.languages && (<View style={getClass("section")} wrap={false}>
              <View style={getClass("row")}>
                <View style={getClass("col3")}>
                  <Text style={getClass("font10 text_secondary")}>Languages</Text>
                </View>
                <View style={getClass("col9")}>
                  <View style={getClass("row flexWrap mb_4 h5")}>
                    <View><Text style={getClass("itemDots")}>English</Text></View>
                    <View><Text style={getClass("itemDots")}>Dutch</Text></View>
                    <View><Text style={getClass("itemDots")}>French</Text></View>
                    <View><Text style={getClass("itemDots")}>Textish</Text></View>
                    <View><Text style={getClass("itemDots")}>Korean</Text></View>
                    <View><Text style={getClass("itemDots")}>German</Text></View>
                    <View><Text style={getClass("itemDots")}>Chinese</Text></View>
                    <View><Text style={getClass("itemDots")}>Hindi</Text></View>
                    <View><Text style={getClass("itemDots")}>Hindi</Text></View>
                    <View><Text style={getClass("itemDots")}>Hindi</Text></View>
                    <View><Text style={getClass("itemDots")}>Hindi</Text></View>
                  </View>
                </View>
              </View>
            </View>)
          }
          {/* END languages */}

          <View style={getClass("mt_4")}>
            <View style={getClass("qrWrap")}>
              <Image style={getClass("qr")} src={qr} />
            </View>
          </View>

        </View>
      </Page>
    </Document>
  );
}

export default CreatePdf;



const ExpItems = ({
  i,
  title,
  subtitle,
  location,
  details,
  date,
  getClass,
  isLast,
}) => {
  return (
    <View style={getClass(`column mb_3 ${!isLast && ""}`)} wrap={false}>
      <Text style={getClass("h4 strong")}>
        {subtitle} at {title}, {location}
      </Text>
      <Text style={getClass("small pb_2 text_secondary")}>
        {date}
      </Text>
      <Text style={getClass("")}>
        {details}
      </Text>
    </View>
  );
};

