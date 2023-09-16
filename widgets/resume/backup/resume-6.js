/* eslint-disable jsx-a11y/alt-text */
// coda-24

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
  title: "RozhaOne",
  400: "Lato",
  700: "Lato Bold",
  playfair: "Playfair Display",
};
Font.register({
  family: font.title,
  src: "/fonts/rozhaone/RozhaOne-Regular.ttf",
});
Font.register({
  family: font.playfair,
  src: "/fonts/playfair/PlayfairDisplay-Regular.ttf",
});
Font.register({
  family: font["300"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
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
      lineHeight: 1.6,
      padding: "40px 20px",
      fontSize: 9,
      fontFamily: font["400"],
      fontWeight: 600,
      backgroundColor: colors.BG,
      color: "#fff",
    },

    imageWrap: { width: "196mm", position: "absolute", top: 20, left: 20 },
    pageBorder: {
      border: "1px solid #fff",
      width: "100%",
      height: "280mm",
    },

    qrWrap: {
      width: 80,
      padding: 10,
      color: "red",
      backgroundColor: "#fff",
    },
    qr: {
      width: 60,
    },

    hr: {
      height: 0,
      borderTop: "1px solid #999",
      marginBottom: 5,
    },

    h1: { fontSize: 60, lineHeight: 1, fontFamily: font.title },
    h2: { fontSize: 16, fontWeight: 700, fontFamily: font["700"] },
    h3: { fontSize: 14, fontWeight: 700, fontFamily: font["700"] },
    h3: { fontSize: 12, fontWeight: 700, fontFamily: font["700"] },

    bio: {
      lineHeight: 1.4,
      fontFamily: font.playfair,
      fontSize: 17,
      fontWeight: 300,
    },

    profileImage: {
      borderRadius: 100,
      width: 120,
      height: 120,
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: 100,
    },

    item_section: {
      position: "relative",
      display: "inline-block",
      minWidth: 0,
      wordWrap: "break-word",
      marginTop: 0,
      marginBottom: 2,
    },

    circle: {
      width: 10,
      height: 10,
      border: "2px solid #fff",
      marginRight: "10px",
      borderRadius: "6px",
    },

    skills_list: {
      paddingBottom: "8px",
      fontSize: "10px",
    },

    white: { color: "#fff" },

    heading: {
      fontWeight: 700,
      letterSpacing: 2,
    },

    minHeight150: {
      minHeight: 150,
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
          <View style={getClass("pageBorder")} />
        </View>

        <View>
          <View style={getClass("p20 pt0")}>
            <View style={getClass("row")}>
              <View style={getClass("col6")}>
                <Text style={getClass("heading uppercase")}>{jobTitle}</Text>
              </View>
              <View style={getClass("col6 column textRight")}>
                <Text style={getClass("small")}>
                  New york, 11433 United States
                </Text>
                <Text style={getClass("small")}>{email}</Text>
                <Text style={getClass("font10 mt3 strong")}>{mobile}</Text>
              </View>
            </View>
            {/* END top header */}



            <View style={getClass("row mb_3")}>
              <View style={getClass("col3")}>
                {config.profile_image && profileImage?.length && (
                  <View style={getClass("mt15 mb30 profileImage")}>
                    <Image style={getClass("img")} src={profileImage} />
                  </View>
                )}
              </View>
              <View style={getClass("col9 pl_4 pt_4 pb_4 title uppercase h1")}>
                <Text>{firstName}</Text>
                <Text>{lastName}</Text>
              </View>
            </View>
          </View>
          {/* END firstName */}



          <Divider style={s.hr} />

          <View style={getClass("p20")}>
            <View style={getClass("row")}>
              <View style={getClass("col3")}>
                <Text
                  style={getClass("mt_1 strong letter_spacing_2 uppercase")}
                >
                  PROFILE
                </Text>
              </View>
              <View style={getClass("col9 pl_4")}>
                <Text style={getClass("bio")}>{bio}</Text>

                <View style={getClass("item_section")}>
                  <Text style={getClass("h3 pt_4")}>Skills</Text>

                  <TwoColumn data={skills} getClass={getClass} type="skills" />
                </View>
              </View>
            </View>
          </View>
          {/* END skills */}



          <Divider style={s.hr} />

          <View style={getClass("p20")}>
            <View style={getClass("row")}>
              <View
                style={getClass("col3 column heading minHeight150")}
                wrap={false}
              >
                <Text style={getClass("mt_1")}>EMPLOYMENT</Text>
                <Text>HISTORY</Text>
              </View>
              <View style={getClass("col9 pl_4")}>
                {experience.map((item, i) => (
                  <ExpItems
                    key={`exp-${i}`}
                    getClass={getClass}
                    title={item.company}
                    subtitle={item.position}
                    date={item.date}
                    details={item.details}
                    location={item?.city || "New York"}
                    isLast={i === education.length}
                  />
                ))}
              </View>
            </View>
          </View>
          {/* END experience */}



          <Divider style={s.hr} />

          {config.education && (
            <View>
              <View style={getClass("p20")}>
                <View style={getClass("row")}>
                  <View
                    style={getClass("col3 heading minHeight150")}
                    wrap={false}
                  >
                    <Text style={getClass("mt_1")}>EDUCATION</Text>
                  </View>
                  <View style={getClass("col9 pl_4")}>
                    {education.map((item, i) => (
                      <ExpItems
                        key={`edu-${i}`}
                        getClass={getClass}
                        title={item.school}
                        subtitle={item.course}
                        date={item.date}
                        details={item.details}
                        location={item?.city || "New York"}
                        isLast={i === education.length}
                      />
                    ))}
                  </View>
                </View>
              </View>

              <Divider style={s.hr} />
            </View>
          )
            // END education
          }



          {config.links && (
            <View>
              <View style={getClass("p20")} wrap={false}>
                <View style={getClass("row")}>
                  <View style={getClass("col3 heading")}>
                    <Text>LINKS</Text>
                  </View>
                  <View style={getClass("col9 pl_4")}>
                    <View style={getClass("row flexWrap")}>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={website}
                      >
                        <Text>{removeHttp(website)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={portfolio}
                      >
                        <Text>{removeHttp(portfolio)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={linkedin}
                      >
                        <Text>{removeHttp(linkedin)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={github}
                      >
                        <Text>{removeHttp(github)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={instagram}
                      >
                        <Text>{removeHttp(instagram)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={twitter}
                      >
                        <Text>{removeHttp(twitter)}</Text>
                      </Link>
                      <Link
                        style={getClass(" mr20 mb10 white")}
                        src={crunchBase}
                      >
                        <Text>{removeHttp(crunchBase)}</Text>
                      </Link>
                    </View>
                  </View>
                </View>
              </View>

              <Divider style={s.hr} />
            </View>
          )
            //  END links
          }

          {
            config.languages && (<View>
              <View style={getClass("p20")} wrap={false}>
                <View style={getClass("row")}>
                  <View style={getClass("col3 heading")}>
                    <Text>LANGUAGE</Text>
                  </View>
                  <View style={getClass("col9 pl_4")}>
                    <View style={getClass("row flexWrap")}>
                      {languages.map((e, i) => (
                        <Text key={`skill-${i}`} style={getClass("mr20 mb10")}>
                          {e.language}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              </View>

              <Divider style={s.hr} />
            </View>)
          }
          {/* END languages */}

          <View style={getClass("p20 pl_4")}>
            <View style={getClass("qrWrap")}>
              <Image style={getClass("qr")} src={qr} />
            </View>
          </View>
          {/* END QR */}

        </View>
      </Page>
    </Document>
  );
}

export default CreatePdf;

const Divider = ({ style }) => <View style={style} />;

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
    <View style={getClass(isLast ? "" : "mb20")} wrap={false}>
      <Text style={getClass("h2")}>
        {subtitle} at {title}, {location}
      </Text>
      <Text style={getClass("font11 opacity06")}>{date}</Text>
      <Text style={getClass("mt_2")}>{details}</Text>
    </View>
  );
};

const TwoColumn = ({ data, getClass, type }) => {
  if (!data || data?.length === 0) {
    return null;
  }

  let perRow = Math.ceil(data.length / 2);

  const columns = [[...data.slice(0, perRow)], [...data.slice(perRow)]];

  return (
    <View style={getClass("row ")}>
      {columns.map((column, i) => (
        <View key={i} style={getClass("col6 pr15")}>
          {type === "skills" &&
            column.map((e, i) => (
              <View key={`k-${i}`} style={getClass("skills_list row relative")}>
                <View style={getClass("circle")}></View>
                <Text>{e}</Text>
              </View>
            ))}
        </View>
      ))}
    </View>
  );
};
