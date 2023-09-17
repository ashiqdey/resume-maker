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
// import commonCss from "./css";

const icon = {
  email: "/img/email.png",
  mobile: "/img/call.png",
  linkedin: "/img/linkedin.png",
  github: "/img/github.png",
};

// ----------font----------
const font = {
  title: "Gloock",
  title2: "Libre",
  400: "Poppins",
  500: "Poppins",
  700: "Poppins Medium",
};
Font.register({
  family: font.title,
  src: "/fonts/gloock/Gloock-Regular.ttf",
});

Font.register({
  family: font.title2,
  src: "/fonts/LibreBaskerville-Bold.ttf",
});

Font.register({
  family: font["400"],
  src: "/fonts/Poppins-Regular.ttf",
});
Font.register({
  family: font["500"],
  src: "/fonts/Poppins-Medium.ttf",
});
Font.register({
  family: font["700"],
  src: "/fonts/Poppins-Bold.ttf",
});

// ----------END font----------

function ResumeFullStack({
  name,
  jobTitle = "Job test",
  skills = [],
  portfolio,
  experiences = [],
  educations = [],
  linkedin,
  github,
  mobile,
  email,
  projects = [],
  additionalSkills = [],

  type,
  ...props
}) {
  // ---------Styles----------
  //   const css = commonCss({
  //     color: colors.BG,
  //     font,
  //   });

  const css = {
    primary: "#ffe04a",
    secondary: "#e6e7e8",
    grey1: "#1c1c21",
    grey2: "#5e5e61",
    grey3: "#79797d",
    padding: "40px",
  };

  const s = StyleSheet.create({
    // ...css,

    page: {
      fontSize: 10,
      fontFamily: font["400"],
      fontWeight: 400,
      lineHeight: 1.6,
      padding: `30px ${css.padding} 0 ${css.padding} `,
      fontSize: 10,
      color: css.grey3,
    },

    row: { flexDirection: "row" },
    column: { flexDirection: "column" },
    aic: { alignItems: "center" },
    jcc: { justifyContent: "center" },
    jcsb: { justifyContent: "space-between" },
    flexWrap: { flexWrap: "wrap" },

    pr: { position: "relative" },
    pa: { position: "absolute" },

    w33: { width: "33%" },
    w66: { width: "66%" },

    imageWrap: { width: "196mm", position: "absolute", top: 20, left: 20 },

    seperator: {
      borderRight: "2px solid #1F2731",
      height: "280mm",
    },

    h1: {
      color: css.grey1,
      letterSpacing: 2,
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 700,
      // fontFamily: font["700"],
      fontFamily: font.title,
    },
    h2: {
      color: css.grey3,
      letterSpacing: 1.5,
      fontSize: 18,
      fontWeight: 500,
      fontFamily: font["500"],
    },
    h3: {
      color: css.grey1,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: font.title2,
    },
    h4: {
      color: css.grey1,
      fontSize: 13,
      fontWeight: 500,
      fontFamily: font["500"],
    },
    h5: {
      color: css.grey2,
      fontSize: 10,
      fontWeight: 500,
      fontFamily: font["500"],
    },
    // h4: { color: "#1F2731", letterSpacing: 1, fontSize: 13, fontWeight: 700, fontFamily: font["700"] },

    grey1: { color: css.grey1 },
    grey2: { color: css.grey2 },
    grey3: { color: css.grey3 },

    column1: {
      paddingRight: 30,
    },
    column2: {
      paddingLeft: 20,
      // borderLeft : `1px dashed #eee`,
    },

    tdn: { textDecoration: "none" },

    jobTitle: {
      letterSpacing: 3,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: font["500"],
    },

    infos: {
      padding: "4px",
      width: 200,
      transform: `translateX(${css.padding})`,
    },
    info: {
      justifyContent: "flex-end",
      width: 170,
    },
    iconWrapper: {
      padding: "6px 10px",
    },
    infoText: {
      width: 140,
      paddingRight: 10,
      textAlign: "right",
    },
    infoIcon: {
      height: 15,
      width: 15,
    },
    iconBg: {
      backgroundColor: css.secondary,
      height: 123,
      width: 35,
      right: 25,
      top: -3,
    },

    // -------------portfolio-----
    portfolio: {
      marginTop: 15,
      marginBottom: 30,
    },
    portfolioDeco: {
      backgroundColor: css.secondary,
      width: css.padding + 1,
      height: 33,
      left: `-${css.padding}`,
    },
    portfolioLinkDeco: {
      borderTop: "1px dashed #666",
      width: 160,
      height: 1,
      left: 98,
      top: 25,
    },
    portfolioText: {
      backgroundColor: css.primary,
      padding: "6px 10px",
      fontSize: 13,
      width: 280,
      fontWeight: 700,
      fontFamily: font["700"],
      zIndex: 1,
    },
    // -------------portfolio-----

    // -------------skills-----
    skills: {
      marginBottom: 15,
    },
    skill: {
      backgroundColor: "#f4f4f4",
      padding: "4px 8px 2px",
      lineHeight: 1.6,
      borderRadius: "5px",
      fontSize: 9,
      fontWeight: 700,
      fontFamily: font["700"],
      margin: "0 5px 5px 0",
    },
    skill5: {
      backgroundColor: "#e1ffe3",
      color: "#03b565",
    },
    skill4: {
      backgroundColor: "#feffd6",
      color: "#a97d30",
    },
    skill0: {
      backgroundColor: "#f7f7f7",
      color: "#aaaaaa",
    },
    // -------------skills-----

    // -------------experience-----
    experience: {
      marginBottom: 20,
      paddingLeft: 30,
    },
    experienceDot: {
      backgroundColor: css.primary,
      height: 20,
      width: 20,
      top: 0,
      left: 0,
      zIndex: 2,
    },
    experienceLine: {
      backgroundColor: css.secondary,
      height: "100%",
      width: 1.5,
      top: 20,
      left: 9,
    },
    summaryDot: {
      backgroundColor: css.grey3,
      height: 4,
      width: 4,
      opacity: 0.4,
      borderRadius: 2,
      margin: "5px 8px 0 0",
    },
    summary: {
      // wordBreak: "break-all",
      // word-break: break-word;
    },
    // ------------- experience-----

    project: {
      marginBottom: 40,
    },
    projectDot: {
      backgroundColor: css.primary,
      height: 30,
      width: 30,
      top: -6,
      left: -12,
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
    <Document
      author={name}
      title={name}
      subject={`${name} - ${jobTitle}`}
      
    >
      <Page size="A4" {...props} style={s.page} >
        {/* {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )} */}

        {/* <View fixed style={getClass("imageWrap")}>
          <View style={getClass("seperator col8 absolute")} />
        </View> */}

        <View>
          <View style={getClass("row")}>
            <View style={getClass("w66")}>
              <Text style={getClass("h1 mb_1 uppercase")}>{name}</Text>
              <Text style={getClass("h2 jobTitle")}>{jobTitle}</Text>

              <View style={getClass("portfolio pr")}>
                <View style={getClass("portfolioDeco pa")} />
                <View style={getClass("portfolioLinkDeco pa")} />

                <Text style={getClass("portfolioText pr grey1")}>
                  My portfolio{"   "}
                  <View style={getClass("pr portfolioLink")}>
                    <Link src={portfolio} style={getClass("tdn grey1")}>
                      <Text>{removeHttp(portfolio)}</Text>
                    </Link>
                  </View>
                </Text>
              </View>
            </View>

            <View style={getClass("w33")}>
              <View style={getClass("infos pr")}>
                <View style={getClass("pa iconBg")} />

                <View style={getClass("row info aic grey2")}>
                  <Text style={getClass("infoText")}>{email}</Text>
                  <View style={getClass("row iconWrapper")}>
                    <Image style={getClass("infoIcon")} src={icon.email} />
                  </View>
                </View>
                <View style={getClass("row info aic grey2")}>
                  <Text style={getClass("infoText")}>{mobile}</Text>
                  <View style={getClass("row iconWrapper")}>
                    <Image style={getClass("infoIcon")} src={icon.mobile} />
                  </View>
                </View>
                <View style={getClass("row info aic")}>
                  <Link src={linkedin} style={getClass("tdn grey2 infoText")}>
                    <Text>{removeHttp(linkedin)}</Text>
                  </Link>
                  <View style={getClass("row iconWrapper")}>
                    <Image style={getClass("infoIcon")} src={icon.linkedin} />
                  </View>
                </View>
                <View style={getClass("row info aic")}>
                  <Link src={github} style={getClass("tdn grey2 infoText")}>
                    <Text>{removeHttp(github)}</Text>
                  </Link>
                  <View style={getClass("row iconWrapper")}>
                    <Image style={getClass("infoIcon")} src={icon.github} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={getClass("row")}>
            <View style={getClass("w66 column1")}>
              <View style={getClass("row flexWrap skills")}>
                {skills.map((item, i) => (
                  <Text
                    key={`skill-${i}`}
                    style={getClass(`skill skill${item.type}`)}
                  >
                    {item.text}
                  </Text>
                ))}
              </View>

              <View style={getClass("row flexWrap experiences")}>
                <Text style={getClass("h3")}>Experiences</Text>
                {experiences.map((item, i) => (
                  <ExpItems
                    key={`exp-${i}`}
                    i={i}
                    getClass={getClass}
                    company={item.company}
                    position={item.position}
                    date={item.date}
                    summary={item.summary}
                    isLast={i === experiences.length - 1}
                  />
                ))}
              </View>
            </View>

            <View style={getClass("w33 column2")}>
              <ProjectsItems
                getClass={getClass}
                title="Major Projects"
                list={projects}
              />

              <ProjectsItems
                getClass={getClass}
                title="I Love doing"
                list={additionalSkills}
              />

              {/* <ProjectsItems
                getClass={getClass}
                title="Projects"
                list={[
                  "B2B platform that will connect global ecommerce.",
                  "Online test conducting application.",
                  "Custom chat assistant developing website.",
                ]}
              /> */}

              <EduItems {...educations[0]} getClass={getClass} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ResumeFullStack;

const ExpItems = ({ company, position, date, summary, getClass, isLast }) => {
  return (
    <View style={getClass("column experience pr")}>
      <View style={getClass("experienceDot pa")} />
      {!isLast && <View style={getClass("experienceLine pa")} />}

      <Text style={getClass("h4")}>{company}</Text>
      <Text style={getClass("h5 grey2")}>
        {position} &bull; {date}
      </Text>

      {summary.map((item, i) => (
        <View key={`summary-${i}`} style={getClass("row")}>
          <View style={getClass("summaryDot")} />
          <View>
            <Text
              key={`summary-${i}`}
              
              style={getClass("summary grey3")}
            >
              {item}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const ProjectsItems = ({ title, list, getClass }) => {
  return (
    <View style={getClass("column project pr")}>
      <View style={getClass("projectDot pa")} />
      <Text style={getClass("h3")}>{title}</Text>

      {list.map((item, i) => (
        <View key={`summary-${i}`} style={getClass("row")}>
          <View style={getClass("summaryDot")} />
          {typeof item === "string" ? (
            <Text key={`summary-${i}`} style={getClass("summary grey3")}>
              {item}
            </Text>
          ) : (
            <Link src={item.link} style={getClass("tdn")} key={`summary-${i}`}>
              <Text key={`summary-${i}`} style={getClass("summary grey3")}>
                {item.text}
              </Text>
            </Link>
          )}
        </View>
      ))}
    </View>
  );
};

const EduItems = ({ school, course, getClass }) => {
  return (
    <View style={getClass("column project pr")}>
      <View style={getClass("projectDot pa")} />
      <Text style={getClass("h3")}>Education</Text>

      <Text style={getClass("h5")}>{school}</Text>
      <Text style={getClass("grey3")}>{course}</Text>
    </View>
  );
};
