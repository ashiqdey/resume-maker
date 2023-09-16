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
  title: "Abril Fatface",
  400: "Alexandria",
  700: "Alexandria Bold",
};
Font.register({
  family: font.title,
  src: "http://fonts.gstatic.com/s/abrilfatface/v8/X1g_KwGeBV3ajZIXQ9VnDibsRidxnYrfzLNRqJkHfFo.ttf",
});
Font.register({
  family: font["400"],
  src: "http://fonts.gstatic.com/s/alexandria/v1/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9r7TqbHHJ8BRq0b.ttf",
});
Font.register({
  family: font["700"],
  src: "http://fonts.gstatic.com/s/alexandria/v1/UMBCrPdDqW66y0Y2usFeQCH18mulUxBvI9ocSabHHJ8BRq0b.ttf",
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
    PRIMARY: "#294ca1",
    SECONDARY: "#f0484c",
  };

  // ---------Styles----------
  const css = commonCss({
    color: colors.BG,
    font,
  });

  const s = StyleSheet.create({
    ...css,

    hr: {
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(0,0,0,0.1)",
      margin: "30px auto",
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
    experience_title: {
      width: "250px",
    },





    page: {
      lineHeight: 1.6,
      padding: 30,
      fontSize: 9,
      fontFamily: font["400"],
      fontWeight: 600,
      backgroundColor: colors.BG,
      color: colors.PRIMARY,
    },

    textPrimary: { color: colors.PRIMARY },
    textSecondary: { color: colors.SECONDARY },

    hr: {
      width: "100%",
      height: "1px",
      backgroundColor: colors.PRIMARY,
      margin: "20px auto",
    },
    qr: {
      height: 60,
      width: 60,
    },

    blue_title: {
      color: colors.PRIMARY,
      fontSize: 13,
      fontFamily: font.title,
      fontWeight: 700,
    },

    sub_title: {
      color: colors.SECONDARY,
      fontSize: 9,
      fontFamily: font["700"],
      fontWeight: 700,
    },

    h1: {
      color: colors.PRIMARY,
      fontFamily: font.title,
      fontSize: 40,
    },

    profileImage: {
      backgroundColor: colors.PRIMARY,
      borderRadius: "100px",
      width: "100px",
      height: "100px",
    },

    bulletPoint: {
      height: 10,
      width: 10,
      backgroundColor: colors.PRIMARY,
      marginRight: 5,
      borderRadius: 6,
      marginTop: -3,
    },
    bulletText: {
      color: colors.PRIMARY,
      textDecoration: "none"
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

  const getAddres = (index) => {
    const arr = address.split(" ");
    if (index === 1) {
      return arr.slice(arr.length / 2, arr.length).join(" ");
    }
    return arr.slice(0, arr.length / 2).join(" ");
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
          <View style={getClass("row mt20 mb30 jcsb")}>
            {config.location && (
              <View style={getClass("col4 column")}>
                <Text>{getAddres(0)}</Text>
              </View>
            )}
            {/* <View style={getClass("col4 column")}>
              {config.phone && <Text>Ph: {mobile}</Text>}
            </View> */}
            <View style={getClass("col4 column")}>
              <Text>{email}</Text>
            </View>
          </View>

          <View style={getClass("row")}>
            <View style={getClass("col4 pr15")}>
              {config.profile_image && profileImage?.length && (
                <View style={getClass("mt15 mb30")}>
                  <Image style={getClass("profileImage")} src={profileImage} />
                </View>
              )}

              {config.links && (
                <View wrap={false}>
                  <Text style={getClass("blue_title mb5")}>Links</Text>
                  <View>
                    <Link style={getClass("bulletText")} src={website}><Item getClass={getClass}>{removeHttp(website)}</Item></Link>
                    <Link style={getClass("bulletText")} src={portfolio}><Item getClass={getClass}>{removeHttp(portfolio)}</Item></Link>
                    <Link style={getClass("bulletText")} src={linkedin}><Item getClass={getClass}>{removeHttp(linkedin)}</Item></Link>
                    <Link style={getClass("bulletText")} src={github}><Item getClass={getClass}>{removeHttp(github)}</Item></Link>
                    <Link style={getClass("bulletText")} src={instagram}><Item getClass={getClass}>{removeHttp(instagram)}</Item></Link>
                    <Link style={getClass("bulletText")} src={twitter}><Item getClass={getClass}>{removeHttp(twitter)}</Item></Link>
                    <Link style={getClass("bulletText")} src={crunchBase}><Item getClass={getClass}>{removeHttp(crunchBase)}</Item></Link>
                  </View>

                  <Divider style={s.hr} />
                </View>
              )}

              {config.education && (
                <View>
                  <Text style={getClass("blue_title")}>Education</Text>
                  {education.map((item, i) => (
                    <EducationItems
                      key={`edu-${i}`}
                      getClass={getClass}
                      title={item.school}
                      subtitle={item.course}
                      date={item.date}
                      details={item.details}
                    />
                  ))}

                  <Divider style={s.hr} />
                </View>
              )}

              {config.skills && (
                <View>
                  <Text style={getClass("blue_title")}>Skills</Text>
                  <View style={getClass("column mt10 mb5")}>
                    {skills.map((skill, i) => (
                      <Text key={`skill-${i}`}>{skill}</Text>
                    ))}
                  </View>

                  <Divider style={s.hr} />
                </View>
              )}

              {config.languages && (
                <View style={getClass("section pt-2")} wrap={false}>
                  <Text style={getClass("blue_title")}>Languages</Text>
                  <View style={getClass("column mt10 mb5")}>
                    {languages.map((e, i) => (
                      <Text key={`skill-${i}`}>{e.language}</Text>
                    ))}
                  </View>
                </View>
              )}

              <View style={getClass("mt30")}>
                <Image style={getClass("qr")} src={qr} />
              </View>
            </View>
            {/*col-4*/}

            <View style={getClass("col8 pl15")}>
              <View style={getClass("pl3")}>
                <View style={getClass("section")}>
                  <Text style={getClass("h1 firstName lineHeight14")}>{firstName} {lastName}</Text>
                  <Text style={getClass("sub_title h4")}>{jobTitle}</Text>
                </View>

                <View style={getClass("section pt-2 pb-1 mt30")}>
                  <Text style={getClass("sub_title pb-1")}>About Me</Text>
                  <Text>{bio}</Text>
                </View>
                {/*section*/}

                <Divider style={s.hr} />

                <View style={getClass("section pt-2 pb-1")}>
                  <Text style={getClass("blue_title")}>Work Experience</Text>
                  {experience.map((item, i) => (
                    <ExpItems
                      key={`exp-${i}`}
                      sl={i + 1}
                      getClass={getClass}
                      title={item.company}
                      subtitle={item.position}
                      date={item.date}
                      details={item.details}
                    />
                  ))}
                </View>
                {/*Experience*/}

              </View>
              {/* col 8 */}
            </View>
          </View>
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
    <View style={getClass("row aic mb5")} wrap={false}>
      <Text style={getClass("bulletPoint")}></Text>
      <Text>{children}</Text>
    </View>
  );
};

const EducationItems = ({ title, subtitle, details, date, getClass }) => {
  return (
    <View style={getClass("column mt10 mb5")} wrap={false}>
      <Text style={getClass("sub_title h6")}>{subtitle}</Text>
      <Text style={getClass("text pb-1 strong")}>{title}</Text>
      {/* TODO: location is static */}
      <Text>City, Country</Text>
      <Text>{date}</Text>
    </View>
  );
};

const ExpItems = ({ sl, title, subtitle, details, date, getClass }) => {
  return (
    <View style={getClass("mt10 mb5")} wrap={false}>
      <Text style={getClass("sub_title")}>
        {sl}. {title}
      </Text>
      <Text style={getClass("strong mb5")}>
        {subtitle}, {date}
      </Text>
      <Text>{details}</Text>
    </View>
  );
};
